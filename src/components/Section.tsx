import type { ReactNode } from "react";
import Icon from "@/components/Icon";

export default function Section({
  id,
  eyebrow,
  icon,
  title,
  intro,
  tone = "plain",
  children,
}: {
  id: string;
  eyebrow: string;
  icon?: string;
  title: string;
  intro?: ReactNode;
  tone?: "plain" | "tonal" | "deep";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`section ${tone === "tonal" ? "section--tonal" : tone === "deep" ? "section--deep" : ""}`}>
      <div className="container-x">
        <header className="section__header">
          <p className="eyebrow">
            {icon && <Icon name={icon} size={20} />}
            {eyebrow}
          </p>
          <h2 className="section__title">{title}</h2>
          {intro && <div className="section__lead">{intro}</div>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
      <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2"
    >
      Skip to content
    </a>
  );
}
