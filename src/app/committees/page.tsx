import type { Metadata } from "next";
import Image from "next/image";
import MentorList from "@/components/MentorList";
import PageHeader from "@/components/PageHeader";
import Section, { SkipLink } from "@/components/Section";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { asset, committees, event, mentorHref, mentorOpen, mentorTypes } from "@/content";

export const metadata: Metadata = {
  title: `Committees and mentors | ${event.title}`,
  description: "The people who run the hackathon, set its scientific direction, judge the work and mentor the teams.",
};

export default function CommitteesPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <PageHeader
          eyebrow="Committees and mentors"
          title="Committees and mentors"
          summary={`The people who run ${event.shortName}, set its scientific direction, judge the work and mentor the teams.`}
          toc={[
            { href: "#committee-members", label: `Committees · ${committees.length}` },
            { href: "#mentors", label: "Mentors" },
          ]}
        />

        <Section
          id="committee-members"
          eyebrow="Committees"
          title="Who does what"
          intro={<p>One runs the event, one looks after the science, one scores the results.</p>}
        >
          <div className="space-y-14">
            {committees.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="grid scroll-mt-24 gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
                <div className="card self-start p-6">
                  <h3 id={`${c.id}-title`} className="text-xl font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {c.members.length ? `${c.members.length} members` : "To be announced"}
                  </p>
                </div>
                {c.members.length ? (
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {c.members.map((m) => (
                      <li key={m.name} className="card flex items-center gap-4 p-5">
                        {m.photo && (
                          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-surface-2">
                            <Image src={asset(m.photo)} alt="" fill sizes="4rem" className="object-cover object-[50%_20%]" />
                          </span>
                        )}
                        <div>
                          <p className="font-semibold">{m.name}</p>
                          <p className="text-sm">{m.role}</p>
                          <p className="text-sm text-muted">{m.affiliation}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="card flex items-center p-6 text-muted">Members of the {c.title} will be named here once confirmed.</p>
                )}
              </section>
            ))}
          </div>
        </Section>

        <Section
          id="mentors"
          eyebrow="Mentors"
          title="Your mentors"
          intro={<p>Mentors come from hospitals, universities, veterinary and agricultural institutes and industry. They work with teams online.</p>}
        >
          <div className="card grid gap-6 p-6 md:grid-cols-3">
            {mentorTypes.map((m) => (
              <div key={m.id}>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
            <div>
              <h3 className="font-semibold">Both</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">A few mentors can do both jobs: the biology and the agent.</p>
            </div>
            <p className="border-t border-line pt-5 text-sm leading-relaxed text-muted md:col-span-3">
              Pairing is done by the Organizing Committee once teams have chosen their area. Tell us if
              there is someone you would like to work with and we will try.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-semibold">Mentor directory</h3>
          <div className="mt-4">
            <MentorList />
          </div>

          <div className="card mt-10 flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">Could you mentor a team?</h3>
              <p className="mt-1 max-w-xl text-muted">
                We especially need people who work on resistance in Bangladesh: in wards, diagnostic labs, veterinary practice, aquaculture or crop protection. A few hours online is enough.
              </p>
            </div>
            <a href={mentorHref} {...(mentorOpen ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="btn btn-primary shrink-0">
              Mentor sign-up
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
