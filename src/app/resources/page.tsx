import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FaqBrowser from "@/components/FaqBrowser";
import GuideStepper from "@/components/GuideStepper";
import Icon from "@/components/Icon";
import Toolbox from "@/components/Toolbox";
import PageHeader from "@/components/PageHeader";
import Section, { Check, SkipLink } from "@/components/Section";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Spotlight from "@/components/Spotlight";
import { disclosure, event, presentation, resources } from "@/content";
import { guideSteps, toolNotes } from "@/resources";

export const metadata: Metadata = {
  title: `Preparation resources | ${event.title}`,
  description: "A step-by-step guide to working with Google Antigravity and Science Skills, the final presentation structure, the toolbox and all frequently asked questions.",
};

export default function ResourcesPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <Spotlight />
      <main id="main">
        <PageHeader
          eyebrow="Getting ready"
          title="Preparation resources"
          summary="How to work with Google Antigravity on a resistance question, how to use your ten minutes at the final, which sources its Science Skills reach, and answers to what people ask most."
          toc={[
            { href: "#guide", label: "Working with the agent" },
            { href: "#presentation", label: "Your ten minutes" },
            { href: "#toolbox", label: "Toolbox" },
            { href: "#faq", label: "FAQ" },
          ]}
        />

        <Section
          id="guide"
          eyebrow="Working with the agent"
          title={`${guideSteps.length} steps to a checked answer`}
          intro={
            <p>
              Written for people who have never used an agent for science. It follows one project
              from first idea to final write-up, and points out where things usually go wrong.
            </p>
          }
        >
          <GuideStepper />
        </Section>

        <Section
          id="presentation"
          eyebrow="The final"
          title="Your ten minutes"
          intro={<p>One way to divide the time. The jury includes people from outside your field, so spend real time on why the problem matters in Bangladesh.</p>}
        >
          <ol className="talk-steps" style={{ "--talk-cols": presentation.map((p) => `minmax(12rem, ${p.minutes}fr)`).join(" ") } as CSSProperties}>
            {presentation.map((p, i) => (
              <li key={p.title}>
                <div className="talk-rail">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-accent-ink" aria-hidden="true">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex rounded-md border border-dashed border-line-strong px-2.5 py-1 font-mono text-xs text-muted">
                  about {p.minutes} min
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4 hidden text-xs text-muted lg:block">Column width follows the minutes.</p>

          <div className="card mt-10 grid gap-6 p-7 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="eyebrow">Required of every team</p>
              <h3 className="mt-2 text-xl font-semibold">Show your sources</h3>
              <p className="mt-2 text-sm text-muted">Your write-up and your slides must both list:</p>
              <ul className="mt-4 space-y-3">
                {disclosure.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex gap-3 rounded-xl border border-red/30 bg-red/[0.07] p-5 font-semibold leading-snug">
              <Icon name="info" className="mt-0.5 shrink-0 text-red" />
              No result from this hackathon is a diagnosis, a prescription or a confirmed finding.
            </p>
          </div>
        </Section>

        <Section
          id="toolbox"
          eyebrow="Tools"
          title="The toolbox"
          intro={
            <p>
              One agent, one skills plugin, and every database and tool those skills can reach, each
              shown with its own logo. Entries marked as useful for resistance are the ones most
              projects here will need.
            </p>
          }
        >
          <Toolbox />

          <h3 className="mt-16 text-xl font-semibold">What your team is given</h3>
          <p className="mt-1 text-sm text-muted">Sent out once teams are formed.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="card p-6">
                <h4 className="font-semibold">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="card mt-6 p-6">
            <h3 className="font-semibold">Before you use any of these</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
              {toolNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Questions"
          intro={<p>Search, or browse by topic. If the answer is not here, write to us and we will add it.</p>}
        >
          <FaqBrowser />
          <div className="card mt-10 flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">Still stuck?</h3>
              <p className="mt-1 text-muted">Send your question to the organizers. Good ones end up on this page.</p>
            </div>
            <Link href="/#contact" className="btn btn-outline shrink-0">
              Ask the organizers
            </Link>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
