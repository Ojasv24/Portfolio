import Project from "./components/project_com";
import flutter_white from "./assets/flutter_svg_white.svg";
import react_white from "./assets/react_svg_white.svg";
import go_white from "./assets/go_svg_white.svg";
import gitbhut_svg_purple from "./assets/gitbhut_svg_purple.svg";
import line_svg from "./assets/lini_svg_purple.svg";

const ProjectPage = () => {
  return (
    <div className="flex flex-col bg-Background px-20 py-10">
      <div className="bg-gradient-to-br from-pink to-black2 bg-clip-text pb-4 text-center text-6xl font-bold text-transparent max-sm:text-3xl">
        Some of the Project I have made
      </div>
      <div className="mt-5">
        <Project
          techIcons={[flutter_white, react_white, go_white]}
          sourceIcons={[gitbhut_svg_purple, line_svg]}
          name=""
          sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
