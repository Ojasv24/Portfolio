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
import uno_game from "./assets/uno_game.png";
import punchy_earth from "./assets/puncyearth.png";
import chat_app from "./assets/chatapp.png";
import atv from "./assets/atv.png";

const ProjectPage = () => {
  return (
    // <div></div>

    <div className="flex flex-col bg-Background px-20 py-10 max-md:px-10 max-sm:items-start max-sm:px-2">
      <Heading title="Some of the Project I have made" />
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
          sourceLinks={[
            "https://github.com/Ojasv24/Uno/",
            "https://unoweb-a8cb2.web.app/#/",
          ]}
          techIconsSize={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
          sourceIconsSize={["h-8 w-8", "h-8 w-8"]}
          image={uno_game}
        />
        <Project
          name="Punchy Earth a Python Game"
          projectDescription={[
            "A physics-based game where a player has to protect Earth from forthcoming asteroids using punch and shield using Python, Pygame and Pymuck",
            "Used Pygame for computer graphics and music and Pymuck for simulating physics for punches and asteroids",
            "Built for FOSSEE, IIT Bombay Python Hackathon, where over 120+ participants participated, achieved 17th Rank",
          ]}
          techIcons={[python_svg, pygame_svg, pymuch_svg]}
          sourceIcons={[gitbhut_svg_purple, youtube_svg]}
          sourceLinks={[
            "https://github.com/Ojasv24/PunchyEarth",
            "https://www.youtube.com/watch?v=9jp1KspO6KE&ab_channel=OjasvRathore",
          ]}
          techIconsSize={["h-8 w-8", "w-16", "w-16"]}
          sourceIconsSize={["h-8 w-8", "h-8 w-10"]}
          reverse={true}
          image={punchy_earth}
        />
        <Project
          name="Chat App"
          projectDescription={[
            "Created an Android application using Flutter and Firebase to chat in real time.",
            "Used Firebase as a backend to retrieve and store chats and their data",
            "It contains features like group chat, anyone-to-anyone chat, and various login methods",
          ]}
          techIcons={[flutter_white, firbase_svg]}
          sourceIcons={[gitbhut_svg_purple]}
          sourceLinks={["https://github.com/Ojasv24/ChatApp"]}
          techIconsSize={["h-8 w-8", "h-8 w-8", "h-8 w-14"]}
          sourceIconsSize={["h-8 w-8"]}
          image={chat_app}
        />
        <Project
          name="Article to Video Converter"
          projectDescription={[
            "A program which takes input an article URL and generates a video with important lines from the articles, adds images related to the line and adds music according to the article sentiment.",
          ]}
          techIcons={[python_svg, nlp_svg]}
          sourceIcons={[gitbhut_svg_purple]}
          sourceLinks={[
            "https://github.com/Ojasv24/Article-to-video-converter",
          ]}
          techIconsSize={["h-8 w-8", "w-16"]}
          sourceIconsSize={["h-8 w-8"]}
          reverse={true}
          image={atv}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
