"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { agent, asset, orbit, skillsPlugin } from "@/content";

type Item = { id: string; name: string; ext: string };

function Ring({ items, rad, size, dur, reverse }: { items: Item[]; rad: string; size: string; dur: string; reverse?: boolean }) {
  return (
    <div className={`orbit__ring ${reverse ? "orbit__ring--reverse" : ""}`} style={{ "--rad": rad, "--dur": dur } as CSSProperties}>
      <span className="orbit__track" />
      {items.map((it, i) => (
        <span key={it.id} className="orbit__item" style={{ "--a": `${(360 / items.length) * i}deg`, "--size": size } as CSSProperties}>
          <span className="orbit__tile" title={it.name}>
            <Image src={asset(`/tools/${it.id}.${it.ext}`)} alt="" width={64} height={64} className="h-full w-full object-contain" />
          </span>
        </span>
      ))}
    </div>
  );
}

// Hero visual: the agent at the centre, the sources its skills reach in orbit around it.
export default function Orbit() {
  const [paused, setPaused] = useState(false);
  const names = [...orbit.inner, ...orbit.outer].map((i) => i.name).join(", ");
  return (
    <figure>
      <div className="orbit" data-paused={paused} role="img" aria-label={`${agent.name} at the centre, surrounded by sources its ${skillsPlugin.name} can reach: ${names}.`}>
        <Ring items={orbit.outer} rad="44cqi" size="11cqi" dur="120s" />
        <Ring items={orbit.inner} rad="28cqi" size="12.5cqi" dur="80s" reverse />
        <div className="orbit__core">
          <span className="grid h-full w-full place-items-center rounded-full bg-white shadow-[0_0_0_10px_color-mix(in_srgb,var(--primary)_22%,transparent),0_0_80px_color-mix(in_srgb,var(--primary)_45%,transparent)]">
            <Image src={asset(agent.logo)} alt="" width={160} height={160} className="h-[86%] w-[86%]" priority />
          </span>
        </div>
      </div>
      <figcaption className="mt-5 flex items-center justify-center gap-3 text-sm text-muted">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play animation" : "Pause animation"}
          className="icon-btn !h-8 !w-8 border border-line-strong"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            {paused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />}
          </svg>
        </button>
        <span>
          {agent.name} and the sources its {skillsPlugin.name} reach
        </span>
      </figcaption>
    </figure>
  );
}
