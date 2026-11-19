"use client";

import { useState } from "react";
import Image from "next/image";
import { asset, mentors, type Mentor } from "@/content";

const filters = [
  { id: "all", label: "All" },
  { id: "scientific", label: "Science" },
  { id: "agent", label: "Agent" },
  { id: "both", label: "Both" },
] as const;
type FilterId = (typeof filters)[number]["id"];

const badge: Record<Mentor["category"], string> = {
  scientific: "Science mentor",
  agent: "Agent mentor",
  both: "Science and agent",
};

// Mentors with dual expertise appear under both single categories too.
const inFilter = (m: Mentor, f: FilterId) => f === "all" || m.category === f || (m.category === "both" && f !== "both");

function initials(name: string) {
  const w = name.trim().split(/\s+/);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
}

export default function MentorList() {
  const [filter, setFilter] = useState<FilterId>("all");
  const shown = mentors.filter((m) => inFilter(m, filter));

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {mentors.length === 0 ? "No mentors listed yet." : `${shown.length} of ${mentors.length} mentors shown.`}
        </p>
        <div role="group" aria-label="Filter mentors" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-surface-2 aria-pressed:border-transparent aria-pressed:bg-accent aria-pressed:text-accent-ink"
            >
              {f.label}
              <span className="ml-2 opacity-70">{mentors.filter((m) => inFilter(m, f.id)).length}</span>
            </button>
          ))}
        </div>
      </div>

      {mentors.length === 0 ? (
        <div className="card mt-6 p-8 text-center">
          <h3 className="text-lg font-semibold">The directory fills up as mentors confirm</h3>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Each entry will give the mentor&rsquo;s field, which of the four areas they can help with, and when they are free online.
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((m) => (
            <li key={m.name} className="card flex flex-col p-6">
              <div className="flex items-center gap-4">
                {m.photo ? (
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface-2">
                    <Image src={asset(m.photo)} alt="" fill sizes="3.5rem" className="object-cover" />
                  </span>
                ) : (
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-surface-2 font-semibold" aria-hidden="true">
                    {initials(m.name)}
                  </span>
                )}
                <div>
                  <p className="text-xs font-semibold text-accent">{badge[m.category]}</p>
                  <h3 className="text-lg font-semibold leading-snug">{m.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium">{m.title}</p>
              <p className="text-sm text-muted">{m.affiliation}</p>
              {m.areas && (
                <p className="mt-3 flex flex-wrap gap-1.5">
                  {m.areas.map((t) => (
                    <span key={t} className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {t}
                    </span>
                  ))}
                </p>
              )}
              <p className="mt-3 border-l-2 border-line-strong pl-3 text-sm leading-relaxed text-muted">{m.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {m.keywords.map((k) => (
                  <li key={k} className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">
                    {k}
                  </li>
                ))}
              </ul>
              {m.availability && <p className="mt-auto border-t border-line pt-4 text-sm text-muted">Online · {m.availability}</p>}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
