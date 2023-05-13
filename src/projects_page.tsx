import Project from "./components/project_com";
import flutter_white from "./assets/flutter_svg_white.svg";
import react_white from "./assets/react_svg_white.svg";
import go_white from "./assets/go_svg_white.svg";
import gitbhut_svg_purple from "./assets/gitbhut_svg_purple.svg";
import line_svg from "./assets/lini_svg_purple.svg";

const ProjectPage = () => {
  return (
    // <div></div>
    
    <div className="flex flex-col bg-Background px-20 py-10 max-md:px-10 max-sm:items-start max-sm:px-2">
      <div className="bg-gradient-to-br from-pink to-black2 bg-clip-text pb-4 text-center text-6xl font-bold text-transparent max-sm:text-start max-sm:text-3xl">
        Some of the Project I have made
      </div>
      <div className="mt-5 flex flex-col space-y-10">
        <Project
          name="Multiplayer UNO Game"
          projectDescription={[
            "Created a Multiplatform Real-Time Multiplayer UNO game using Flutter and Golang with GraphQL",
            "Implemented a room feature which allows multiple games to be played simultaneously ",
            " Created a Go Azure Web App so the game can be active all the time, and anyone from anywhere can play it",
          ]}
          techIcons={[flutter_white, react_white, go_white]}
          sourceIcons={[gitbhut_svg_purple, line_svg]}
          sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
        />
        <Project
          projectDescription={[]}
          techIcons={[flutter_white, react_white, go_white]}
          sourceIcons={[gitbhut_svg_purple, line_svg]}
          name=""
          sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
          reverse={true}
        />
        <Project
          projectDescription={[]}
          techIcons={[flutter_white, react_white, go_white]}
          sourceIcons={[gitbhut_svg_purple, line_svg]}
          name=""
          sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
        />
        <Project
          projectDescription={[]}
          techIcons={[flutter_white, react_white, go_white]}
          sourceIcons={[gitbhut_svg_purple, line_svg]}
          name=""
          sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
