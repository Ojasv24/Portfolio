import { TypeAnimation } from "react-type-animation";
import logo from "./assets/ORnew.png";
const MainPage = () => {
  return (
    <div className=" bg-Background ">
      <div className="flex justify-center p-20 max-lg:flex-col-reverse max-lg:p-10 max-sm:flex-col-reverse max-sm:p-2 ">
        <div className="flex flex-col items-start self-center ">
          <div className="text-xl text-white ">Hii, my name is</div>
          <div className=" bg-gradient-to-br from-purple1 to-purple2 bg-clip-text pb-4 text-8xl font-bold text-transparent max-sm:text-5xl">
            Ojasv Rathore
          </div>

          <div className="bg-gradient-to-br from-pink to-orange bg-clip-text p-10 pb-4 pl-10  text-4xl font-bold text-transparent max-sm:p-2 max-sm:text-xl">
            I make{" "}
            <TypeAnimation
              sequence={[
                "Flutter Apps",
                1000,
                "Degin for Apps",
                1000,
                "Python Scripts",
                1000,
                "Degin for web",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="mt-10 text-center text-xl text-white max-sm:text-start max-sm:text-sm">
            I’m a computer science and engineering student specializing in
            building (and occasionally designing) exceptional digital
            experiences. Currently, I’m focused on my B.E at BUIT Bhopal and
            looking for opportunities for an SDE role.
          </div>
        </div>
        {/* <div className="group relative flex-shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple1 from-50% to-purple2 bg-[size:_200%]   bg-[position:_-0%_-0%] blur-2xl transition-all duration-500 group-hover:to-90% group-hover:bg-[position:_100%_5000%] "></div>
          <div className=" relative flex-shrink-0 max-lg:self-center max-sm:self-center">
            <img
              className="w-128 max-sm:w-94 h-128 object-scale-down max-lg:h-80 max-lg:w-80 max-sm:h-80"
              src={logo}
              alt=""
            />
          </div>
        </div> */}
        <div className="group relative flex-shrink-0 self-center rounded-full bg-white ">
          <img
            className="max-sm:w-94 h-128 w-128 object-scale-down max-lg:h-80 max-lg:w-80 max-sm:h-80"
            style={{
              padding: "-32px",
            }}
            src={logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
