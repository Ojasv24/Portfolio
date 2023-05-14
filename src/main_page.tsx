import { TypeAnimation } from "react-type-animation";
import logo from "./assets/ORnew.png";
import logo2 from "./assets/ORnew copy.png";
import logo3 from "./assets/OR.png";
import useOnScreen from "./utils/useOnScreen";
import { useRef } from "react";
import bg_or from "./assets/background_or.svg";

const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, false);
  return (
    <div className=" w-full bg-Background">
      <div className="flex justify-center p-20 max-lg:flex-col-reverse max-lg:p-10 max-sm:flex-col-reverse max-sm:p-2 ">
        <div className="flex flex-col items-start self-center ">
          <div className="text-xl text-white ">Hii, my name is</div>
          <div className=" bg-gradient-to-br from-purple1 to-purple2 bg-clip-text pb-4 text-8xl font-bold text-transparent max-sm:text-5xl">
            Ojasv Rathore
          </div>

          <div
            ref={ref as any}
            className=" bg-gradient-to-br from-pink to-orange bg-clip-text p-10 pb-4 pl-10  text-4xl font-bold text-transparent max-sm:p-2 max-sm:text-xl"
          >
            I make{" "}
            {isVisible && (
              <TypeAnimation
                sequence={[
                  "Flutter Apps",
                  2000,
                  "Degin for Apps",
                  2000,
                  "Python Scripts",
                  2000,
                  "Degin for web",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            )}
          </div>

          <div className="mt-10 text-center text-xl text-white max-sm:text-start max-sm:text-sm">
            I’m a computer science and engineering student specializing in
            building (and occasionally designing) exceptional digital
            experiences. Currently, I’m focused on my B.E at BUIT Bhopal and
            looking for opportunities for an SDE role.
          </div>
        </div>

        <div className="relative flex-shrink-0 self-center rounded-full p-10 ">
          <img className="absolute h-110 max-lg:hidden" src={bg_or}></img>
          <img
            className="relative ml-4 mt-4 h-96 self-center object-scale-down max-lg:h-80 max-sm:max-h-52"
            src={logo3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
