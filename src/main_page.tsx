import { TypeAnimation } from "react-type-animation";
import logo3 from "./assets/OR.png";
import useOnScreen from "./utils/useOnScreen";
import { useRef, useEffect, useState, lazy, Suspense, Component, type ErrorInfo, type ReactNode } from "react";
import anime from "animejs";

const ParticleField = lazy(
  () => import("./components/ParticleField")
);

/* ── Error Boundary so 3D crash doesn't nuke the page ─────── */
class ThreeErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("Three.js background failed:", error, info);
  }
  render() {
    if (this.state.hasError) return null;   // silently hide
    return this.props.children;
  }
}

/* ── Scroll-down chevron ──────────────────────────────────────── */
const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-bounce max-sm:bottom-4">
    <span className="text-xs uppercase tracking-[0.25em] text-purple4">
      Scroll
    </span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-purple4"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
);

/* ── Status badge ─────────────────────────────────────────────── */
const StatusBadge = ({ visible }: { visible: boolean }) => (
  <div
    className={`
      inline-flex items-center gap-2 rounded-full
      border border-purple1/20 bg-purple1/5 px-4 py-1.5
      backdrop-blur-sm transition-all duration-700
      ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
    `}
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" style={{ backgroundColor: "#4ade80" }} />
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#4ade80" }} />
    </span>
    <span className="text-sm font-medium text-purple4">
      Available for opportunities
    </span>
  </div>
);

