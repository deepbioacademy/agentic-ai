import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RelatedPages from "@/components/RelatedPages";
import { SkipLink } from "@/components/Section";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { event } from "@/content";
import { legalStatus, terms, termsIntro } from "@/legal";

export const metadata: Metadata = {
  title: `Rules of participation | ${event.title}`,
  description: "What you agree to at sign-up: who can join, how teams work, what you hand in, how it is judged, and who owns the result.",
};

export default function TermsPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <PageHeader
          eyebrow="Legal"
          title="Rules of participation"
          summary={`What you agree to when you sign up for ${event.title}: who can join, how teams work, what you hand in, how it is judged, and who owns the result.`}
        />
        <div className="container-x grid gap-12 py-14 sm:py-20 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
            <p className="flex items-baseline justify-between text-sm font-semibold">
              Contents <span className="font-normal text-muted">{terms.length} rules</span>
            </p>
            <ol className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-muted">
              <li>
                <a href="#introduction" className="hover:text-fg">
                  About these rules
                </a>
              </li>
              {terms.map((t, i) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="flex gap-2.5 hover:text-fg">
                    <span className="w-5 shrink-0 font-mono text-xs leading-5">{i + 1}</span>
                    {t.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose-doc max-w-3xl">
            <p className="rounded-xl border border-line-strong bg-surface-2 p-4 text-sm leading-relaxed">
              <strong>Status: {legalStatus}.</strong> The final version will be published before sign-up opens.
            </p>

            <section aria-labelledby="introduction" className="mt-10">
              <h2 id="introduction">About these rules</h2>
              <div className="mt-3 space-y-4 leading-relaxed text-muted">
                {termsIntro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>

            <div className="mt-12 space-y-12">
              {terms.map((t, i) => (
                <section key={t.id} aria-labelledby={t.id} className="border-t border-line pt-10">
                  <p className="eyebrow !text-[0.7rem]">Rule {i + 1}</p>
                  <h2 id={t.id} className="mt-1">
                    {t.title}
                  </h2>
                  <ol className="doc-list">
                    {t.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>

            <RelatedPages
              pages={[
                { href: "/privacy/", title: "Privacy notice", body: "What we hold about you and what you can ask us to do with it." },
                { href: "/register/", title: "Registration", body: "How and where to sign up." },
                { href: "/resources/#faq", title: "FAQ", body: "The same ground in plainer language." },
              ]}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
