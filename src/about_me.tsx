import flutter_svg from "./assets/flutter.svg";
import react_svg from "./assets/react2.svg";
import Skills from "./components/skills_com";
import tailwind_svg from "./assets/tailwind.svg";
import python_svg from "./assets/python.svg";
import go_svg from "./assets/go.svg";
import web_svg from "./assets/web.svg";
import firebase_svg from "./assets/firebase.svg";
import mongo_svg from "./assets/mongo.svg";
import Heading from "./components/heading";

const AboutME = () => {
  return (
    <div className="flex flex-col  items-center bg-black p-20 max-md:px-10 max-sm:content-start max-sm:items-start max-sm:px-2">
      <Heading title="About ME" />
      <div className="text-xl text-white max-sm:text-base">
        Hi, my name is Ojasv Rathore and I am a passionate Flutter developer
        with a keen interest in chess, AI, and space exploration. I am skilled
        in building Python scripts to automate tedious tasks and enjoy exploring
        the world of hacking.My focus is on creating functional and visually
        appealing apps while pushing the limits of what's possible in tech.
      </div>
      <div className="mt-10 text-center text-3xl text-purple4 max-sm:text-lg max-sm:font-semibold font-semibold">
        Here are a few technologies I’ve been working
      </div>
      <div className="flex flex-wrap justify-center gap-2 p-5">
        <Skills name="Flutter" icon={flutter_svg} size="pr-1 " />
        <Skills name="React" icon={react_svg} size="" />
        <Skills name="Tailwind" icon={tailwind_svg} size="mt-1 " />
        <Skills name="Python" icon={python_svg} size="" />
        <Skills name="Go" icon={go_svg} size="mt-3 " />
        <Skills name="HTML CSS JavaScript" icon={web_svg} size="" />
        <Skills name="Firebase" icon={firebase_svg} size="h-8 w-10 " />
        <Skills name="MongoDB" icon={mongo_svg} size="h-8 w-10 " />
      </div>

      {/* name="Flutter" icon={flutter_svg} size="w-20 h-20" */}
    </div>
  );
};

export default AboutME;
