/* ── Inline SVG Icon Components ── */

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Types ── */

interface LinkInfo {
  type: "github" | "live";
  url: string;
}

interface Props {
  name: string;
  description: string;
  techStack: string[];
  links: LinkInfo[];
  index?: number;
  show?: boolean;
}

/* ── Card Component ── */

function ExtraProject({ name, description, techStack, links, index = 0, show = false }: Props) {
  const delay = index * 150;
  const liveLink = links.find((l) => l.type === "live");

  return (
    <div
      className="group relative transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: show ? 1 : 0,
        transform: show
          ? "translateY(0) scale(1)"
          : "translateY(32px) scale(0.95)",
      }}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111115] transition-all duration-500 hover:border-purple1/25 hover:shadow-[0_4px_40px_rgba(156,18,220,0.08)]">
        {/* ── Card Top: accent + number ── */}
        <div className="relative flex items-center gap-3 border-b border-white/[0.04] px-5 py-4">
          {/* Left accent line */}
          <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-gradient-to-b from-purple3 to-purple1" />

          {/* Number chip */}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple1/10 text-xs font-bold text-purple4">
            {index + 1}
          </span>

          {/* Project name */}
          <h3 className="flex-1 text-lg font-bold text-white max-sm:text-base">
            {name}
          </h3>
        </div>

        {/* ── Card Body ── */}
        <div className="flex flex-1 flex-col px-5 py-4">
          <p className="mb-5 flex-1 text-[13px] leading-[1.7] text-gray">
            {description}
          </p>

          {/* ── Footer: tech labels + demo button ── */}
          <div className="flex items-end justify-between gap-3">
            {/* Tech stack as text pills */}
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-purple1/15 bg-purple1/[0.07] px-2 py-0.5 text-[11px] font-medium tracking-wide text-purple4"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Demo button — only shown when a live link exists */}
            {liveLink && (
              <a
                href={liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/demo flex shrink-0 items-center gap-1.5 rounded-lg border border-purple1/30 bg-gradient-to-r from-purple1/10 to-purple3/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-purple4 transition-all duration-300 hover:border-purple1/60 hover:from-purple1/20 hover:to-purple3/20 hover:text-white hover:shadow-[0_0_16px_rgba(156,18,220,0.25)]"
              >
                Live Demo
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraProject;
