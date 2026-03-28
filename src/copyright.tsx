const CopyRight = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple1/50 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-6">
          {/* Logo / Name */}
          <a
            href="#1"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl font-bold tracking-tight text-white">
              Ojasv
              <span className="bg-gradient-to-r from-purple3 via-purple1 to-purple4 bg-clip-text text-transparent">
                .
              </span>
            </span>
          </a>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            {[
              { label: "Home", href: "#1" },
              { label: "About", href: "#2" },
              { label: "Experience", href: "#3" },
              { label: "Projects", href: "#4" },
              { label: "Contact", href: "#5" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray transition-colors duration-200 hover:text-purple4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-purple1/20 to-transparent" />

          {/* Copyright text */}
          <p className="text-center text-xs tracking-wide text-gray/60">
            &copy; {year} Ojasv Rathore &mdash; Designed &amp; built with{" "}
            <span className="inline-block animate-pulse text-purple3">&hearts;</span>
          </p>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-purple3 via-purple1 to-purple4" />
    </footer>
  );
};

export default CopyRight;
