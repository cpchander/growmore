"use client";

import { useEffect, useRef, useState } from "react";

const MILESTONES_STATS = [
  { value: 2009, label: "Founded", prefix: "", suffix: "" },
  { value: 300, label: "Projects Completed", prefix: "", suffix: "+" },
  { value: 15, label: "Cities Across India", prefix: "", suffix: "+" },
  { value: 10, label: "Brand Partnerships", prefix: "", suffix: "+" },
];

function Counter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient-gold">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function MilestoneStats() {
  return (
    <section className="py-12 bg-navy-900/50 border-y border-navy-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {MILESTONES_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="mt-2 text-navy-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
