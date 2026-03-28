import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (e?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("portfolio-theme");
        return (stored === "light" || stored === "dark") ? stored : "dark";
    });

    const isAnimating = useRef(false);

    // Apply theme class to <html>
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(theme);
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const toggleTheme = useCallback((e?: React.MouseEvent) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const nextTheme: Theme = theme === "dark" ? "light" : "dark";

        // Wave starts from the CENTER of the toggle button, not the mouse position
        let x = window.innerWidth / 2;
        let y = 80;
        if (e?.currentTarget) {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
        }

        // Max radius needed to cover entire viewport from click point
        const maxDist = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        // ── View Transition API: the Telegram-style approach ──
        // 1. Browser screenshots the OLD theme (actual content)
        // 2. We switch the DOM to the NEW theme inside the callback
        // 3. Browser screenshots the NEW theme (actual content)
        // 4. We animate ::view-transition-new(root) with an expanding circle clip
        // → User sees real CONTENT in both themes, not a solid color.

        if (!(document as any).startViewTransition) {
            // Fallback for unsupported browsers: instant switch
            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add(nextTheme);
            setTheme(nextTheme);
            isAnimating.current = false;
            return;
        }

        const transition = (document as any).startViewTransition(() => {
            // flushSync ensures React renders synchronously so the
            // view transition captures the NEW state immediately
            flushSync(() => {
                document.documentElement.classList.remove("dark", "light");
                document.documentElement.classList.add(nextTheme);
                setTheme(nextTheme);
            });
        });

        transition.ready.then(() => {
            if (nextTheme === "light") {
                // Dark → Light: NEW (light) theme expands outward from click
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${maxDist}px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration: 800,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-new(root)",
                    }
                );
            } else {
                // Light → Dark: OLD (light) theme shrinks inward toward click
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(${maxDist}px at ${x}px ${y}px)`,
                            `circle(0px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration: 800,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-old(root)",
                    }
                );
            }
        });

        transition.finished.then(() => {
            isAnimating.current = false;
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
