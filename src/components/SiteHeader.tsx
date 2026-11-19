"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegisterLink from "@/components/RegisterLink";
import { event, nav } from "@/content";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      {/* DNA double helix (biology) whose base-pair node links to an AI sparkle (agent). */}
      <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="var(--primary-container)" />
        <g fill="none" stroke="var(--on-primary-container)" strokeLinecap="round">
          <path d="M7.2 7.1 H16.8 M7.2 24.9 H16.8" strokeWidth="1.3" opacity="0.7" />
          <path d="M17.5 16 L22.6 10.9" strokeWidth="1.3" strokeDasharray="1.4 1.6" />
          <path d="M6.5 5 C6.5 10.5 17.5 10.5 17.5 16 C17.5 21.5 6.5 21.5 6.5 27" strokeWidth="2.2" />
          <path d="M17.5 5 C17.5 10.5 6.5 10.5 6.5 16 C6.5 21.5 17.5 21.5 17.5 27" strokeWidth="2.2" />
          <path d="M6.5 16 H17.5" strokeWidth="1.3" />
        </g>
        <circle cx="6.5" cy="16" r="2.2" fill="var(--on-primary-container)" />
        <circle cx="17.5" cy="16" r="2.2" fill="var(--on-primary-container)" />
        <path d="M25.5 3.2 Q26.1 7.4 30.2 8 Q26.1 8.6 25.5 12.8 Q24.9 8.6 20.8 8 Q24.9 7.4 25.5 3.2Z" fill="var(--tertiary)" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.15rem] font-extrabold tracking-tight">{event.shortName}</span>
        <span className="mt-1 block text-[0.7rem] font-medium tracking-[0.18em] text-muted">HACKATHON 2027</span>
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const t = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const id = window.setTimeout(() => setTheme(t), 0);
    return () => window.clearTimeout(id);
  }, []);

  // On the home page, highlight the nav item for the section in view.
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = nav.filter((n) => n.href.startsWith("/#")).map((n) => n.href.slice(2));
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const isCurrent = (href: string) => (href.startsWith("/#") ? pathname === "/" && active === href.slice(2) : pathname === href || pathname === href.replace(/\/$/, ""));

  return (
    <header className="topbar">
      <div className="container-x flex h-[68px] items-center gap-4">
        <Link href="/#top" aria-label={`${event.title} home`} className="shrink-0 rounded-xl transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <nav aria-label="Main" className="mx-auto hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="nav-link" aria-current={isCurrent(n.href) ? "true" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <button type="button" onClick={toggleTheme} className="icon-btn" aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <RegisterLink className="btn btn-primary btn-sm hidden sm:inline-flex" />
          <button
            type="button"
            className="icon-btn xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg xl:hidden">
          <ul className="container-x grid gap-1 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="nav-link w-full !justify-start !rounded-xl !px-4 !py-3 !text-base">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <RegisterLink className="btn btn-primary w-full" onClick={() => setOpen(false)} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
