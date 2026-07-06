"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      raf.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (ref.current) ref.current.style.width = `${pct}%`;
    };
    const onScroll = () => {
      if (raf.current !== null) return;
      raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div
        ref={ref}
        className="h-full bg-gradient-to-r from-cetl-gold via-cetl-gold-light to-cetl-violet shadow-[0_0_10px_rgba(212,175,90,0.6)] transition-[width] duration-75"
        style={{ width: "0%" }}
      />
    </div>
  );
}
