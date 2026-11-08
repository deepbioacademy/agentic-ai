"use client";

import { useEffect, useState } from "react";
import { traceLines } from "@/content";

const prefix: Record<(typeof traceLines)[number]["kind"], string> = {
  goal: "task",
  plan: "plan",
  tool: "$",
  think: "think",
  ok: "→",
  done: "done",
};

export default function AgentTrace() {
  const [shown, setShown] = useState(0);
  const finished = shown >= traceLines.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setShown(traceLines.length), 0);
      return () => window.clearTimeout(t);
    }
    const id = window.setInterval(() => {
      setShown((n) => {
        if (n >= traceLines.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 480);
    return () => window.clearInterval(id);
  }, []);

  return (
    <figure className="trace">
      <div className="trace-bar">
        <span className="trace-dot" />
        <span className="trace-dot" />
        <span className="trace-dot" />
        <span className="ml-2">agent-eval</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${finished ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`}
          />
          {finished ? "finished" : "running"}
        </span>
      </div>
      <ol className="sr-only">
        {traceLines.map((l, i) => (
          <li key={i}>
            {l.kind}: {l.text}
          </li>
        ))}
      </ol>
      <ol className="trace-body" aria-hidden="true">
        {traceLines.map((l, i) => (
          <li key={i} data-kind={l.kind} className={i < shown ? "is-in" : ""}>
            <span className="trace-k">{prefix[l.kind]}</span>
            <span>{l.text}</span>
          </li>
        ))}
        <li className="trace-cursor" data-done={finished}>
          ▍
        </li>
      </ol>
    </figure>
  );
}
