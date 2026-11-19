"use client";

import { useState, type CSSProperties } from "react";
import Icon from "@/components/Icon";
import ToolLogo from "@/components/ToolLogo";
import { toolHost, toolStages, tools, type Tool } from "@/resources";

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="card card--sm card-hover group flex h-full flex-col p-5">
      <div className="flex items-start gap-3">
        <ToolLogo logo={tool.logo} name={tool.name} />
        <div className="min-w-0 flex-1">
          <h4 className="font-sans font-semibold leading-snug">{tool.name}</h4>
          <p className="truncate text-xs text-muted">{toolHost(tool.url)}</p>
        </div>
        <Icon name="external" size={16} className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{tool.body}</p>
      <p className="mt-auto flex flex-wrap items-center gap-1.5 pt-4 text-xs">
        <span className="rounded-md bg-surface-2 px-2 py-0.5 font-medium">{tool.kind}</span>
        {tool.amr && <span className="rounded-md bg-sc px-2 py-0.5 font-medium text-on-sc">Useful for resistance</span>}
      </p>
      {tool.skill && <p className="mt-2 truncate font-mono text-[0.7rem] text-muted">skill: {tool.skill}</p>}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function Toolbox() {
  const [stage, setStage] = useState(0); // 0 = all
  const essential = tools.filter((t) => t.essential);
  const shown = toolStages.filter((s) => stage === 0 || s.n === stage);
  const count = (n: number) => tools.filter((t) => t.stage === n).length;
  const plural = (n: number) => `${n} ${n === 1 ? "entry" : "entries"}`;

  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">Start with these</h3>
      <p className="mt-1 text-muted">The agent, its skills, and the three sources most resistance projects will lean on.</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {essential.map((t, i) => (
          <li key={t.name} className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-hover group flex h-full flex-col p-6 ${i === 0 ? "justify-end bg-[radial-gradient(28rem_18rem_at_30%_0%,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_70%),var(--s-container)] sm:p-8" : ""}`}
            >
              <div className={`flex items-center justify-between gap-3 ${i === 0 ? "mb-auto" : ""}`}>
                <ToolLogo logo={t.logo} name={t.name} large />
                <span className="text-xs text-muted">
                  {t.stage} · {toolStages[t.stage - 1].title}
                </span>
              </div>
              <h4 className={`mt-5 font-semibold tracking-tight ${i === 0 ? "text-3xl" : "text-xl"}`}>{t.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              <p className="mt-3 font-mono text-xs text-muted">{toolHost(t.url)}</p>
              <p className="mt-5 flex items-center justify-between gap-3">
                <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium">{t.kind}</span>
                <span className="btn btn-tonal btn-sm">
                  Open
                  <Icon name="external" size={16} />
                </span>
              </p>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 text-2xl font-semibold tracking-tight">The full list</h3>
      <div role="group" aria-label="Filter by stage" className="stage-filter mt-6" style={{ "--stage-cols": 5 } as CSSProperties}>
        <button type="button" aria-pressed={stage === 0} onClick={() => setStage(0)} className="stage-btn">
          <span className="stage-num" aria-hidden="true">
            <Icon name="tracks" size={16} />
          </span>
          <span className="block text-sm font-semibold">All</span>
          <span className="block text-xs opacity-75">{plural(tools.length)}</span>
        </button>
        {toolStages.map((s) => (
          <button key={s.n} type="button" aria-pressed={stage === s.n} onClick={() => setStage(s.n)} className="stage-btn">
            <span className="stage-num" aria-hidden="true">
              {s.n}
            </span>
            <span className="block text-sm font-semibold">{s.title}</span>
            <span className="block text-xs opacity-75">{plural(count(s.n))}</span>
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted" aria-live="polite">
        {stage === 0 ? `All ${tools.length} entries. Pick a stage to narrow it down.` : `Showing stage ${stage}: ${toolStages[stage - 1].title}.`}
      </p>

      <div className="mt-10 space-y-12">
        {shown.map((s) => (
          <section key={s.n} aria-labelledby={`stage-${s.n}`}>
            <div className="flex items-center gap-4">
              <span className="stage-num !mb-0 !h-10 !w-10 !bg-pc !text-on-pc" aria-hidden="true">
                {s.n}
              </span>
              <div>
                <h4 id={`stage-${s.n}`} className="text-xl font-semibold tracking-tight">
                  {s.title}
                </h4>
                <p className="text-sm text-muted">{s.body}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {tools
                .filter((t) => t.stage === s.n)
                .map((t) => (
                  <li key={t.name}>
                    <ToolCard tool={t} />
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
