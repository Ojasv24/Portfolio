import { TypeAnimation } from "react-type-animation";
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
          <div className="text-lg text-purple4 font-medium">
            Backend Engineer @ Swiggy
          </div>

          <div
            ref={ref as any}
            className=" bg-gradient-to-br from-pink to-orange bg-clip-text p-10 pb-4 pl-10  text-4xl font-bold text-transparent max-sm:p-2 max-sm:text-xl"
          >
            I make{" "}
            {isVisible && (
              <TypeAnimation
                sequence={[
                  "High-Throughput Backend Systems",
                  1000,
                  "ETA & SLA Prediction Engines",
                  1000,
                  "Real-Time Caching Pipelines",
                  1000,
                  "Microservice Architectures",
                  1000,
                  "Flutter & React Apps",
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            )}
          </div>

          <div className="mt-10 text-center text-xl text-white max-sm:text-start max-sm:text-base">
            Building high-throughput delivery logistics and ETA prediction
            systems at Swiggy, serving millions of daily orders. Passionate
            about scalable backend systems, real-time data pipelines, and
            crafting great user experiences.
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
