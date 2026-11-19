"use client";

import { useState } from "react";
import Icon, { symbols } from "@/components/Icon";
import { areas, challenge, connections } from "@/content";

// Positions of the four area nodes around the central hub (viewBox 360 x 360).
const pos: Record<string, { x: number; y: number; labelDy: number }> = {
  A: { x: 78, y: 82, labelDy: -44 },
  B: { x: 282, y: 82, labelDy: -44 },
  C: { x: 78, y: 278, labelDy: 56 },
  D: { x: 282, y: 278, labelDy: 56 },
};
// Curves for the links that join two areas.
const curves: Record<string, string> = {
  "livestock-food": "M282 278 Q340 180 282 82",
  "food-health": "M282 82 Q180 26 78 82",
  "agriculture-health": "M78 278 Q20 180 78 82",
};
const WATER = "#22b8cf";

// A Material Symbol placed inside the diagram, centred on (cx, cy).
function Glyph({ name, cx, cy, size, fill }: { name: string; cx: number; cy: number; size: number; fill: string }) {
  return (
    <svg x={cx - size / 2} y={cy - size / 2} width={size} height={size} viewBox="0 -960 960 960" fill={fill}>
      <path d={symbols[name]} />
    </svg>
  );
}

// Interactive diagram: choose a route to see how resistance moves between areas.
export default function OneHealth() {
  const [selected, setSelected] = useState(connections[0].id);
  const active = connections.find((c) => c.id === selected) ?? connections[0];
  const isWater = !(active.id in curves);
  const area = (code: string) => areas.find((a) => a.code === code)!;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14">
      <svg
        viewBox="0 0 360 360"
        role="img"
        aria-label={`Diagram: ${challenge.name} at the centre, surrounded by ${areas.map((a) => a.short).join(", ")}, all joined by water. Highlighted route: ${active.label}.`}
        className="mx-auto w-full max-w-md text-fg"
      >
        {/* Water: the ring that passes through all four areas */}
        <circle
          cx="180"
          cy="180"
          r="141"
          fill="none"
          stroke={isWater ? WATER : "currentColor"}
          strokeOpacity={isWater ? 1 : 0.16}
          strokeWidth={isWater ? 3.5 : 1.5}
          strokeDasharray={isWater ? undefined : "3 6"}
        />
        {[
          [180, 39],
          [180, 321],
        ].map(([x, y]) => (
          <g key={y} opacity={isWater ? 1 : 0.5}>
            <circle cx={x} cy={y} r="13" fill="var(--s-container)" stroke={isWater ? WATER : "var(--outline-variant)"} strokeWidth="1.5" />
            <Glyph name="water" cx={x} cy={y} size={16} fill={WATER} />
          </g>
        ))}

        {/* Spokes from each area to the hub */}
        {areas.map((a) => (
          <line key={a.code} x1={pos[a.code].x} y1={pos[a.code].y} x2="180" y2="180" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.5" />
        ))}

        {/* Routes between areas */}
        {connections
          .filter((c) => c.id in curves)
          .map((c) => {
            const on = c.id === active.id;
            return (
              <path
                key={c.id}
                d={curves[c.id]}
                fill="none"
                stroke={on ? area(c.between[0]).hue : "currentColor"}
                strokeOpacity={on ? 1 : 0.16}
                strokeWidth={on ? 3.5 : 1.5}
                strokeLinecap="round"
              />
            );
          })}

        {/* Hub */}
        <circle cx="180" cy="180" r="54" fill="var(--primary)" />
        <circle cx="180" cy="180" r="62" fill="none" stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="6" />
        <Glyph name="microbe" cx={180} cy={166} size={34} fill="var(--on-primary)" />
        <text x="180" y="202" textAnchor="middle" fontSize="17" fontWeight="800" fill="var(--on-primary)">
          {challenge.short}
        </text>

        {/* Area nodes, each with its own icon */}
        {areas.map((a) => {
          const p = pos[a.code];
          const on = active.between.includes(a.code);
          return (
            <g key={a.code} opacity={on ? 1 : 0.5}>
              <circle cx={p.x} cy={p.y} r="31" fill="var(--s-container)" />
              <circle cx={p.x} cy={p.y} r="31" fill={a.hue} fillOpacity={on ? 0.24 : 0.14} stroke={a.hue} strokeWidth={on ? 3 : 1.5} />
              <Glyph name={a.icon} cx={p.x} cy={p.y} size={32} fill={`color-mix(in srgb, ${a.hue} 62%, var(--on-s))`} />
              <text x={p.x} y={p.y + p.labelDy} textAnchor="middle" fontSize="13.5" fontWeight="700" fill="currentColor">
                {a.short}
              </text>
            </g>
          );
        })}
      </svg>

      <div role="group" aria-label="Routes between the areas" className="grid gap-2">
        {connections.map((c) => {
          const on = c.id === active.id;
          const water = !(c.id in curves);
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => setSelected(c.id)}
              className="flex items-start gap-4 rounded-2xl border border-transparent px-4 py-3.5 text-left transition-colors hover:bg-surface-2 aria-pressed:border-line-strong aria-pressed:bg-surface-2"
            >
              <span className="mt-0.5 flex shrink-0 items-center gap-1" aria-hidden="true">
                {water ? (
                  <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: `color-mix(in srgb, ${WATER} 20%, transparent)`, color: WATER }}>
                    <Icon name="water" size={20} />
                  </span>
                ) : (
                  c.between.map((code, i) => (
                    <span key={code} className="flex items-center gap-1">
                      {i > 0 && <Icon name="arrow" size={14} className="text-muted" />}
                      <span
                        className="grid h-9 w-9 place-items-center rounded-full"
                        style={{ background: `color-mix(in srgb, ${area(code).hue} 20%, transparent)`, color: `color-mix(in srgb, ${area(code).hue} 62%, var(--on-s))` }}
                      >
                        <Icon name={area(code).icon} size={20} />
                      </span>
                    </span>
                  ))
                )}
              </span>
              <span>
                <span className="block font-semibold">{c.label}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-muted">{c.body}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
