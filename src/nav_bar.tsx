import { useState, useEffect, useCallback } from "react";
import logo from "./assets/ORnew.png";
import NavBarButton from "./components/nav_bar_button_com";
import ThemeToggle from "./components/ThemeToggle";

const navLinks = [
  { id: "1", name: "Home" },
  { id: "2", name: "About" },
  { id: "3", name: "Experience" },
  { id: "4", name: "Projects" },
  { id: "5", name: "Contacts" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("1");
  const [mounted, setMounted] = useState(false);

  // Entrance animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Scroll-aware glass background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on link click
  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div className={`sticky top-0 z-50 w-full will-change-transform ${mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${scrolled ? "px-4 pt-2 max-sm:px-2" : "bg-black max-md:bg-black"
      }`}
      style={{ transition: 'background-color 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease-out, transform 0.6s ease-out' }}
    >
      <nav
        className={`mx-auto ${scrolled
          ? "max-w-4xl rounded-full border border-purple1/20 bg-black/70 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_8px_40px_rgba(156,18,220,0.18),0_0_80px_rgba(156,18,220,0.06)] backdrop-blur-xl max-md:rounded-2xl max-md:bg-black/95"
          : "max-w-full rounded-none border border-transparent bg-black shadow-none"
          }`}
        style={{ transition: 'border-radius 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.5s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <div className={`mx-auto flex items-center justify-between ${scrolled ? "h-12 px-5 max-sm:px-3" : "h-18 max-w-7xl px-6 max-sm:px-3"
          }`}
          style={{ transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1), padding 0.6s cubic-bezier(0.4,0,0.2,1)' }}>
          {/* Logo + Name */}
          <a
            href="#1"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                className={`w-auto transition-all duration-500 group-hover:brightness-125 ${scrolled ? "h-8" : "h-12"
                  }`}
                src={logo}
                alt="Logo"
              />
              {/* Glow behind logo on hover */}
              <div className="absolute inset-0 -z-10 rounded-full bg-purple1/0 blur-xl transition-all duration-500 group-hover:bg-purple1/20" />
            </div>
            <span className={`bg-gradient-to-r from-white via-white to-purple4 bg-clip-text font-bold text-transparent transition-all duration-500 group-hover:from-purple4 group-hover:to-white ${scrolled ? "text-base max-sm:text-sm" : "text-xl max-sm:text-lg"
              }`}>
              Ojasv Rathore
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <div
                key={link.id}
                className="animate-navFadeIn"
                style={{ animationDelay: `${i * 100 + 200}ms`, animationFillMode: "both" }}
              >
                <NavBarButton
                  id={link.id}
                  name={link.name}
                  isActive={activeSection === link.id}
                  onClick={handleNavClick}
                />
              </div>
            ))}
          </div>

          {/* Right side: Theme Toggle + Resume + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1hPxTgx7OJzkKe8BCOe8xkIR_rK2BqpYO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={`resume-btn group relative flex items-center gap-2 overflow-hidden rounded-full font-semibold text-pureWhite transition-all duration-500 animate-navFadeIn ${scrolled ? "px-4 py-1.5 text-sm" : "px-5 py-2.5"
                }`}
              style={{ animationDelay: "700ms", animationFillMode: "both" }}
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple1 via-purple3 to-purple1 bg-[length:200%_100%] p-[1.5px] transition-all duration-500 group-hover:bg-[length:100%_100%] group-hover:shadow-[0_0_24px_rgba(156,18,220,0.45)]" style={{ animation: 'borderShimmer 3s linear infinite' }}>
                <span className="resume-btn-inner block h-full w-full rounded-full bg-pureBlack/90 backdrop-blur-xl transition-all duration-500 group-hover:bg-pureBlack/70" />
              </span>
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-pureWhite/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <svg
                className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span className="relative z-10 tracking-wide max-sm:hidden">Resume</span>
              <svg
                className="relative z-10 h-3 w-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-1px] max-sm:hidden"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Hamburger / X button (mobile) */}
            <button
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${menuOpen ? "translate-y-[7px] rotate-45 bg-purple1" : ""
                  }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${menuOpen ? "-translate-y-[7px] -rotate-45 bg-purple1" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className={`border-t border-purple1/10 bg-black px-6 pb-6 pt-4 ${scrolled ? "rounded-b-2xl" : ""
            }`}>
            {navLinks.map((link, i) => (
              <div
                key={link.id}
                className={`transition-all duration-500 ${menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
                  }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                }}
              >
                <NavBarButton
                  id={link.id}
                  name={link.name}
                  isActive={activeSection === link.id}
                  onClick={handleNavClick}
                  mobile
                />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
