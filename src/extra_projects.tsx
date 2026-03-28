import { useState, useRef, useEffect } from "react";
import ExtraProject from "./components/extra_project_com";

const projects = [
  {
    name: "YouTube Video Downloader",
    description:
      "An app for downloading YouTube videos and converting them to mp3. Also supports Twitter, Facebook & Instagram video downloads.",
    techStack: ["Flutter", "Python"],
    links: [
      { type: "github" as const, url: "https://github.com/Ojasv24/youtube_downloader_app" },
    ],
  },
  {
    name: "O Lens",
    description:
      "A Windows app for reading text from images with an interactive UI. Also reads text directly from the clipboard.",
    techStack: ["Flutter", "Python"],
    links: [
      { type: "github" as const, url: "https://github.com/Ojasv24/olens" },
    ],
  },
  {
    name: "Sudoku Solver",
    description:
      "An interactive Sudoku solver that visually demonstrates the solving process step-by-step in real time.",
    techStack: ["Unity", "C#"],
    links: [
      { type: "github" as const, url: "https://github.com/Ojasv24/SudukoSolver" },
      { type: "live" as const, url: "https://sudoku-3925f.web.app/" },
    ],
  },
];

const ExtraProjectPage = () => {
  const [show, setShow] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [show]);

  return (
    <div className="flex flex-col items-center bg-Background px-20 pb-12 max-sm:px-4">
      {/* ── Section Header ── */}
      <div className="mb-8 flex flex-col items-center gap-5">
        {/* Decorative dots */}
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-purple3" />
          <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-purple3 to-purple1" />
          <span className="h-1.5 w-1.5 rounded-full bg-purple1" />
        </div>

        <h2 className="text-center text-4xl font-extrabold leading-tight text-white max-sm:text-2xl">
          More Things I've&nbsp;
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-purple3 via-purple1 to-purple4 bg-clip-text text-transparent">
              Created
            </span>
            <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-purple3 to-purple4 opacity-50" />
          </span>
        </h2>

        <p className="max-w-lg text-center text-sm leading-relaxed text-gray max-sm:text-xs">
          Side projects, experiments & weekend hacks that kept my curiosity alive.
        </p>
      </div>

      {/* ── Toggle Button ── */}
      <button
        onClick={() => setShow(!show)}
        className="group relative mb-8 flex items-center gap-3 rounded-2xl border border-purple1/10 bg-gray2/60 px-6 py-3 transition-all duration-500 hover:border-purple1/30 hover:bg-gray2/80 hover:shadow-[0_0_24px_rgba(156,18,220,0.12)] max-sm:px-4 max-sm:py-2.5"
      >
        {/* Animated icon */}
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple3/20 to-purple1/20 text-purple4 transition-all duration-500 ${show ? "rotate-180" : "rotate-0"
            }`}
        >
          {show ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="8" x2="13" y2="8" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="5" height="5" rx="1" />
              <rect x="9" y="2" width="5" height="5" rx="1" />
              <rect x="2" y="9" width="5" height="5" rx="1" />
              <rect x="9" y="9" width="5" height="5" rx="1" />
            </svg>
          )}
        </span>

        <span className="text-sm font-semibold tracking-wide text-white2 transition-colors duration-300 group-hover:text-white max-sm:text-xs">
          {show ? "Collapse Projects" : "Explore Side Projects"}
        </span>

        {/* Chevron */}
        <svg
          className={`h-4 w-4 text-gray transition-all duration-500 group-hover:text-purple4 ${show ? "rotate-180" : "rotate-0"
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ── Expandable Content ── */}
      <div
        className="w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: show ? `${contentHeight + 100}px` : "0px",
          opacity: show ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="mx-auto max-w-5xl pb-10 pt-2">
          {/* Responsive masonry-like grid */}
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
            {projects.map((proj, i) => (
              <ExtraProject
                key={i}
                index={i}
                show={show}
                name={proj.name}
                description={proj.description}
                techStack={proj.techStack}
                links={proj.links}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default ExtraProjectPage;
