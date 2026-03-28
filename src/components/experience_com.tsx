import { useState } from "react";
import useIsVisible from "../utils/useFadeIn";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

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
    const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set([0]));

    const delay = props.index ? `${props.index * 300}ms` : "0ms";

    const toggleProject = (idx: number) => {
        setExpandedProjects((prev) => {
            const next = new Set(prev);
            if (next.has(idx)) next.delete(idx);
            else next.add(idx);
            return next;
        });
    };

    return (
        <div className="relative flex gap-8 max-md:gap-5 max-sm:gap-3" ref={ref as any}>
            {/* ── Timeline Rail ── */}
            <div className="flex flex-col items-center pt-1">
                {/* Outer ring with animated glow */}
                <div
                    className={
                        "exp-timeline-node relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-700 " +
                        (isVisible
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0")
                    }
                >
                    {/* Inner pulsing core */}
                    <div className="h-3 w-3 rounded-full bg-purple1 shadow-[0_0_12px_rgba(156,18,220,0.8)]"></div>
                </div>
                {/* Animated connector line */}
                {!props.isLast && (
                    <div className="relative w-[2px] flex-grow overflow-hidden rounded-full bg-gray2/50">
                        <div
                            className={
                                "exp-line-glow absolute left-0 top-0 w-full rounded-full " +
                                (isVisible ? "animate-growLine" : "h-0")
                            }
                        ></div>
                    </div>
                )}
            </div>

            {/* ── Card ── */}
            <div
                className={
                    "mb-10 flex-1 transition-all duration-700 ease-out max-sm:mb-6 " +
                    (isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0")
                }
                style={{ transitionDelay: delay }}
            >
                {/* Glassmorphism card with animated gradient border */}
                <div className="exp-card group relative overflow-hidden rounded-2xl transition-all duration-500">
                    {/* Animated gradient border layer */}
                    <div className="exp-card-border pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {/* Card inner */}
                    <div className="exp-card-inner relative rounded-2xl p-6 max-sm:p-4">
                        {/* Subtle gradient accent at top */}
                        <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple1/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* ── Header Row ── */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="flex items-start gap-4 max-sm:gap-3">
                                {/* Company logo with gradient ring */}
                                {props.logo && (
                                    <div className="exp-logo-ring relative flex-shrink-0 rounded-xl p-[2px] transition-transform duration-500 group-hover:scale-105">
                                        <div className="rounded-xl bg-Background p-1">
                                            <img
                                                className="h-11 w-11 rounded-lg object-contain max-sm:h-8 max-sm:w-8"
                                                src={props.logo}
                                                alt={props.company}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-bold leading-tight tracking-tight text-white max-sm:text-xl">
                                        {props.role}
                                    </h3>
                                    <span className="mt-0.5 text-xl font-semibold text-purple4 max-sm:text-base">
                                        {props.company}
                                    </span>
                                </div>
                            </div>

                            {/* Meta badges */}
                            <div className="flex flex-col items-end gap-1.5 max-sm:flex-row max-sm:flex-wrap max-sm:items-start">
                                <div className="exp-badge flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-purple4 max-sm:text-xs">
                                    <FaCalendarAlt size={12} className="text-purple1" />
                                    {props.period}
                                </div>
                                <div className="exp-badge flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gray max-sm:text-xs">
                                    <FaMapMarkerAlt size={12} className="text-purple1/70" />
                                    {props.location}
                                </div>
                            </div>
                        </div>

                        {/* ── Divider ── */}
                        <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray2 to-transparent max-sm:my-3"></div>

                        {/* ── Description ── */}
                        {props.description && (
                            <p className="mb-3 text-base leading-relaxed text-gray max-sm:text-sm">
                                {props.description}
                            </p>
                        )}

                        {/* ── Bullet Points ── */}
                        {props.bullets && (
                            <ul className="space-y-3 max-sm:space-y-2">
                                {props.bullets.map((bullet, index) => (
                                    <li
                                        key={index}
                                        className={
                                            "exp-bullet flex items-start gap-3 text-base leading-relaxed text-white2 transition-all duration-500 max-sm:text-sm " +
                                            (isVisible
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-4 opacity-0")
                                        }
                                        style={{
                                            transitionDelay: `${parseInt(delay) + index * 80}ms`,
                                        }}
                                    >
                                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple1 shadow-[0_0_6px_rgba(156,18,220,0.5)]"></span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* ── Projects (Accordion) ── */}
                        {props.projects && (
                            <div className="mt-4 space-y-2 max-sm:mt-3">
                                {props.projects.map((project, idx) => (
                                    <div
                                        key={idx}
                                        className="exp-project-card overflow-hidden rounded-xl transition-all duration-300"
                                    >
                                        {/* Project header — clickable */}
                                        <button
                                            onClick={() => toggleProject(idx)}
                                            className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-200 hover:bg-purple1/5 max-sm:px-3 max-sm:py-2"
                                        >
                                            <span className="text-base font-semibold text-purple4 max-sm:text-sm">
                                                {project.title}
                                            </span>
                                            <FaChevronDown
                                                size={12}
                                                className={
                                                    "flex-shrink-0 text-purple4/60 transition-transform duration-300 " +
                                                    (expandedProjects.has(idx)
                                                        ? "rotate-180"
                                                        : "rotate-0")
                                                }
                                            />
                                        </button>

                                        {/* Collapsible bullets */}
                                        <div
                                            className={
                                                "overflow-hidden transition-all duration-400 ease-in-out " +
                                                (expandedProjects.has(idx)
                                                    ? "max-h-96 opacity-100"
                                                    : "max-h-0 opacity-0")
                                            }
                                        >
                                            <ul className="space-y-2 px-4 pb-3 max-sm:px-3 max-sm:pb-2">
                                                {project.bullets.map((bullet, bIdx) => (
                                                    <li
                                                        key={bIdx}
                                                        className="flex items-start gap-3 text-base leading-relaxed text-white2 max-sm:text-sm"
                                                    >
                                                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-purple4/50"></span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
