"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Icon from "@/components/Icon";
import ResLinkChip from "@/components/ResLinkChip";
import { guideSteps } from "@/resources";

// Tabbed walkthrough: step list on the left, one step's detail on the right.
export default function GuideStepper() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const panel = useRef<HTMLDivElement>(null);
  const total = guideSteps.length;
  const step = guideSteps[active];

  function go(i: number, focusTab = false) {
    const next = (i + total) % total;
    setActive(next);
    if (focusTab) tabs.current[next]?.focus();
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") go(active + 1, true);
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") go(active - 1, true);
    else if (e.key === "Home") go(0, true);
    else if (e.key === "End") go(total - 1, true);
    else return;
    e.preventDefault();
  }

  // Prev/next buttons: change step and bring the panel top back into view.
  function stepTo(i: number) {
    go(i);
    panel.current?.scrollIntoView({ block: "nearest" });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
      <div role="tablist" aria-label="Agent guide steps" aria-orientation="vertical" className="stepper-tabs" onKeyDown={onKey}>
        {guideSteps.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`guide-tab-${s.id}`}
            aria-selected={i === active}
            aria-controls={`guide-panel-${s.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => go(i)}
            className="stepper-tab"
          >
            <span className="stepper-num" aria-hidden="true">
              {i + 1}
            </span>
            <span className="stepper-label">
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">Step {i + 1}</span>
              <span className="block font-medium leading-snug">{s.title}</span>
            </span>
          </button>
        ))}
      </div>

      <div
        ref={panel}
        role="tabpanel"
        id={`guide-panel-${step.id}`}
        aria-labelledby={`guide-tab-${step.id}`}
        tabIndex={0}
        className="card card--still relative scroll-mt-24 overflow-hidden p-6 sm:p-8"
      >
        <span className="pointer-events-none absolute right-6 top-4 select-none text-5xl font-extrabold text-fg/[0.07]" aria-hidden="true">
          {String(active + 1).padStart(2, "0")}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Step {active + 1} of {total}
        </p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight">{step.title}</h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-fg/85">{step.body}</p>

        <ul className="mt-5 space-y-2.5">
          {step.checks.map((c) => (
            <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg viewBox="0 0 20 20" width="18" height="18" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                <path d="M5 10.5l3 3L15 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{c}</span>
            </li>
          ))}
        </ul>

        {step.fit && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface-2 p-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent" aria-hidden="true">✓</span>
                Agents do this well
              </h4>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                {step.fit.good.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-surface-2 p-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-red/15 text-red" aria-hidden="true">+</span>
                An agent cannot settle this
              </h4>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                {step.fit.other.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step.scale && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">How far can you lean on a claim?</h4>
            <ol className="rubric-scale mt-3">
              {step.scale.map((l) => (
                <li key={l.label}>
                  <span className="rubric-bar" aria-hidden="true" />
                  <span className="mt-2 block text-sm font-semibold">{l.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{l.note}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {step.snippet && (
          <figure className="mt-6">
            <figcaption className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{step.snippet.heading}</figcaption>
            <pre className="trace mt-3 overflow-x-auto whitespace-pre-wrap p-4" tabIndex={0}>
              <code>{step.snippet.code}</code>
            </pre>
            <p className="mt-2 text-xs text-muted">{step.snippet.caption}</p>
          </figure>
        )}

        {step.caution && (
          <p className="mt-6 flex gap-3 rounded-xl border border-red/30 bg-red/[0.07] p-4 text-sm leading-relaxed">
            <Icon name="info" className="mt-0.5 shrink-0 text-red" />
            <span>
              <strong>Watch out: </strong>
              {step.caution}
            </span>
          </p>
        )}

        <h4 className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Useful here</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {step.links.map((l) => (
            <li key={l.label}>
              <ResLinkChip link={l} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
          <button type="button" onClick={() => stepTo(active - 1)} disabled={active === 0} className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg disabled:cursor-not-allowed disabled:opacity-40">
            <Icon name="arrow" size={16} className="rotate-180" />
            Back
          </button>
          <button type="button" onClick={() => stepTo(active === total - 1 ? 0 : active + 1)} className="btn btn-primary btn-sm">
            {active === total - 1 ? "Back to step 1" : "Next"}
            <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
