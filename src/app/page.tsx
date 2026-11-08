import type { ReactNode } from "react";
import Image from "next/image";
import AgentTrace from "@/components/AgentTrace";
import Spotlight from "@/components/Spotlight";
import PartnerLogo from "@/components/PartnerLogo";
import SiteHeader, { Logo } from "@/components/SiteHeader";
import {
  aboutPoints,
  asset,
  agents,
  criteria,
  event,
  faqs,
  hosts,
  nav,
  pillars,
  pipelineStages,
  openPartnerSlots,
  organizers,
  partnerOffers,
  partnerTiers,
  partners,
  resources,
  skillLibraries,
  schedule,
  stats,
  tracks,
} from "@/content";

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">{title}</h2>
        {intro && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</div>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
      <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <Spotlight />

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero-bg relative overflow-hidden">
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="container-x relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="eyebrow">{event.host}</p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
                {event.title}
              </h1>
              <p className="mt-4 text-xl text-muted sm:text-2xl">Agentic AI for Computational Biology</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/85">{event.tagline}</p>

              <dl className="card mt-9 grid gap-5 p-5 sm:grid-cols-3 sm:p-6">
                {[
                  ["Dates", event.dates],
                  ["Location", event.location],
                  ["Venue", event.venue],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow !text-[0.7rem]">{k}</dt>
                    <dd className="mt-1.5 font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={event.registerUrl} className="btn btn-primary">
                  Register
                </a>
                <a href={event.communityUrl} className="btn btn-outline">
                  Join the community
                </a>
                <a href="#about" className="btn btn-outline">
                  Learn more
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                <p className="text-sm text-muted">Hosted by</p>
                <ul className="flex flex-wrap gap-3">
                  {hosts.map((h) => (
                    <li key={h.name} className="group flex h-16 w-44 items-center justify-center rounded-xl bg-white px-4 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 motion-reduce:hover:translate-y-0">
                      <div className="relative h-11 w-full">
                        <Image src={asset(h.logo)} alt={h.name} fill sizes="11rem" className="hover-zoom object-contain" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="min-w-0">
              <AgentTrace />
              <p className="mt-3 text-center text-xs text-muted">
                Illustrative evaluation run, the kind of study teams carry out in the Human Genetics track.
              </p>
            </div>
          </div>

          <div className="container-x relative pb-16">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse bg-bg-elev px-6 py-5 transition-colors hover:bg-surface">
                  <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <Section
          id="about"
          eyebrow="About"
          title="Putting AI agents to the test in computational biology."
          intro={
            <p>
              The {event.title} invites participants to explore and evaluate the capabilities of AI
              agents across bioinformatics and computational biology. Teams design tasks, run agents
              on them, and benchmark how well the agents reason, explain their answers and generalize.
              No prior agent experience required, only curiosity and a critical eye.
            </p>
          }
        >
          <ul className="mb-6 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <li key={p.title} className="card card-hover group flex flex-col p-7">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 font-mono text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 font-medium">{p.question}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label={`${p.title} measures`}>
                  {p.measures.map((m) => (
                    <li key={m} className="rounded-md border border-line px-2 py-1 text-xs text-muted">
                      {m}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card card-hover p-7 lg:col-span-2">
              <h3 className="text-xl font-semibold">Why benchmark agents now</h3>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                <p>
                  AI agents can now plan analyses, run bioinformatics tools and write up results on
                  their own. Researchers are starting to rely on them, yet there is little evidence on
                  how often their reasoning is sound, whether their explanations can be trusted, or how
                  they behave on data unlike what they were trained on.
                </p>
                <p>
                  That gap matters most where data are scarce: pathogens, diseases and populations
                  common in Bangladesh and South Asia but underrepresented in global references.
                  {" "}{event.shortName} brings biologists, clinicians and engineers together to measure it
                  carefully, for the first time in Bangladesh.
                </p>
              </div>
              <h3 className="mt-8 text-xl font-semibold">Who can participate</h3>
              <p className="mt-4 leading-relaxed text-muted">
                Undergraduate and graduate students, researchers, clinicians and industry engineers.
                Teams of 3 to 5; mixed biology and computing backgrounds work best. Register solo and
                we will match you into a team.
              </p>
            </div>
            <div className="card card-hover p-7">
              <h3 className="text-xl font-semibold">What you&rsquo;ll get out of it</h3>
              <ul className="mt-5 space-y-4">
                {aboutPoints.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-muted">
                    <Check />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Agents */}
        <Section
          id="agents"
          eyebrow="Agents"
          title="The AI agents under evaluation"
          intro={<p>Every team tests the same three agents on the same tasks, so results can be compared across tracks.</p>}
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {agents.map((a) => (
              <li key={a.name} className="card card-hover group flex flex-col overflow-hidden">
                <div className="flex h-40 items-center justify-center overflow-hidden bg-white px-10">
                  <div className={`relative ${"logoClass" in a ? a.logoClass : "h-24 w-full"}`}>
                    <Image src={asset(a.logo)} alt={`${a.name} logo`} fill sizes="(min-width: 768px) 20rem, 80vw" className="hover-zoom object-contain" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col border-t border-line p-6">
                  <p className="text-sm text-muted">{a.developer}</p>
                  <h3 className="mt-1 text-xl font-semibold">{a.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.about}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Evaluated on">
                    {pillars.map((p) => (
                      <li key={p.title} className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {p.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted">
            Product names and logos are trademarks of their respective owners. Their use here identifies the systems being evaluated and does not imply endorsement.
          </p>
        </Section>

        {/* Tracks */}
        <Section
          id="tracks"
          eyebrow="Tracks"
          title="Six benchmark tracks"
          intro={
            <p>
              Tracks follow the drug discovery pipeline, from early biology to the clinic. In each,
              teams evaluate how well the agents handle real tasks from that stage. Every track comes
              with datasets, reference answers, an evaluation harness and a mentor.
            </p>
          }
        >
          <ol className="mb-8 hidden grid-cols-5 gap-2 md:grid" aria-label="Drug discovery pipeline">
            {pipelineStages.map((stage) => (
              <li key={stage} className="border-t-2 border-accent/60 pt-3 text-sm font-medium text-muted">
                {stage}
              </li>
            ))}
          </ol>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => {
              const at = pipelineStages.indexOf(t.stage);
              return (
                <article key={t.title} className="card card-hover group flex flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {t.stage}
                    </span>
                    <span className="flex gap-1" aria-hidden="true">
                      {pipelineStages.map((s, i) => (
                        <span
                          key={s}
                          className={`h-1.5 w-4 rounded-full ${i === at ? "bg-accent" : i < at ? "bg-accent/35" : "bg-surface-2"}`}
                        />
                      ))}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{t.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {t.tasks.map((task) => (
                      <li key={task} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        {/* Schedule */}
        <Section
          id="schedule"
          eyebrow="Schedule"
          title="Agenda"
          intro={<p>Draft schedule. Times may change; the final agenda will be posted before the event.</p>}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {schedule.map((d) => (
              <div key={d.day} className="card card-hover overflow-hidden">
                <div className="flex items-center justify-between gap-4 border-b border-line bg-surface-2 px-6 py-4">
                  <h3 className="text-lg font-semibold">
                    {d.day} <span className="font-normal text-muted">· {d.label}</span>
                  </h3>
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{d.where}</span>
                </div>
                <table className="w-full text-left text-[0.95rem]">
                  <caption className="sr-only">{`${d.day}: ${d.label}`}</caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.sessions.map((s) => (
                      <tr key={s.time + s.title} className="border-b border-line transition-colors last:border-0 hover:bg-surface-2">
                        <td className="w-28 whitespace-nowrap px-6 py-3 align-top font-mono text-sm text-muted">{s.time}</td>
                        <td className="py-3 pr-6">
                          <span className="font-medium">{s.title}</span>
                          {s.note && <span className="mt-0.5 block text-sm text-muted">{s.note}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </Section>

        {/* Resources */}
        <Section
          id="resources"
          eyebrow="Resources"
          title="Everything you need to run a rigorous evaluation"
          intro={
            <p>
              Skills give agents the procedures and database access they need for scientific work.
              These open libraries cover the agents we evaluate, and comparing an agent with and
              without skills is itself a good evaluation question.
            </p>
          }
        >
          <h3 className="text-sm font-semibold text-muted">Agent skill libraries</h3>
          <ul className="mt-4 grid gap-6 lg:grid-cols-3">
            {skillLibraries.map((r) => (
              <li key={r.name}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <p className="text-sm text-muted">{r.publisher}</p>
                  <h4 className="mt-1 text-xl font-semibold">{r.name}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.facts.map((f) => (
                      <li key={f} className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm">
                    <span className="text-muted">Works with: </span>
                    {r.worksWith}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">
                    {r.cta}
                    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <path d="M7 13L13 7M8 7h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 text-sm font-semibold text-muted">Provided to registered teams</h3>
          <p className="mt-1 text-sm text-muted">Materials go live when registration opens.</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="card card-hover p-6">
                <h4 className="font-semibold">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Judging */}
        <Section
          id="judging"
          eyebrow="Judging"
          title="How projects are judged"
          intro={<p>Teams are judged on the quality of their evaluation, not on whose agent scores highest. A careful account of how an agent fails is worth more than a leaderboard number.</p>}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {criteria.map((c) => (
              <div key={c.name} className="card card-hover group flex flex-col p-6">
                <span className="text-4xl font-bold tracking-tight text-accent transition-transform duration-300 group-hover:scale-105 origin-left">{c.weight}%</span>
                <h3 className="mt-3 font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.note}</p>
                <div className="mt-auto pt-5">
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full rounded-full bg-accent transition-[filter] duration-300 group-hover:brightness-125" style={{ width: `${(c.weight / 30) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Organizers */}
        <Section
          id="organizers"
          eyebrow="Organizers"
          title="Organizing team"
          intro={<p>The people putting {event.shortName} together. Mentors and judges will be announced closer to the event.</p>}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {organizers.map((o) => (
              <li key={o.name} className="card card-hover group overflow-hidden">
                <div className="relative aspect-[4/3.4] bg-surface-2">
                  <Image
                    src={asset(o.photo)}
                    alt={`Portrait of ${o.name}`}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                    className="hover-zoom object-cover object-[50%_25%]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{o.role}</p>
                  <h3 className="mt-2 text-lg font-semibold">{o.name}</h3>
                  <p className="mt-1 text-sm text-muted">{o.affiliation}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Partners */}
        <Section
          id="partners"
          eyebrow="Partners"
          title="Event partners"
          intro={<p>The institutions and organizations supporting {event.shortName}.</p>}
        >
          <div className="space-y-12">
            {partners.length === 0 && (
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-muted">Partners</h3>
                  <p className="text-sm text-muted">More partners will be announced soon.</p>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {openPartnerSlots.map((slot) => (
                    <li key={slot.role}>
                      <a
                        href={`mailto:${event.contactEmail}?subject=${encodeURIComponent(`${event.shortName} partnership: ${slot.role}`)}`}
                        className="card-hover group block h-full overflow-hidden rounded-2xl border border-dashed border-line-strong hover:border-accent"
                      >
                        <div className="flex h-28 flex-col items-center justify-center gap-1.5 bg-surface-2/60 text-muted transition-colors group-hover:text-accent">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                          <span className="text-xs font-medium">Your logo here</span>
                        </div>
                        <div className="border-t border-dashed border-line-strong px-5 py-4">
                          <p className="font-semibold">{slot.role}</p>
                          <p className="mt-0.5 text-sm text-muted">{slot.hint}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {partnerTiers.map((tier) => {
              const list = partners.filter((p) => p.tier === tier);
              if (list.length === 0) return null;
              return (
                <div key={tier}>
                  <h3 className="text-sm font-semibold text-muted">{tier}</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {list.map((p) => (
                      <li key={p.name}>
                        <PartnerLogo partner={p} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <h3 className="mt-20 text-2xl font-bold tracking-tight">Become a partner</h3>
          <p className="mt-3 max-w-2xl text-muted">
            We are looking for institutions and companies to support the first cohort in these ways.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {partnerOffers.map((p) => (
              <div key={p.title} className="card card-hover p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="card mt-6 flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">Interested in partnering or mentoring?</h3>
              <p className="mt-1 text-muted">We will send you a short partnership brief.</p>
            </div>
            <a href={`mailto:${event.contactEmail}?subject=AAI4CB%20partnership`} className="btn btn-outline shrink-0">
              Contact the organizers
            </a>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
          <div className="faq card divide-y divide-line">
            {faqs.map((f) => (
              <details key={f.q} className="px-6">
                <summary className="flex items-center justify-between gap-6 py-5 font-medium transition-colors hover:text-accent">
                  {f.q}
                  <svg className="faq-icon shrink-0 text-muted" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="max-w-3xl pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Register CTA */}
        <section id="register" className="border-t border-line py-20 sm:py-28">
          <div className="container-x">
            <div className="hero-bg relative overflow-hidden rounded-3xl border border-line px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Help find out what AI agents can really do in biology.</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
                  Registration takes five minutes. Solo applicants are welcome and will be matched into a team.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a href={event.registerUrl} className="btn btn-primary">
                    Register
                  </a>
                  <a href={event.communityUrl} className="btn btn-outline">
                    Join the community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-line bg-bg-elev">
        <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {event.name}. {event.location}.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Event</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted">
              {nav.slice(0, 6).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={`mailto:${event.contactEmail}`} className="hover:text-fg">
                  {event.contactEmail}
                </a>
              </li>
              <li>
                <a href={event.communityUrl} className="hover:text-fg">
                  Community channel
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="container-x py-6 text-xs text-muted">© 2026 {event.title}</p>
        </div>
      </footer>
    </>
  );
}
