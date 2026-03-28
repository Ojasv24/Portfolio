interface Props {
  name: string;
  id: string;
  isActive?: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

const NavBarButton = ({ name, id, isActive, onClick, mobile }: Props) => {
  if (mobile) {
    return (
      <a
        href={"#" + id}
        onClick={onClick}
        className="group flex items-center gap-3 py-3"
      >
        {/* Active dot indicator */}
        <span
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${isActive
            ? "scale-100 bg-purple1 shadow-[0_0_8px_rgba(156,18,220,0.6)]"
            : "scale-0 bg-white"
            }`}
        />
        <span
          className={`text-lg font-semibold transition-all duration-300 ${isActive
            ? "translate-x-1 text-purple4"
            : "text-white2 group-hover:translate-x-1 group-hover:text-white"
            }`}
        >
          {name}
        </span>
      </a>
    );
  }

  return (
    <a
      href={"#" + id}
      onClick={onClick}
      className="group relative px-4 py-2"
    >
      {/* Background highlight on hover */}
      <span className="absolute inset-0 rounded-lg bg-purple1/0 transition-all duration-300 group-hover:bg-purple1/10" />

      {/* Text */}
      <span
        className={`relative z-10 text-[15px] font-semibold tracking-wide transition-all duration-300 ${isActive
          ? "text-white"
          : "text-white2 group-hover:text-white"
          }`}
      >
        {name}
      </span>

      {/* Animated underline */}
      <span
        className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple1 to-purple3 transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${isActive
          ? "w-3/5 opacity-100 shadow-[0_0_8px_rgba(156,18,220,0.5)]"
          : "w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-100"
          }`}
      />

      {/* Active glow dot */}
      {isActive && (
        <span className="absolute -top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 animate-glowPulse rounded-full bg-purple1" />
      )}
    </a>
  );
};

export default NavBarButton;
