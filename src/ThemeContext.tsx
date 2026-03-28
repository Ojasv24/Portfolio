import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

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

    const overlayRef = useRef<HTMLDivElement | null>(null);
    const isAnimating = useRef(false);

    // Apply theme class to <html>
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(theme);
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    // Ensure overlay element exists
    useEffect(() => {
        let overlay = document.getElementById("theme-transition-overlay") as HTMLDivElement;
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "theme-transition-overlay";
            document.body.appendChild(overlay);
        }
        overlayRef.current = overlay;
        return () => {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        };
    }, []);

    const toggleTheme = useCallback((e?: React.MouseEvent) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        const overlay = overlayRef.current;

        if (overlay) {
            // Get click position (or center of screen as fallback)
            const x = e ? e.clientX : window.innerWidth / 2;
            const y = e ? e.clientY : 80;

            // Calculate the maximum radius needed to cover the entire viewport
            const maxDist = Math.max(
                Math.hypot(x, y),
                Math.hypot(window.innerWidth - x, y),
                Math.hypot(x, window.innerHeight - y),
                Math.hypot(window.innerWidth - x, window.innerHeight - y)
            );

            // Set overlay to incoming theme color
            overlay.style.cssText = `
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: 9998;
                pointer-events: none;
                background: ${nextTheme === "light" ? "#F0F1F6" : "#0C1014"};
                clip-path: circle(0px at ${x}px ${y}px);
                transition: clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            `;

            // Force reflow before starting animation
            overlay.getBoundingClientRect();

            // Expand circle to cover entire viewport
            requestAnimationFrame(() => {
                overlay.style.clipPath = `circle(${maxDist}px at ${x}px ${y}px)`;

                // Switch theme when circle covers ~60% of screen
                setTimeout(() => {
                    setTheme(nextTheme);
                }, 350);

                // Fade out overlay after theme is applied
                setTimeout(() => {
                    overlay.style.transition = "opacity 0.3s ease-out";
                    overlay.style.opacity = "0";

                    setTimeout(() => {
                        overlay.style.cssText = "";
                        isAnimating.current = false;
                    }, 300);
                }, 600);
            });
        } else {
            setTheme(nextTheme);
            isAnimating.current = false;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
