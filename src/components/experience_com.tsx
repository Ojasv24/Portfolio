import useIsVisible from "../utils/useFadeIn";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface ProjectSection {
    title: string;
    bullets: string[];
}

interface Props {
    role: string;
    company: string;
    location: string;
    period: string;
    bullets?: string[];
    projects?: ProjectSection[];
    logo?: string;
    description?: string;
    isLast?: boolean;
    index?: number;
}

function ExperienceCard(props: Props) {
    const { ref, isVisible } = useIsVisible(true);

    const delay = props.index ? `${props.index * 200}ms` : "0ms";

    return (
        <div className="relative flex gap-6 max-sm:gap-3" ref={ref as any}>
            {/* Timeline connector */}
            <div className="flex flex-col items-center">
                {/* Glowing dot */}
                <div
                    className={
                        "relative z-10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-purple1 bg-Background transition-all duration-500 " +
                        (isVisible ? "animate-pulseGlow" : "opacity-0")
                    }
                >
                    <div className="h-2.5 w-2.5 rounded-full bg-purple1"></div>
                </div>
                {/* Vertical line */}
                {!props.isLast && (
                    <div className="relative w-0.5 flex-grow bg-gray2">
                        <div
                            className={
                                "absolute left-0 top-0 w-full bg-gradient-to-b from-purple1 to-purple2 " +
                                (isVisible ? "animate-growLine" : "h-0")
                            }
                        ></div>
                    </div>
                )}
            </div>

            {/* Card */}
            <div
                className={
                    "mb-8 flex-1 transition-all duration-700 " +
                    (isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0")
                }
                style={{ transitionDelay: delay }}
            >
                <div className="group rounded-3xl border-2 border-gray2 bg-gray2 p-6 transition-all duration-500 hover:border-purple1 hover:shadow-lg hover:shadow-purple1/20 max-sm:p-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                            {props.logo && (
                                <div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        className="h-12 w-12 rounded-xl max-sm:h-9 max-sm:w-9"
                                        src={props.logo}
                                        alt={props.company}
                                    />
                                </div>
                            )}
                            <div>
                                <span className="text-3xl font-bold text-white max-sm:text-xl">
                                    {props.role}
                                </span>
                                <span className="ml-2 text-xl font-semibold text-purple4 max-sm:text-base">
                                    @ {props.company}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full bg-purple1 bg-opacity-20 px-3 py-1 text-sm font-medium text-purple4 max-sm:text-xs">
                            <FaCalendarAlt size={12} className="text-purple4" />
                            {props.period}
                        </div>
                    </div>

                    {/* Location */}
                    <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-purple4 max-sm:text-xs">
                        <FaMapMarkerAlt size={12} className="text-purple1" />
                        {props.location}
                    </div>

                    {/* Description */}
                    {props.description && (
                        <div className="mt-3 text-base text-white max-sm:text-sm">
                            {props.description}
                        </div>
                    )}

                    {/* Bullets */}
                    {props.bullets && (
                        <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-white max-sm:text-sm">
                            {props.bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                        </ul>
                    )}

                    {/* Projects */}
                    {props.projects && (
                        <div className="mt-4 space-y-4">
                            {props.projects.map((project, idx) => (
                                <div key={idx}>
                                    <div className="text-lg font-semibold text-purple4 max-sm:text-base">
                                        {project.title}
                                    </div>
                                    <ul className="mt-1 list-disc space-y-1 pl-6 text-base text-white max-sm:text-sm">
                                        {project.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