/* ── Main Page ────────────────────────────────────────────────── */
const MainPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, false);
  const [entered, setEntered] = useState(false);

  /* ── Anime.js staggered entrance ───────────────────────────── */
  useEffect(() => {
    if (!isVisible || entered) return;
    setEntered(true);

    const tl = anime.timeline({ easing: "easeOutExpo" });

    // Avatar / image entrance
    tl.add({
      targets: imgRef.current,
      scale: [0.7, 1],
      opacity: [0, 1],
      duration: 1000,
    });

    // Name heading — animate as a single block
    // (Cannot split into per-letter spans because bg-clip-text +
    //  text-transparent gradient breaks when rendered on child elements)
    tl.add(
      {
        targets: headingRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
      },
      "-=600"
    );

    // Subtitle
    tl.add(
      {
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      },
      "-=400"
    );

    // Typed area
    tl.add(
      {
        targets: typeRef.current,
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 800,
      },
      "-=500"
    );

    // Description paragraph
    tl.add(
      {
        targets: descRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      },
      "-=500"
    );
  }, [isVisible, entered]);

  /* ── Mouse parallax for image ──────────────────────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      imgRef.current.style.transform = `translate(${dx * 12}px, ${dy * 12}px)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-Background"
    >
      {/* ── Three.js Particle Canvas ─────────────────────────── */}
      <ThreeErrorBoundary>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </ThreeErrorBoundary>

      {/* ── Radial glows ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-purple1/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-pink/10 blur-[100px]" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-purple2/15 blur-[140px]" />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-12 px-6 py-24 max-lg:flex-col-reverse max-lg:justify-center max-lg:py-32 max-sm:gap-8 max-sm:px-4 max-sm:py-24">
        {/* LEFT — text block */}
        <div className="flex max-w-2xl flex-col items-start gap-5 max-lg:items-center max-lg:text-center">
          <StatusBadge visible={entered} />

          {/* Greeting */}
          <p className="text-lg font-light tracking-wide text-gray opacity-80 max-sm:text-base">
            Hey there, I'm
          </p>

          {/* Name */}
          <div
            ref={headingRef}
            className="hero-heading bg-gradient-to-r from-purple4 via-purple1 to-pink bg-clip-text text-7xl font-extrabold leading-tight text-transparent opacity-0 max-sm:text-4xl"
          >
            Ojasv Rathore
          </div>

          {/* Position */}
          <div
            ref={subtitleRef}
            className="flex items-center gap-3 opacity-0"
          >
            <span className="h-px w-8 bg-gradient-to-r from-purple1 to-transparent" />
            <span className="text-lg font-semibold tracking-wide text-purple4 max-sm:text-base">
              Backend Engineer <span className="text-orange">@ Swiggy</span>
            </span>
          </div>

          {/* Typed animation */}
          <div
            ref={typeRef}
            className="mt-2 flex items-baseline gap-2 rounded-xl border border-purple1/10 bg-purple1/5 px-5 py-3 backdrop-blur-md opacity-0 max-sm:px-3 max-sm:py-2"
          >
            <span className="text-lg font-medium text-white/70 max-sm:text-sm">
              I build
            </span>
            <span className="bg-gradient-to-r from-pink to-orange bg-clip-text text-2xl font-bold text-transparent max-sm:text-base">
              {isVisible && (
                <TypeAnimation
                  sequence={[
                    "High-Throughput Backend Systems",
                    1500,
                    "ETA & SLA Prediction Engines",
                    1500,
                    "Real-Time Caching Pipelines",
                    1500,
                    "Microservice Architectures",
                    1500,
                    "Flutter & React Apps",
                    1500,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  speed={45}
                />
              )}
            </span>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="mt-4 max-w-xl text-base leading-relaxed text-gray opacity-0 max-sm:text-sm"
          >
            Engineering high-throughput delivery logistics &amp; ETA prediction
            systems at <span className="font-semibold text-orange">Swiggy</span>,
            serving <span className="font-semibold text-purple4">millions of daily orders</span>.
            Passionate about scalable backends, real-time data pipelines, and
            crafting delightful user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4 max-sm:flex-col max-sm:gap-3">
            <a
              href="#5"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple1 to-pink px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple1/25 transition-all duration-300 hover:shadow-purple1/40 hover:scale-105 max-sm:justify-center"
            >
              <span className="relative z-10">Get in Touch</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* shimmer overlay */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#3"
              className="inline-flex items-center gap-2 rounded-full border border-purple1/30 bg-purple1/5 px-7 py-3 text-sm font-semibold text-purple4 backdrop-blur-sm transition-all duration-300 hover:border-purple1/60 hover:bg-purple1/10 hover:scale-105 max-sm:justify-center"
            >
              View Experience
            </a>
          </div>
        </div>

        {/* RIGHT — avatar */}
        <div
          ref={imgRef}
          className="relative flex-shrink-0 opacity-0 max-lg:mb-4"
        >
          {/* Rotating glow ring */}
          <div className="absolute -inset-4 z-0 animate-spin rounded-full [animation-duration:12s]">
            <div className="h-full w-full rounded-full bg-gradient-conic from-purple1 via-pink to-purple2 opacity-30 blur-xl" />
          </div>

          {/* Outer ring */}
          <div className="relative rounded-full bg-gradient-to-br from-purple1/40 via-pink/30 to-purple2/40 p-[3px]">
            <div className="rounded-full bg-Background p-2">
              <img
                className="relative z-10 h-80 w-80 rounded-full object-cover max-lg:h-64 max-lg:w-64 max-sm:h-48 max-sm:w-48"
                src={logo3}
                alt="Ojasv Rathore"
              />
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="absolute -right-3 top-8 animate-float rounded-lg border border-purple1/20 bg-Background/80 px-3 py-1.5 text-xs font-semibold text-purple4 shadow-lg backdrop-blur-sm max-sm:hidden">
            Go &middot; Java
          </div>
          <div className="absolute -left-4 bottom-12 animate-float rounded-lg border border-pink/20 bg-Background/80 px-3 py-1.5 text-xs font-semibold text-pink shadow-lg backdrop-blur-sm [animation-delay:1.5s] max-sm:hidden">
            System Design
          </div>
          <div className="absolute -bottom-2 right-8 animate-float rounded-lg border border-orange/20 bg-Background/80 px-3 py-1.5 text-xs font-semibold text-orange shadow-lg backdrop-blur-sm [animation-delay:0.8s] max-sm:hidden">
            10M+ req/day
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <ScrollIndicator />

      {/* ── Bottom fade ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-32 w-full bg-gradient-to-t from-Background to-transparent" />
    </div>
  );
};

export default MainPage;
