import { useTheme } from "../ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={(e) => toggleTheme(e)}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="theme-toggle-btn group relative flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
                width: 44,
                height: 44,
                background: isDark
                    ? "linear-gradient(145deg, rgba(60,20,100,0.4), rgba(30,10,60,0.6))"
                    : "linear-gradient(145deg, rgba(255,220,130,0.4), rgba(255,180,50,0.3))",
                border: isDark
                    ? "1.5px solid rgba(180,100,255,0.3)"
                    : "1.5px solid rgba(255,180,50,0.4)",
                boxShadow: isDark
                    ? "0 4px 20px rgba(156,18,220,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                    : "0 4px 20px rgba(251,191,36,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
        >
            {/* Icon container */}
            <div className="relative" style={{ width: 24, height: 24 }}>
                {/* ═══ Moon ═══ */}
                <svg
                    viewBox="0 0 24 24"
                    className="absolute inset-0"
                    style={{
                        opacity: isDark ? 1 : 0,
                        transform: isDark
                            ? "rotate(0deg) scale(1)"
                            : "rotate(90deg) scale(0)",
                        transition: isDark
                            ? "opacity 0.3s ease 0.7s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s"
                            : "opacity 0.3s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transformOrigin: "center center",
                    }}
                >
                    {/* Moon crescent */}
                    <path
                        d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"
                        fill="url(#moonGrad)"
                        style={{
                            filter: "drop-shadow(0 0 8px rgba(200,150,255,0.5))",
                        }}
                    />
                    {/* Stars */}
                    <circle cx="19" cy="6" r="1" fill="#E0AAFF">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="16" cy="4" r="0.6" fill="#C77DFF">
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="20" cy="10" r="0.5" fill="#E0AAFF">
                        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <defs>
                        <linearGradient id="moonGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#F3E8FF" />
                            <stop offset="50%" stopColor="#D8B4FE" />
                            <stop offset="100%" stopColor="#A855F7" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* ═══ Sun ═══ */}
                <svg
                    viewBox="0 0 24 24"
                    className="absolute inset-0"
                    style={{
                        opacity: isDark ? 0 : 1,
                        transform: isDark
                            ? "rotate(-90deg) scale(0)"
                            : "rotate(0deg) scale(1)",
                        transition: isDark
                            ? "opacity 0.3s ease 0.7s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s"
                            : "opacity 0.3s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transformOrigin: "center center",
                    }}
                >
                    {/* Sun core */}
                    <circle
                        cx="12"
                        cy="12"
                        r="5"
                        fill="url(#sunGrad)"
                        style={{
                            filter: "drop-shadow(0 0 8px rgba(251,191,36,0.6))",
                        }}
                    />
                    {/* Sun rays */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const x1 = 12 + Math.cos(rad) * 7;
                        const y1 = 12 + Math.sin(rad) * 7;
                        const x2 = 12 + Math.cos(rad) * 9.5;
                        const y2 = 12 + Math.sin(rad) * 9.5;
                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#FBBF24"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <animate
                                    attributeName="stroke-opacity"
                                    values="1;0.5;1"
                                    dur={`${1.5 + i * 0.1}s`}
                                    repeatCount="indefinite"
                                />
                            </line>
                        );
                    })}
                    <defs>
                        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FEF3C7" />
                            <stop offset="60%" stopColor="#FCD34D" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </button>
    );
};

export default ThemeToggle;
