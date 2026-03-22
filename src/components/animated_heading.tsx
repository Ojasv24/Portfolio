import { useRef, useEffect, useState, useMemo } from "react";
import anime from "animejs";

interface Props {
    title: string;
    /** Optional delay (ms) before the animation starts once visible */
    delay?: number;
    /** Swap the color pattern: even words become purple, odd words become white */
    invertColors?: boolean;
    /** Only the first word is white, all remaining words are purple */
    firstWordWhite?: boolean;
}

/** Split title into words, assign each character a word-index for alternating colors */
function buildLetters(title: string) {
    const words = title.split(" ");
    const result: { char: string; wordIdx: number }[] = [];
    words.forEach((word, wIdx) => {
        if (wIdx > 0) result.push({ char: " ", wordIdx: wIdx }); // space inherits next word color
        for (const ch of word) result.push({ char: ch, wordIdx: wIdx });
    });
    return { letters: result, wordCount: words.length };
}

const AnimatedHeading = ({ title, delay = 0, invertColors = false, firstWordWhite = false }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const { letters, wordCount } = useMemo(() => buildLetters(title), [title]);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    runAnimation();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const runAnimation = () => {
        const letterEls = containerRef.current?.querySelectorAll(".anim-letter");
        if (!letterEls) return;

        const tl = anime.timeline({ easing: "easeOutExpo" });

        /* ── Letters pop in one by one (fast) ── */
        tl.add({
            targets: Array.from(letterEls),
            opacity: [0, 1],
            translateY: ["0.5em", "0em"],
            scale: [0.4, 1],
            filter: ["blur(6px)", "blur(0px)"],
            duration: 450,
            delay: anime.stagger(35, { start: delay }),
            easing: "easeOutBack",
        });

        /* ── Subtle glow pulse on all letters ── */
        tl.add(
            {
                targets: Array.from(letterEls),
                textShadow: [
                    "0 0 0px rgba(156, 18, 220, 0)",
                    "0 0 20px rgba(156, 18, 220, 0.6)",
                    "0 0 0px rgba(156, 18, 220, 0)",
                ],
                duration: 800,
                delay: anime.stagger(20),
                easing: "easeInOutSine",
            },
            "-=400"
        );
    };

    const purple = "bg-gradient-to-br from-purple3 to-purple1 bg-clip-text text-transparent";
    const white = "text-white";

    const getColorClass = (wordIdx: number) => {
        if (firstWordWhite) return wordIdx === 0 ? white : purple;
        if (wordCount <= 1) return purple;
        const isEven = wordIdx % 2 === 0;
        if (invertColors) return isEven ? purple : white;
        return isEven ? white : purple;
    };

    return (
        <div className="relative flex flex-col items-center pb-4" ref={containerRef}>
            {/* Heading text */}
            <div className="relative inline-block text-center text-6xl font-bold max-sm:text-3xl">
                {/* Letters */}
                {letters.map(({ char, wordIdx }, i) => (
                    <span
                        key={`${char}-${i}`}
                        className={`anim-letter inline-block opacity-0 ${getColorClass(wordIdx)}`}
                        style={{
                            whiteSpace: char === " " ? "pre" : undefined,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnimatedHeading;
