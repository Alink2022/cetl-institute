import Image from "next/image";

const PLACEMENTS = [
  { top: "4%",   left: "3%",   size: 180, rotate: -15, opacity: 0.025 },
  { top: "14%",  right: "2%",  size: 140, rotate: 20,  opacity: 0.020 },
  { top: "27%",  left: "8%",   size: 200, rotate: -8,  opacity: 0.030 },
  { top: "41%",  right: "6%",  size: 160, rotate: 12,  opacity: 0.022 },
  { top: "55%",  left: "1%",   size: 220, rotate: -20, opacity: 0.018 },
  { top: "67%",  right: "3%",  size: 150, rotate: 6,   opacity: 0.028 },
  { top: "79%",  left: "10%",  size: 170, rotate: -10, opacity: 0.020 },
  { top: "90%",  right: "8%",  size: 190, rotate: 18,  opacity: 0.024 },
] as const;

export function LogoWatermark() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden>
      {PLACEMENTS.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
            filter: "grayscale(1)",
          }}
        >
          <Image
            src="/cetl-logo.webp"
            alt=""
            width={p.size}
            height={p.size}
            className="object-contain brightness-[3]"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
