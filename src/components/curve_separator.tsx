import { useTheme } from "../ThemeContext";

interface Props {
    topColor?: string;
    bottomColor?: string;
    topType?: "primary" | "secondary";
    bottomType?: "primary" | "secondary";
    variant?: "wave" | "slope" | "double";
}

const themeColors = {
    dark: { primary: "#0C1014", secondary: "#0C0C0C" },
    light: { primary: "#F0F1F6", secondary: "#FFFFFF" },
};

const CurveSeparator = ({
    topColor,
    bottomColor,
    topType = "primary",
    bottomType = "secondary",
    variant = "wave",
}: Props) => {
    const { theme } = useTheme();
    const resolvedTop = topColor ?? themeColors[theme][topType];
    const resolvedBottom = bottomColor ?? themeColors[theme][bottomType];

    const paths: Record<string, string> = {
        wave: "M0,0 L0,40 Q150,100 400,40 Q650,-20 900,40 Q1050,70 1200,40 L1200,0 Z",
        slope:
            "M0,0 L0,60 Q300,0 600,40 Q900,80 1200,20 L1200,0 Z",
        double:
            "M0,0 L0,30 Q200,80 400,30 Q600,-20 800,40 Q1000,80 1200,30 L1200,0 Z",
    };

    return (
        <div className="relative -mb-px" style={{ backgroundColor: resolvedBottom }}>
            <svg
                viewBox="0 0 1200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block w-full"
                preserveAspectRatio="none"
                style={{ height: "60px" }}
            >
                <path d={paths[variant]} fill={resolvedTop} />
            </svg>
        </div>
    );
};

export default CurveSeparator;
