import downArrow from "./assets/down_arrow_svg.svg";
import upArrow from "./assets/up_arrow_svg.svg";
import { useState } from "react";
import ExtraProject from "./components/extra_project_com";
import Project from "./components/project_com";
import flutter_white from "./assets/flutter_svg_white.svg";
import react_white from "./assets/react_svg_white.svg";
import go_white from "./assets/go_svg_white.svg";
import gitbhut_svg_purple from "./assets/gitbhut_svg_purple.svg";
import line_svg from "./assets/lini_svg_purple.svg";
import youtube_svg from "./assets/youtube_purple.svg";
import Heading from "./components/heading";
import firbase_svg from "./assets/firebase_white.svg";
import python_svg from "./assets/python_white.svg";
import pygame_svg from "./assets/pygmae.svg";
import pymuch_svg from "./assets/pymuck.svg";
import nlp_svg from "./assets/Nlp.svg";
import unity_svg from "./assets/unity.svg";

const ExtraProjectPage = () => {
  const [show, showMore] = useState(false);
  return (
    <div className="flex flex-col items-center bg-Background px-20 max-sm:p-0">
      <button
        className="mb-4 flex space-x-2 rounded-xl border-4 border-purple1 p-2 max-sm:border-2"
        onClick={() => showMore(!show)}
      >
        <div className="self-center  text-xl font-bold text-white max-sm:text-lg">
          {show ? "Show less" : "Show more"}
        </div>
        <img
          className="animate-bounce max-sm:h-6 max-sm:w-6"
          src={!show ? downArrow : upArrow}
          alt=""
        />
      </button>
      <div className="py-10">
        {show ? (
          <div className="flex flex-wrap justify-center gap-2  bg-Background">
            <ExtraProject
              name="YouTube Video Downloader"
              projectDescription={[
                "An app for downloading YouTube videos and also converting them to mp3. And also able to download twitter videos, facebook videos, and instagram videos.",
              ]}
              techIcons={[flutter_white, python_svg]}
              techIconsSize={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
              sourceIcons={[gitbhut_svg_purple]}
              sourceIconsSize={["h-8 w-8"]}
              sourceLinks={[
                "https://github.com/Ojasv24/youtube_downloader_app",
              ]}
            />
            <ExtraProject
              name="O Lens"
              projectDescription={[
                "A Windows Application for reading text from Images, with interactive UI and also able to read text from the clipboard.",
              ]}
              techIcons={[flutter_white, python_svg]}
              techIconsSize={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
              sourceIcons={[gitbhut_svg_purple]}
              sourceIconsSize={["h-8 w-8"]}
              sourceLinks={["https://github.com/Ojasv24/olens"]}
            />
            <ExtraProject
              name="Sudoku Solver"
              projectDescription={[
                "A simple Sudoku Solver. Which interactively takes input and shows results like it's solving.",
              ]}
              techIcons={[unity_svg]}
              techIconsSize={["h-10 w-10"]}
              sourceIcons={[gitbhut_svg_purple, line_svg]}
              sourceIconsSize={["h-8 w-8", "h-8 w-8"]}
              sourceLinks={[
                "https://github.com/Ojasv24/SudukoSolver",
                "https://sudoku-3925f.web.app/",
              ]}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExtraProjectPage;
