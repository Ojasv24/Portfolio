import downArrow from "./assets/down_arrow_svg.svg";
import upArrow from "./assets/up_arrow_svg.svg";
import { useState } from "react";
import ExtraProject from "./components/extra_project_com";
import flutter_white from "./assets/flutter_svg_white.svg";
import react_white from "./assets/react_svg_white.svg";
import go_white from "./assets/go_svg_white.svg";
import gitbhut_svg_purple from "./assets/gitbhut_svg_purple.svg";
import line_svg from "./assets/lini_svg_purple.svg";

const ExtraProjectPage = () => {
  const [show, showMore] = useState(false);
  return (
    <div className="flex flex-col items-center bg-Background px-20 max-sm:p-0">
      <button
        className="mb-4 flex space-x-2 rounded-xl border-4 border-purple1 p-2"
        onClick={() => showMore(!show)}
      >
        <div className="self-center  text-xl font-bold text-white">
          {show ? "Show less" : "Show more"}
        </div>
        <img className="animate-bounce" src={!show ? downArrow : upArrow} alt="" />
      </button>
      <div className="py-10">
        {show ? (
          <div className="flex justify-center flex-wrap gap-2  bg-Background">
            <ExtraProject
              name=""
              projectDescription={[]}
              sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
              sourceIcons={[gitbhut_svg_purple, line_svg]}
              techIcons={[flutter_white, react_white, go_white]}
            />
            <ExtraProject
              name=""
              projectDescription={[]}
              sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
              sourceIcons={[gitbhut_svg_purple, line_svg]}
              techIcons={[flutter_white, react_white, go_white]}
            />
            <ExtraProject
              name=""
              projectDescription={[]}
              sizes={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
              sourceIcons={[gitbhut_svg_purple, line_svg]}
              techIcons={[flutter_white, react_white, go_white]}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExtraProjectPage;
