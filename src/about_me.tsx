import Heading from "./components/heading";
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
} from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import type { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const AboutME = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "Go", icon: SiGo, color: "#000000" },
        { name: "Python", icon: SiPython, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#000000" },
        { name: "Dart", icon: SiDart, color: "#000000" },
        { name: "C#", icon: SiSharp, color: "#000000" },
        { name: "SQL", icon: FaDatabase, color: "#000000" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "gRPC", icon: VscServerProcess, color: "#000000" },
        { name: "Protocol Buffers", icon: FaServer, color: "#000000" },
        { name: "REST APIs", icon: FaServer, color: "#000000" },
        { name: "Kafka", icon: SiApachekafka, color: "#000000" },
        { name: "Redis", icon: SiRedis, color: "#000000" },
        { name: "Microservices", icon: FaCogs, color: "#000000" },
        { name: "ETA/SLA Systems", icon: FaClock, color: "#000000" },
      ],
    },
    {
      title: "Infra & DBs",
      skills: [
        { name: "Kubernetes", icon: SiKubernetes, color: "#000000" },
        { name: "Docker", icon: SiDocker, color: "#000000" },
        { name: "Prometheus", icon: SiPrometheus, color: "#000000" },
        { name: "Grafana", icon: SiGrafana, color: "#000000" },
        { name: "CI/CD", icon: FaProjectDiagram, color: "#000000" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#000000" },
        { name: "Elasticsearch", icon: SiElasticsearch, color: "#000000" },
        { name: "MS SQL", icon: FaDatabase, color: "#000000" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Flutter", icon: SiFlutter, color: "#000000" },
        { name: "React", icon: SiReact, color: "#000000" },
        { name: "Angular", icon: SiAngular, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#000000" },
        { name: "Entity Framework", icon: SiDotnet, color: "#000000" },
        { name: "GraphQL", icon: SiGraphql, color: "#000000" },
        { name: "Git", icon: SiGit, color: "#000000" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-black p-20 max-md:px-10 max-sm:content-start max-sm:items-start max-sm:px-2">
      <Heading title="About ME" />
      <div className="text-xl text-white max-sm:text-base">
        I'm Ojasv Rathore, a Backend Engineer at Swiggy, where I architect
        high-throughput delivery logistics, ETA prediction engines, and SLA
        compliance systems at scale. From designing real-time Redis caching
        pipelines to building custom order transformers and microservice
        architectures, my work directly impacts millions of daily orders.
        Awarded twice at org-level for compliance and driver experience impact,
        I thrive on solving complex distributed systems problems. Beyond
        backend, I enjoy building functional and visually appealing apps with
        Flutter, React, and Angular.
      </div>
      <div className="mt-10 text-center text-3xl font-semibold text-purple4 max-sm:text-lg max-sm:font-semibold">
        Technical Skills
      </div>

      <div className="mt-6 flex w-full flex-col gap-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <div className="mb-2 text-lg font-semibold text-purple4 max-sm:text-base">
              {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full bg-gray2 px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:scale-105 max-sm:text-sm"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white2 max-sm:h-6 max-sm:w-6">
                    <skill.icon size={16} color={skill.color} />
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutME;
