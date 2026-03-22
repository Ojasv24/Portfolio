import {
    SiGo,
    SiPython,
    SiTypescript,
    SiDart,
    SiSharp,
    SiPostgresql,
    SiApachekafka,
    SiRedis,
    SiKubernetes,
    SiDocker,
    SiPrometheus,
    SiGrafana,
    SiMongodb,
    SiElasticsearch,
    SiFlutter,
    SiReact,
    SiAngular,
    SiNodedotjs,
    SiDotnet,
    SiGraphql,
    SiGit,
} from "react-icons/si";
import {
    FaDatabase,
    FaServer,
    FaCogs,
    FaClock,
    FaProjectDiagram,
    FaCode,
    FaLayerGroup,
    FaCloud,
} from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import type { IconType } from "react-icons";
import AnimatedHeading from "./components/animated_heading";
import useIsVisible from "./utils/useFadeIn";

interface SkillItem {
    name: string;
    icon: IconType;
}

interface SkillCategory {
    title: string;
    titleIcon: IconType;
    accentColor: string;
    skills: SkillItem[];
}

/* ── Single category card with staggered reveal ── */
function SkillCategoryCard({
    category,
    index,
}: {
    category: SkillCategory;
    index: number;
}) {
    const { ref, isVisible } = useIsVisible(true);
    const delay = `${index * 150}ms`;

    return (
        <div
            ref={ref as any}
            className={
                "skill-card group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out " +
                (isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0")
            }
            style={{ transitionDelay: delay }}
        >
            {/* Animated gradient border on hover */}
            <div className="skill-card-border pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Card inner */}
            <div className="skill-card-inner relative rounded-2xl p-6 max-sm:p-4">
                {/* Top accent line */}
                <div
                    className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${category.accentColor}90, transparent)`,
                    }}
                />

                {/* Category header */}
                <div className="mb-5 flex items-center gap-3.5">
                    <div
                        className="skill-icon-container flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-400 group-hover:scale-110"
                        style={
                            {
                                "--accent": category.accentColor,
                            } as React.CSSProperties
                        }
                    >
                        <category.titleIcon
                            size={20}
                            color={category.accentColor}
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white max-sm:text-lg">
                            {category.title}
                        </h3>
                        <div className="mt-0.5 text-xs font-medium text-gray">
                            {category.skills.length} skills
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="mb-5 h-px bg-gradient-to-r from-transparent via-gray2 to-transparent"></div>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                        <div
                            key={skill.name}
                            className={
                                "skill-chip flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-base font-medium text-white transition-all duration-500 max-sm:px-3 max-sm:py-2 max-sm:text-sm " +
                                (isVisible
                                    ? "translate-y-0 scale-100 opacity-100"
                                    : "translate-y-4 scale-95 opacity-0")
                            }
                            style={{
                                transitionDelay: `${parseInt(delay) + 200 + sIdx * 50
                                    }ms`,
                                ["--accent" as string]: category.accentColor,
                            }}
                        >
                            <div className="skill-chip-icon flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 max-sm:h-6 max-sm:w-6">
                                <skill.icon
                                    size={16}
                                    className="text-white max-sm:h-3 max-sm:w-3"
                                />
                            </div>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Ambient glow orb */}
                <div
                    className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-[0.04] blur-3xl transition-opacity duration-700 group-hover:opacity-[0.1]"
                    style={{ backgroundColor: category.accentColor }}
                />
                <div
                    className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full opacity-[0.03] blur-3xl transition-opacity duration-700 group-hover:opacity-[0.07]"
                    style={{ backgroundColor: category.accentColor }}
                />
            </div>
        </div>
    );
}

const TechnicalSkills = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Languages",
            titleIcon: FaCode,
            accentColor: "#9C12DC",
            skills: [
                { name: "Go", icon: SiGo },
                { name: "Python", icon: SiPython },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Dart", icon: SiDart },
                { name: "C#", icon: SiSharp },
                { name: "SQL", icon: FaDatabase },
            ],
        },
        {
            title: "Backend",
            titleIcon: FaServer,
            accentColor: "#B41992",
            skills: [
                { name: "gRPC", icon: VscServerProcess },
                { name: "Protocol Buffers", icon: FaServer },
                { name: "REST APIs", icon: FaServer },
                { name: "Kafka", icon: SiApachekafka },
                { name: "Redis", icon: SiRedis },
                { name: "Microservices", icon: FaCogs },
                { name: "ETA/SLA Systems", icon: FaClock },
            ],
        },
        {
            title: "Infra & DBs",
            titleIcon: FaCloud,
            accentColor: "#9C12DC",
            skills: [
                { name: "Kubernetes", icon: SiKubernetes },
                { name: "Docker", icon: SiDocker },
                { name: "Prometheus", icon: SiPrometheus },
                { name: "Grafana", icon: SiGrafana },
                { name: "CI/CD", icon: FaProjectDiagram },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MongoDB", icon: SiMongodb },
                { name: "Elasticsearch", icon: SiElasticsearch },
                { name: "MS SQL", icon: FaDatabase },
            ],
        },
        {
            title: "Frameworks",
            titleIcon: FaLayerGroup,
            accentColor: "#B41992",
            skills: [
                { name: "Flutter", icon: SiFlutter },
                { name: "React", icon: SiReact },
                { name: "Angular", icon: SiAngular },
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Entity Framework", icon: SiDotnet },
                { name: "GraphQL", icon: SiGraphql },
                { name: "Git", icon: SiGit },
            ],
        },
    ];

    return (
        <section className="relative overflow-hidden bg-black px-6 pb-20 pt-12 sm:px-12 md:px-20 lg:px-28">
            {/* Background ambient glow */}
            <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-purple1/[0.03] blur-[140px]"></div>
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[500px] translate-x-1/2 rounded-full bg-pink/[0.03] blur-[120px]"></div>

            <div className="flex justify-center">
                <AnimatedHeading title="Technical Skills" invertColors />
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 max-lg:grid-cols-1">
                {skillCategories.map((category, catIdx) => (
                    <SkillCategoryCard
                        key={category.title}
                        category={category}
                        index={catIdx}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechnicalSkills;
