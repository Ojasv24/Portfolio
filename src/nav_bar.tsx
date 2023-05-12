import logo from "./assets/ORnew.png";

const NavBar = () => {
  return (
    <div className="bg-black">
      {/* Nav Bar */}
      <div className="space-x-33 mx-20 flex h-20 justify-around max-sm:mx-0">
        <div className="flex flex-1">
          <img className="" src={logo} alt="" />
          <div className="self-center text-2xl font-bold text-white">
            Ojasv Rathore
          </div>
        </div>
        {/* Hamburger Menu */}
        <div className="self-center pr-8 text-white max-sm:pr-2 md:collapse ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {/* Nav Links */}
        <div className=" space-x-8 self-center pr-4 text-white max-md:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Project</span>
          <span>Contacts</span>
        </div>
        {/* Resume Button */}
        <button
          className="mr-2 flex h-10 justify-between self-center rounded-3xl bg-gradient-to-r 
                 from-purple1 via-purple2 to-purple2 bg-[size:_200%] bg-[position:_0%_0%] px-4 font-bold text-white transition-all duration-500 hover:bg-[position:_100%_100%] "
        >
          <div className="self-center pr-2 ">
            <svg
              width="24"
              height="34"
              viewBox="0 0 34 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.125 15.4H30.8125L19.125 3.3V15.4ZM4.25 0H21.25L34 13.2V39.6C34 40.767 33.5522 41.8861 32.7552 42.7113C31.9582 43.5364 30.8772 44 29.75 44H4.25C3.12283 44 2.04183 43.5364 1.2448 42.7113C0.447766 41.8861 0 40.767 0 39.6V4.4C0 1.958 1.89125 0 4.25 0ZM21.25 39.6V37.4C21.25 34.474 15.5763 33 12.75 33C9.92375 33 4.25 34.474 4.25 37.4V39.6H21.25ZM12.75 22C11.6228 22 10.5418 22.4636 9.7448 23.2887C8.94777 24.1139 8.5 25.233 8.5 26.4C8.5 27.567 8.94777 28.6861 9.7448 29.5113C10.5418 30.3364 11.6228 30.8 12.75 30.8C13.8772 30.8 14.9582 30.3364 15.7552 29.5113C16.5522 28.6861 17 27.567 17 26.4C17 25.233 16.5522 24.1139 15.7552 23.2887C14.9582 22.4636 13.8772 22 12.75 22Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="self-center p-0 max-sm:hidden max-sm:w-0 ">
            ResumeF
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
