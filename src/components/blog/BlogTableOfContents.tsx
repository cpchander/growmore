"use client";

import { useState, useEffect, useCallback } from "react";
import { List } from "lucide-react";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export default function BlogTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    // Find the first heading that is intersecting
    const visible = entries.filter((e) => e.isIntersecting);
    if (visible.length > 0) {
      setActiveId(visible[0].target.id);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-80px 0px -70% 0px",
      threshold: 0,
    });

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items, handleObserver]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="space-y-1">
      <div className="flex items-center gap-2 text-xs font-semibold text-navy-400 uppercase tracking-wider mb-3 px-2">
        <List className="w-3.5 h-3.5" />
        Contents
      </div>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`block w-full text-left text-xs leading-snug px-2 py-1.5 rounded transition-colors ${
            item.level === 3 ? "pl-5" : ""
          } ${
            activeId === item.id
              ? "text-gold-500 bg-gold-500/5 font-medium"
              : "text-navy-400 hover:text-navy-200"
          }`}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
}
