import { useRef, useEffect, useState } from "react";
import AnimatedHeading from "./components/animated_heading";
import anime from "animejs";

const highlights = [
  { label: "Org-Level Awards", value: "2×" },
  { label: "Daily Orders Impacted", value: "10M+" },
  { label: "Microservices Built", value: "5+" },
];

const AboutME = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          animateIn();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const animateIn = () => {
    anime({
      targets: ".about-line",
      scaleX: [0, 1],
      easing: "easeInOutQuart",
      duration: 800,
      delay: 300,
    });

    anime({
      targets: ".about-text",
      opacity: [0, 1],
      translateY: [24, 0],
      easing: "easeOutCubic",
      duration: 900,
      delay: 500,
    });

    anime({
      targets: ".about-highlight",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutCubic",
      duration: 700,
      delay: anime.stagger(120, { start: 700 }),
    });

    anime({
      targets: ".about-tag",
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: "easeOutCubic",
      duration: 500,
      delay: anime.stagger(60, { start: 1100 }),
    });
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center bg-black px-6 pb-20 pt-20 sm:px-10 lg:px-20"
    >
      <AnimatedHeading title="About ME" />

      {/* gradient accent line */}
      <div
        className="about-line mx-auto mb-12 mt-2 h-[2px] w-32 origin-center rounded-full"
        style={{
          background: "linear-gradient(90deg, #B41992, #9C12DC, #DD94FF)",
          transform: "scaleX(0)",
        }}
      />

      {/* two-column layout */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:gap-16">
        {/* left — bio */}
        <div className="about-text flex-1 opacity-0">
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
            I'm{" "}
            <span className="bg-gradient-to-r from-purple3 via-purple1 to-purple4 bg-clip-text font-semibold text-transparent">
              Ojasv Rathore
            </span>
            , a Backend Engineer at{" "}
            <span className="font-semibold text-orange">Swiggy</span>, where I
            architect high-throughput delivery logistics, ETA prediction
            engines, and SLA compliance systems at scale.
          </p>

          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            From designing real-time Redis caching pipelines to building custom
            order transformers and microservice architectures, my work directly
            impacts millions of daily orders. Awarded twice at the org level, I
            thrive on solving complex distributed systems problems. Beyond
            backend, I enjoy building apps with Flutter, React, and Angular.
          </p>

          {/* tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Distributed Systems", "Microservices", "Redis", "Flutter", "React", "Go"].map(
              (t) => (
                <span
                  key={t}
                  className="about-tag rounded-full border border-purple1/15 bg-gray2/30 px-3 py-1 text-xs text-white/50 opacity-0"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* right — highlights */}
        <div className="flex shrink-0 flex-col gap-4 lg:w-52">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="about-highlight flex items-baseline justify-between border-b border-purple1/10 pb-3 opacity-0 lg:flex-col lg:items-start"
            >
              <span className="bg-gradient-to-r from-purple3 to-purple4 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {h.value}
              </span>
              <span className="text-sm text-white/50">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutME;
