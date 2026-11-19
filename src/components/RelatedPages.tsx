import Link from "next/link";
import Icon from "@/components/Icon";

export default function RelatedPages({ pages }: { pages: { href: string; title: string; body: string }[] }) {
  return (
    <section aria-labelledby="related" className="mt-16 border-t border-line pt-10">
      <h2 id="related" className="!text-base font-semibold">
        See also
      </h2>
      <ul className="!mt-4 grid !list-none gap-4 !p-0 sm:grid-cols-3">
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="card card-hover group flex h-full flex-col p-5">
              <span className="flex items-center justify-between gap-3 font-semibold text-fg">
                {p.title}
                <Icon name="arrow" size={16} className="text-accent" />
              </span>
              <span className="mt-2 text-sm leading-relaxed text-muted">{p.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
