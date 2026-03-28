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

        // Detect mobile or reduced motion preference
        const isMobile = window.innerWidth < 768;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Skip heavy animation on mobile or if user prefers reduced motion
        if (isMobile || prefersReducedMotion || !(document as any).startViewTransition) {
            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add(nextTheme);
            setTheme(nextTheme);
            isAnimating.current = false;
            return;
        }

        // Wave starts from the CENTER of the toggle button
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

        const transition = (document as any).startViewTransition(() => {
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
