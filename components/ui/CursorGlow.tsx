"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (raf.current !== null) return;
      raf.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.setProperty("--x", `${pos.current.x}px`);
          ref.current.style.setProperty("--y", `${pos.current.y}px`);
        }
        raf.current = null;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none hidden md:block mix-blend-screen"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--color-cetl-gold) 10%, transparent), transparent 70%)",
      }}
    />
  );
}
