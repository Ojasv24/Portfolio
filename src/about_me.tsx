import flutter_svg from "./assets/flutter.svg";
import react_svg from "./assets/react2.svg";
import Skills from "./components/skills_com";
import tailwind_svg from "./assets/tailwind.svg";
import python_svg from "./assets/python.svg";
import go_svg from "./assets/go.svg";
import web_svg from "./assets/web.svg";
import firebase_svg from "./assets/firebase.svg";
import mongo_svg from "./assets/mongo.svg";

const AboutME = () => {
  return (
    <div className="flex flex-col  bg-black items-center p-20 max-sm:content-start max-sm:px-2 max-sm:items-start">
      <div className="bg-gradient-to-br from-purple3 to-purple1 bg-clip-text pb-4 text-6xl font-bold text-transparent max-sm:text-3xl">
        About ME
      </div>
      <div className="text-xl text-white max-sm:text-base">
        Hello! My name is Ojasv and I enjoy creating things that live on the
        internet. My interest in web development started in 2020 when I decided
        to take part in the development field and seeing an attractive website
        made me more enthusiastic about web - development then I started
        learning a lot about HTML & CSS!
      </div>
      <div className="mt-10 text-center text-xl text-white max-sm:text-base">
        Here are a few technologies I’ve been working with recently
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
