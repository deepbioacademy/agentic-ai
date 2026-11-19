"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/Icon";
import ResLinkChip from "@/components/ResLinkChip";
import { faqAll, faqCategories, faqSuggestions, type FaqItem } from "@/resources";

const PREVIEW = 8; // questions shown per category before "Show more"

function matches(f: FaqItem, q: string) {
  const text = [f.q, f.a, ...(f.points ?? [])].join(" ").toLowerCase();
  return q.split(/\s+/).every((w) => text.includes(w));
}

export default function FaqBrowser() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"all" | FaqItem["category"]>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const q = query.trim().toLowerCase();
  const results = useMemo(
    () => faqAll.filter((f) => (cat === "all" || f.category === cat) && (q === "" || matches(f, q))),
    [q, cat],
  );

  const filters = [{ id: "all", title: "All" }, ...faqCategories.map((c) => ({ id: c.id, title: c.title.split(" ")[0] }))] as const;

  return (
    <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <label htmlFor="faq-search" className="sr-only">
          Search the questions
        </label>
        <div className="relative">
          <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a word, e.g. mentor"
            className="h-12 w-full rounded-xl border border-line-strong bg-surface pl-11 pr-4 text-[0.95rem] placeholder:text-muted focus:border-accent"
          />
        </div>

        <div role="group" aria-label="Filter by category" className="mt-4 grid grid-cols-3 overflow-hidden rounded-full border border-line-strong text-sm">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={cat === f.id}
              onClick={() => setCat(f.id)}
              className="px-3 py-2 font-medium transition-colors hover:bg-surface-2 aria-pressed:bg-accent aria-pressed:text-accent-ink"
            >
              {f.title}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? "question" : "questions"}
        </p>

        <p className="mt-5 border-t border-line pt-4 text-xs text-muted">Try</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {faqSuggestions.map((s) => (
            <li key={s}>
              <button type="button" onClick={() => setQuery(s)} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm transition-colors hover:border-accent hover:text-accent">
                {s}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-12">
        {faqCategories.map((c) => {
          const list = results.filter((f) => f.category === c.id);
          if (list.length === 0) return null;
          const open = q !== "" || expanded[c.id] || list.length <= PREVIEW;
          const visible = open ? list : list.slice(0, PREVIEW);
          return (
            <section key={c.id} aria-labelledby={`faq-${c.id}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 id={`faq-${c.id}`} className="text-xl font-semibold">
                  {c.title}
                </h3>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                  {list.length} {list.length === 1 ? "question" : "questions"}
                </span>
              </div>
              <div className="faq card card--still mt-4 divide-y divide-line">
                {visible.map((f) => (
                  <details key={f.q} className="px-6">
                    <summary className="flex items-center justify-between gap-6 py-4 font-medium transition-colors hover:text-accent">
                      {f.q}
                      <svg className="faq-icon shrink-0 text-muted" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </summary>
                    <div className="max-w-3xl pb-5">
                      <p className="leading-relaxed text-muted">{f.a}</p>
                      {f.points && (
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                          {f.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                      {f.links && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {f.links.map((l) => (
                            <li key={l.label}>
                              <ResLinkChip link={l} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                ))}
                {!open && (
                  <button
                    type="button"
                    onClick={() => setExpanded((e) => ({ ...e, [c.id]: true }))}
                    className="w-full px-6 py-4 text-sm font-semibold text-accent transition-colors hover:bg-surface-2"
                  >
                    {list.length - PREVIEW} more
                  </button>
                )}
              </div>
            </section>
          );
        })}

        {results.length === 0 && (
          <div className="card p-8 text-center">
            <h3 className="text-lg font-semibold">Nothing matches that</h3>
            <p className="mt-2 text-muted">Try a shorter word, or write to the organizers.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCat("all");
              }}
              className="btn btn-outline btn-sm mt-5"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
