"use client";

import { useEffect, useRef } from "react";

type Milestone = {
  year: number;
  title: string;
  description: string;
  highlight: string;
};

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .timeline-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div ref={timelineRef} className="relative">
        {/* Center line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent" />

        <div className="space-y-12">
          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={milestone.year}
                className="timeline-item relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-navy-950 z-10 top-6" />

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="glass-card rounded-xl p-6 hover:border-gold-500/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-gradient-gold">
                        {milestone.year}
                      </span>
                      <div className="h-px flex-1 bg-navy-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed mb-3">
                      {milestone.description}
                    </p>
                    <span className="inline-block text-xs bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full font-medium">
                      {milestone.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
