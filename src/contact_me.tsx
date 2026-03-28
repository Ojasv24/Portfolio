import gmail from "./assets//gmail_purple_svg.svg";
import linkdin from "./assets/linkdind_purple_svg.svg";
import github from "./assets/gitbhut_svg_purple.svg";
import xIcon from "./assets/x_purple_svg.svg";
import useIsVisible from "./utils/useFadeIn";
import AnimatedHeading from "./components/animated_heading";

const socials = [
  {
    icon: linkdin,
    link: "https://www.linkedin.com/in/ojasv-rathore-4486781b1/",
    label: "LinkedIn",
    color: "hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]",
  },
  {
    icon: github,
    link: "https://github.com/Ojasv24/",
    label: "GitHub",
    color: "hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  },
  {
    icon: xIcon,
    link: "https://x.com/home",
    label: "X",
    color: "hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  },
];

const ContactPage = () => {
  const { ref: sectionRef, isVisible } = useIsVisible<HTMLDivElement>(true);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-24 max-sm:px-4 max-sm:py-16">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-purple1/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Heading */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple4/70">
            Get in Touch
          </p>
          <AnimatedHeading title="Contact Me" invertColors />
        </div>

        {/* Email Card */}
        <div
          className={`mb-12 transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <a
            href="mailto:ojasv.rathore@gmail.com"
            className="group relative mx-auto block overflow-hidden rounded-2xl border border-purple1/10 bg-gray2/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-purple1/30 hover:bg-gray2/50 hover:shadow-[0_0_40px_rgba(156,18,220,0.1)]"
          >
            {/* Shimmer on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple1/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative flex items-center gap-5 max-sm:flex-col max-sm:text-center">
              {/* Icon container */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple1/20 to-purple2/20 transition-all duration-500 group-hover:from-purple1/30 group-hover:to-purple3/30 group-hover:shadow-[0_0_20px_rgba(156,18,220,0.2)]">
                <img className="h-7 w-7" src={gmail} alt="Email" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-white/40 transition-colors duration-300 group-hover:text-white/60">
                  Send me an email
                </p>
                <p className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple4 max-sm:text-lg">
                  ojasv.rathore@gmail.com
                </p>
              </div>
              {/* Arrow */}
              <div className="ml-auto text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple4 max-sm:hidden">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Divider with text */}
        <div
          className={`mb-10 flex items-center gap-4 transition-all delay-300 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple1/15" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            or find me on
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple1/15" />
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-5 transition-all delay-[400ms] duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-purple1/10 bg-gray2/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-gray2/50 max-sm:h-14 max-sm:w-14 ${social.color}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 max-sm:h-6 max-sm:w-6"
                src={social.icon}
                alt={social.label}
              />
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray2/60 px-2.5 py-1 text-xs font-medium text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 max-sm:hidden">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom message */}
        <p
          className={`mt-16 text-center text-sm text-white/25 transition-all delay-500 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
          Always open to interesting conversations and opportunities.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
