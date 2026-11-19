import type { CSSProperties, ReactNode } from "react";

// Scalloped badge, drawn as one closed curve: radius swells and dips `lobes` times.
function scallop(lobes: number, depth: number) {
  const steps = 180;
  const points: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = 46 * (1 + depth * Math.cos(lobes * t));
    points.push(`${(50 + r * Math.sin(t)).toFixed(2)} ${(50 - r * Math.cos(t)).toFixed(2)}`);
  }
  return `M${points.join("L")}Z`;
}

const presets = {
  cookie: scallop(9, 0.06),
  flower: scallop(8, 0.1),
  clover: scallop(4, 0.12),
  burst: scallop(12, 0.05),
  round: scallop(1, 0),
};

export default function Shape({
  kind = "cookie",
  solid = false,
  hue,
  size,
  className = "",
  children,
}: {
  kind?: keyof typeof presets;
  solid?: boolean;
  hue?: string;
  size?: number;
  className?: string;
  children?: ReactNode;
}) {
  const style = { ...(hue ? { "--tc": hue } : {}), ...(size ? { "--shape-size": `${size}px` } : {}) } as CSSProperties;
  return (
    <span className={`shape ${solid ? "shape--solid" : ""} ${className}`} style={style} aria-hidden="true">
      <svg className="shape__bg" viewBox="0 0 100 100">
        <path d={presets[kind]} />
      </svg>
      {children}
    </span>
  );
}
