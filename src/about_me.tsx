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
import grapql from "./assets/graphql.svg";
import flask from "./assets/flask.svg";

const AboutME = () => {
  return (
    <div className="flex flex-col  items-center bg-black p-20 max-md:px-10 max-sm:content-start max-sm:items-start max-sm:px-2">
      <Heading title="About ME" />
      <div className="text-xl text-white max-sm:text-base">
        I'm Ojasv Rathore, a full-stack developer with a passion for chess, AI,
        and space exploration. I automate tasks with Python scripts and also
        have an interest in hacking. I enjoy creating functional and visually
        appealing apps, with Flutter being one of my preferred frameworks. I'm
        constantly pushing the boundaries of technology to deliver innovative
        solutions.
      </div>
      <div className="mt-10 text-center text-3xl font-semibold text-purple4 max-sm:text-lg max-sm:font-semibold">
        Here are a few technologies I’ve been working
      </div>
      <div className="flex flex-wrap justify-center gap-2 p-5">
        <Skills name="Flutter" icon={flutter_svg} size="pr-1 " />
        <Skills name="React" icon={react_svg} size="" />
        <Skills name="Tailwind" icon={tailwind_svg} size="mt-1 " />
        <Skills name="Python" icon={python_svg} size="" />
        <Skills name="Go" icon={go_svg} size="mt-3 " />
        <Skills name="HTML CSS JavaScript" icon={web_svg} size="" />
        <Skills name="GraphQL" icon={grapql} size="" />
        <Skills name="Flask" icon={flask} size="h-8 w-1" />
        <Skills name="Firebase" icon={firebase_svg} size="h-8 w-10 " />
        <Skills name="MongoDB" icon={mongo_svg} size="h-8 w-10 " />
      </div>

      {/* name="Flutter" icon={flutter_svg} size="w-20 h-20" */}
    </div>
  );
};

export default AboutME;
