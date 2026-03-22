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
import Heading from "./components/heading";

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

const SectionDivider = () => (
    <div className="flex items-center justify-center py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple1 to-transparent opacity-30" />
    </div>
);

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
        <div className="bg-black">
            <div className="px-20 pb-16 pt-10 max-md:px-10 max-sm:px-4">
                <div className="flex justify-center">
                    <Heading title="Technical Skills" />
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 max-lg:grid-cols-1">
                    {skillCategories.map((category, catIdx) => (
                        <div
                            key={category.title}
                            className="group relative overflow-hidden rounded-3xl border border-gray2 bg-gray2 p-6 transition-all duration-500 hover:border-purple1 hover:shadow-lg hover:shadow-purple1/10 max-sm:p-4"
                        >
                            {/* Accent bar top */}
                            <div
                                className="absolute left-0 top-0 h-1 w-full opacity-60 transition-all duration-500 group-hover:opacity-100"
                                style={{
                                    background: `linear-gradient(90deg, ${category.accentColor}, transparent)`,
                                }}
                            />

                            {/* Category header */}
                            <div className="mb-5 flex items-center gap-3">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: category.accentColor + "30" }}
                                >
                                    <category.titleIcon
                                        size={20}
                                        color={category.accentColor}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white max-sm:text-lg">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Curved separator */}
                            <svg
                                viewBox="0 0 400 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4 w-full"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 6C100 12 200 0 300 6C350 9 380 3 400 6"
                                    stroke={category.accentColor}
                                    strokeWidth="1.5"
                                    strokeOpacity="0.4"
                                />
                            </svg>

                            {/* Skills grid */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 rounded-2xl border border-transparent bg-Background px-4 py-2.5 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:border-purple1 hover:shadow-md hover:shadow-purple1/10 max-sm:px-3 max-sm:py-2 max-sm:text-sm"
                                    >
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white2 max-sm:h-6 max-sm:w-6">
                                            <skill.icon
                                                size={16}
                                                color="#000000"
                                                className="max-sm:h-3 max-sm:w-3"
                                            />
                                        </div>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>

                            {/* Floating accent orb bg decoration */}
                            <div
                                className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-5 blur-2xl transition-opacity duration-500 group-hover:opacity-10"
                                style={{ backgroundColor: category.accentColor }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;
