import { useState } from "react";
import logo from "./assets/ORnew.png";
import hamberger from "./assets/hamberbur.svg";
import resume from "./assets/resume.svg";
import NavBarButton from "./components/nav_bar_button_com";

const NavBar = () => {
  const [show, showMenu] = useState(false);
  return (
    <div className="sticky top-0 z-10 bg-black">
      {/* Nav Bar */}
      <div className="space-x-33 mx-20 flex h-20 justify-around max-sm:mx-0">
        <div className="flex flex-1">
          <img className="" src={logo} alt="" />
          <div className="self-center text-2xl font-bold text-white">
            Ojasv Rathore
          </div>
        </div>
        {/* Hamburger Menu */}
        <button
          className="self-center pr-8  max-sm:pr-2 md:collapse"
          onClick={() => {
            showMenu(!show);
          }}
        >
          <img className="h-8 w-6" src={hamberger} alt="" />
        </button>
        {/* Nav Links */}
        <div className="flex space-x-8 self-center pr-4 text-white max-lg:ml-20 max-md:hidden">
          <NavBarButton id="1" name="Home" size="" />
          <NavBarButton id="2" name="About" size="" />
          <NavBarButton id="3" name="Project" size="" />
          <NavBarButton id="4" name="Contacts" size="" />
        </div>
        {/* Resume Button */}
        <button
          className="mr-2 flex h-10 justify-between self-center rounded-3xl bg-gradient-to-r 
                 from-purple1 via-purple2 to-purple2 bg-[size:_200%] bg-[position:_0%_0%] px-4 font-bold text-white transition-all duration-500 hover:bg-[position:_100%_100%] "
        >
          <a
            href="https://drive.google.com/file/d/1DDJyx1e4hZTfJOsL5EJsQhXjRpm2fEvI/view?usp=sharing"
            className="self-center pr-2 "
          >
            <img src={resume} alt="" />
          </a>
          <span className="self-center p-0 max-sm:hidden max-sm:w-0 ">
            Resume
          </span>
        </button>
      </div>
      {show && (
        <div className=" flex flex-col items-start pl-4 text-white ">
          <NavBarButton id="1" name="Home" size="" />
          <NavBarButton id="2" name="About" size="" />
          <NavBarButton id="3" name="Project" size="" />
          <NavBarButton id="4" name="Contacts" size="" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
