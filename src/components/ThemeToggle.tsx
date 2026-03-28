import { useTheme } from "../ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={(e) => toggleTheme(e)}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="theme-toggle-btn group relative flex items-center justify-center overflow-hidden rounded-full transition-all duration-500"
            style={{ width: 40, height: 40 }}
        >
            {/* Animated background */}
            <span
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{
                    background: isDark
                        ? "linear-gradient(135deg, rgba(156,18,220,0.15), rgba(48,5,102,0.25))"
                        : "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.15))",
                    border: isDark
                        ? "1px solid rgba(156,18,220,0.2)"
                        : "1px solid rgba(245,158,11,0.25)",
                }}
            />

            {/* Hover glow */}
            <span
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    boxShadow: isDark
                        ? "0 0 16px rgba(156,18,220,0.3), inset 0 0 8px rgba(221,148,255,0.1)"
                        : "0 0 16px rgba(251,191,36,0.35), inset 0 0 8px rgba(251,191,36,0.1)",
                }}
            />

            {/* Sun / Moon container with rotation */}
            <span
                className="relative z-10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]"
                style={{
                    transform: isDark ? "rotate(0deg)" : "rotate(360deg)",
                }}
            >
                {/* Moon (visible in dark mode) */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute transition-all duration-500"
                    style={{
                        width: 20,
                        height: 20,
                        opacity: isDark ? 1 : 0,
                        transform: isDark ? "scale(1) rotate(0deg)" : "scale(0.3) rotate(-90deg)",
                    }}
                >
                    <path
                        d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        fill="url(#moonGrad)"
                        stroke="rgba(221,148,255,0.6)"
                        strokeWidth="0.5"
                    />
                    {/* Stars around moon */}
                    <circle cx="19" cy="5" r="0.8" fill="#DD94FF" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="16" cy="3" r="0.5" fill="#DD94FF" opacity="0.5">
                        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="21" cy="8" r="0.4" fill="#B41992" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <defs>
                        <linearGradient id="moonGrad" x1="3" y1="3" x2="21" y2="21">
                            <stop offset="0%" stopColor="#DD94FF" />
                            <stop offset="100%" stopColor="#9C12DC" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Sun (visible in light mode) */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute transition-all duration-500"
                    style={{
                        width: 20,
                        height: 20,
                        opacity: isDark ? 0 : 1,
                        transform: isDark ? "scale(0.3) rotate(90deg)" : "scale(1) rotate(0deg)",
                    }}
                >
                    {/* Sun core */}
                    <circle cx="12" cy="12" r="4.5" fill="url(#sunGrad)">
                        <animate attributeName="r" values="4.5;4.8;4.5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    {/* Sun rays */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const x1 = 12 + Math.cos(rad) * 6.5;
                        const y1 = 12 + Math.sin(rad) * 6.5;
                        const x2 = 12 + Math.cos(rad) * 8.5;
                        const y2 = 12 + Math.sin(rad) * 8.5;
                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#F59E0B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                opacity="0.9"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.9;0.5;0.9"
                                    dur={`${1.5 + i * 0.2}s`}
                                    repeatCount="indefinite"
                                />
                            </line>
                        );
                    })}
                    <defs>
                        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FCD34D" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </radialGradient>
                    </defs>
                </svg>
            </span>
        </button>
    );
};

export default ThemeToggle;
