import Link from "next/link";

// Header block for sub-pages: breadcrumb, title, summary and in-page links.
export default function PageHeader({
  eyebrow,
  title,
  summary,
  toc,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  toc?: { href: string; label: string }[];
}) {
  return (
    <section className="hero">
      <div className="hero__dots" aria-hidden="true" />
      <div className="container-x relative py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-fg">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,1.4rem+3.6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{summary}</p>
        {toc && (
          <nav aria-label="On this page" className="mt-8">
            <p className="text-sm font-semibold">On this page</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {toc.map((t) => (
                <li key={t.href}>
                  <a href={t.href} className="chip transition-colors hover:border-accent hover:text-accent">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
