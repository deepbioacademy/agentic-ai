import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RelatedPages from "@/components/RelatedPages";
import { SkipLink } from "@/components/Section";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { event } from "@/content";
import { legalStatus, privacy } from "@/legal";

export const metadata: Metadata = {
  title: `Privacy notice | ${event.title}`,
  description: "What the hackathon learns about you at sign-up, what it is used for, and how to have it corrected or removed.",
};

export default function PrivacyPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <PageHeader
          eyebrow="Legal"
          title="Privacy notice"
          summary={`What ${event.shortName} learns about you when you sign up, what we do with it, and how to have it corrected or removed.`}
        />
        <div className="container-x grid gap-12 py-14 sm:py-20 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="flex items-baseline justify-between text-sm font-semibold">
              Contents <span className="font-normal text-muted">{privacy.length} sections</span>
            </p>
            <ol className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-muted">
              {privacy.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-2.5 hover:text-fg">
                    <span className="w-5 shrink-0 font-mono text-xs leading-5">{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose-doc max-w-3xl">
            <p className="rounded-xl border border-line-strong bg-surface-2 p-4 text-sm leading-relaxed">
              <strong>Status: {legalStatus}.</strong> The final version will be published before sign-up opens.
            </p>
            <div className="mt-10 space-y-12">
              {privacy.map((s, i) => (
                <section key={s.id} aria-labelledby={s.id} className={i === 0 ? "" : "border-t border-line pt-10"}>
                  <p className="eyebrow !text-[0.7rem]">Section {i + 1}</p>
                  <h2 id={s.id} className="mt-1">
                    {s.title}
                  </h2>
                  {s.intro && <p className="mt-3 leading-relaxed text-muted">{s.intro}</p>}
                  {s.cards && (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {s.cards.map((c) => (
                        <div key={c.title} className="card p-5">
                          <h3 className="font-semibold">{c.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {s.items && (
                    <ul>
                      {s.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <RelatedPages
              pages={[
                { href: "/terms/", title: "Rules of participation", body: "Teams, judging, ownership and conduct." },
                { href: "/register/", title: "Registration", body: "How and where to sign up." },
                { href: "/#contact", title: "Contact", body: "Ask us anything about your data." },
              ]}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
