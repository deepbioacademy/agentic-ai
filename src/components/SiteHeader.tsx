"use client";

import { useEffect, useState } from "react";
import { event, nav } from "@/content";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      {/* DNA double helix (biology) whose base-pair node links to an AI sparkle (agent). */}
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--accent)" />
        <g fill="none" stroke="var(--accent-ink)" strokeLinecap="round">
          <path d="M7.2 7.1 H16.8 M7.2 24.9 H16.8" strokeWidth="1.3" opacity="0.7" />
          <path d="M17.5 16 L22.6 10.9" strokeWidth="1.3" strokeDasharray="1.4 1.6" />
          <path d="M6.5 5 C6.5 10.5 17.5 10.5 17.5 16 C17.5 21.5 6.5 21.5 6.5 27" strokeWidth="2.2" />
          <path d="M17.5 5 C17.5 10.5 6.5 10.5 6.5 16 C6.5 21.5 17.5 21.5 17.5 27" strokeWidth="2.2" />
          <path d="M6.5 16 H17.5" strokeWidth="1.3" />
        </g>
        <circle cx="6.5" cy="16" r="2.2" fill="var(--accent-ink)" />
        <circle cx="17.5" cy="16" r="2.2" fill="var(--accent-ink)" />
        <path d="M25.5 3.2 Q26.1 7.4 30.2 8 Q26.1 8.6 25.5 12.8 Q24.9 8.6 20.8 8 Q24.9 7.4 25.5 3.2Z" fill="var(--red)" />
      </svg>
      <span className="text-[1.05rem] font-bold tracking-tight">{event.shortName}</span>
    </span>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const t = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const id = window.setTimeout(() => setTheme(t), 0);
    return () => window.clearTimeout(id);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center gap-6">
        <a href="#top" aria-label={`${event.title} home`}>
          <Logo />
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.9rem] text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3 py-2 transition-colors hover:bg-surface-2 hover:text-fg">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <a href={event.registerUrl} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Register
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x grid gap-1 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-fg hover:bg-surface-2"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a href={event.registerUrl} className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                Register
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
