import { useRef, useState, useEffect } from "react";

interface Props {
  name: string;
  projectDescription: string[];
  techIcons: string[];
  sourceIcons: string[];
  sourceLinks: string[];
  techIconsSize: string[];
  sourceIconsSize: string[];
  image: string;
  reverse?: boolean;
  index?: number;
}

/*
 * Wavy edge clip-paths — the edge facing the content has a flowing S-curve,
 * the other three sides stay straight with rounded corners.
 * "right" variants: wavy right edge  (image on left, normal cards)
 * "left"  variants: wavy left edge   (image on right, reversed cards)
 */
const WAVE_PATHS = {
  // Wavy RIGHT edge — image is on the left
  right: [
    // gentle outward bulge then inward dip
    "M 0,0.03 C 0,0.01 0.01,0 0.03,0 L 0.88,0 C 0.88,0 0.92,0.12 0.94,0.25 C 0.97,0.42 0.88,0.55 0.90,0.7 C 0.92,0.82 0.96,0.92 0.92,1 L 0.03,1 C 0.01,1 0,0.99 0,0.97 Z",
    // sharper wave
    "M 0,0.03 C 0,0.01 0.01,0 0.03,0 L 0.90,0 C 0.90,0 0.86,0.18 0.92,0.32 C 0.98,0.46 0.85,0.62 0.88,0.78 C 0.91,0.90 0.88,1 0.88,1 L 0.03,1 C 0.01,1 0,0.99 0,0.97 Z",
  ],
  // Wavy LEFT edge — image is on the right (reversed)
  left: [
    "M 1,0.03 C 1,0.01 0.99,0 0.97,0 L 0.12,0 C 0.12,0 0.08,0.12 0.06,0.25 C 0.03,0.42 0.12,0.55 0.10,0.7 C 0.08,0.82 0.04,0.92 0.08,1 L 0.97,1 C 0.99,1 1,0.99 1,0.97 Z",
    "M 1,0.03 C 1,0.01 0.99,0 0.97,0 L 0.10,0 C 0.10,0 0.14,0.18 0.08,0.32 C 0.02,0.46 0.15,0.62 0.12,0.78 C 0.09,0.90 0.12,1 0.12,1 L 0.97,1 C 0.99,1 1,0.99 1,0.97 Z",
  ],
};

function Project(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const idx = props.index ?? 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseDelay = idx * 100;
  const isReversed = !!props.reverse;
  const waveSide = isReversed ? "left" : "right";
  const waveVariant = idx % WAVE_PATHS[waveSide].length;
  const clipId = `wave-${waveSide}-${waveVariant}`;
  const wavePath = WAVE_PATHS[waveSide][waveVariant];

  return (
    <div
      ref={ref}
      className={`project-card group relative rounded-2xl bg-gray2/40 border border-white/[0.06] transition-all duration-700 ease-out hover:border-purple1/20 hover:shadow-[0_8px_40px_rgba(156,18,220,0.08)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
        }`}
      style={{ transitionDelay: `${baseDelay}ms` }}
    >
      {/* Purple accent edge */}
      <div
        className={`absolute top-0 z-10 ${props.reverse ? "right-0" : "left-0"
          } w-[3px] rounded-full bg-gradient-to-b from-purple1 via-pink to-purple4 transition-all duration-700 ease-out ${isVisible ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        style={{ transitionDelay: `${baseDelay + 300}ms` }}
      />

      <div
        className={`flex max-lg:flex-col ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
      >
        {/* Image Section — Wavy edge where image meets content */}
        <div
          className={`lg:w-[48%] relative transition-all duration-700 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          style={{ transitionDelay: `${baseDelay + 150}ms` }}
        >
          {/* Inline SVG defs for wavy clip-path */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <path d={wavePath} />
              </clipPath>
            </defs>
          </svg>
          <div
            className="relative overflow-hidden h-full min-h-[240px]"
            style={{ clipPath: `url(#${clipId})` }}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              src={props.image}
              alt={props.name}
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Project number watermark */}
            <span className="absolute bottom-3 right-4 text-6xl font-black text-white/[0.04] select-none pointer-events-none">
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-[52%] p-8 max-sm:p-5 flex flex-col justify-center">
          {/* Top row: number badge + tech icons */}
          <div
            className={`flex items-center justify-between mb-4 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
              }`}
            style={{ transitionDelay: `${baseDelay + 250}ms` }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-purple1/10 border border-purple1/25 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-purple1" />
              <span className="text-xs font-semibold text-purple4 tracking-wider uppercase">
                Project {String(idx + 1).padStart(2, "0")}
              </span>
            </span>
            <div className="flex items-center gap-2">
              {props.techIcons.map((svg, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-8 w-8 max-sm:h-7 max-sm:w-7 rounded-lg bg-white/[0.06] border border-white/[0.08] transition-all duration-300 hover:bg-purple1/15 hover:border-purple1/30 hover:scale-110"
                >
                  <img
                    className="h-5 w-5 max-sm:h-4 max-sm:w-4 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    src={svg}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3
            className={`text-3xl font-bold mb-5 max-sm:text-2xl leading-snug transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ transitionDelay: `${baseDelay + 320}ms` }}
          >
            <span className="bg-gradient-to-r from-white via-white to-purple4 bg-clip-text text-transparent">
              {props.name}
            </span>
          </h3>

          {/* Description with left accent border */}
          <div
            className={`border-l-2 border-purple1/30 pl-4 mb-6 space-y-3 transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            style={{ transitionDelay: `${baseDelay + 400}ms` }}
          >
            {props.projectDescription.map((desc, i) => (
              <p
                key={i}
                className={`text-gray text-[15px] leading-relaxed transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                style={{
                  transitionDelay: `${baseDelay + 450 + i * 100}ms`,
                }}
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Source Links as pill buttons */}
          <div
            className={`flex items-center gap-2.5 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            style={{
              transitionDelay: `${baseDelay + 500 + props.projectDescription.length * 100}ms`,
            }}
          >
            {props.sourceIcons.map((svg, index) => (
              <a
                key={index}
                href={props.sourceLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-2 text-xs font-medium text-gray transition-all duration-300 hover:border-purple1/40 hover:bg-purple1/10 hover:text-purple4 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(156,18,220,0.12)]"
              >
                <img className="h-4 w-4" src={svg} alt="" />
                <span>{index === 0 ? "Source" : "Demo"}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
