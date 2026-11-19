import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import AgentTrace from "@/components/AgentTrace";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import OneHealth from "@/components/OneHealth";
import Orbit from "@/components/Orbit";
import PartnerLogo from "@/components/PartnerLogo";
import RegisterLink from "@/components/RegisterLink";
import Section, { SkipLink } from "@/components/Section";
import Shape from "@/components/Shape";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Spotlight from "@/components/Spotlight";
import ToolLogo from "@/components/ToolLogo";
import {
  agent,
  areas,
  asset,
  committees,
  criteria,
  event,
  faqs,
  hosts,
  mentorHref,
  mentors,
  milestones,
  openPartnerSlots,
  partnerTiers,
  partners,
  pillars,
  prizes,
  registerOpen,
  skillsPlugin,
  stats,
  steps,
  tieBreak,
} from "@/content";
import { faqAll, tools } from "@/resources";

// Podium order on wide screens: 2nd, 1st, 3rd. Taller block for a higher place.
const podiumOrder = ["sm:order-2", "sm:order-1", "sm:order-3"];
const podiumHeight = ["sm:pb-16", "sm:pb-10", "sm:pb-7"];
const criterionHues = ["var(--primary)", "#6fcf97", "#f2c35a", "#b9a4ff", "var(--tertiary)"];
const stepShapes = ["cookie", "flower", "burst"] as const;
const textLink = "underline decoration-line-strong underline-offset-4 hover:text-accent";
const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function Home() {
  const sourceCount = tools.filter((t) => t.skill).length;
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <Spotlight />

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="hero__dots" aria-hidden="true" />
          <div className="container-x relative grid items-center gap-x-10 gap-y-14 pb-10 pt-14 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="hero__copy">
              <p className="hero__pill">
                <span className="hero__pill-icon">
                  <Icon name="calendar" size={15} />
                </span>
                {event.finalEventDate === "To be announced" ? "Dates to be announced" : event.finalEventDate} · {event.location}
              </p>
              <h1 className="hero__title mt-6">
                <span className="hero__line">Agentic AI for</span>
                <span className="hero__line">Computational Biology</span>
                <span className="hero__sub">
                  <span className="text-gradient">Hackathon {event.year}</span>
                  <span className="hero__short">{event.shortName}</span>
                </span>
              </h1>
              <p className="hero__tagline mt-6">{event.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#participate" className="btn btn-primary">
                  <Icon name="users" />
                  Join the hackathon
                </Link>
                <Link href="/#challenges" className="btn btn-outline">
                  <Icon name="search" />
                  See the four areas
                </Link>
              </div>
            </div>
            <Orbit />
          </div>

          <div className="container-x relative pb-12 sm:pb-16">
            <dl className="facts">
              {stats.map((s) => (
                <div key={s.label} className="fact">
                  <Icon name={s.icon} className="mb-2 text-accent" />
                  <dd className="fact__value">{s.value}</dd>
                  <dt className="text-sm text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Why */}
        <section id="about" className="section">
          <div className="container-x">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
              <header className="grid gap-4">
                <p className="eyebrow">
                  <Icon name="info" size={20} />
                  The idea
                </p>
                <h2 className="section__title">Why resistance</h2>
                <p className="section__lead max-w-[60ch]">
                  When antibiotics and antifungals stop working, ordinary infections turn dangerous.
                  Here the pressure comes from every side at once: medicines sold over the counter,
                  crowded wards, fast-growing poultry and fish farming, and waterways that carry waste
                  from one to the next. {event.shortName} asks each team to take one piece of that
                  problem and investigate it with an AI agent.
                </p>
              </header>
              <div className="card relative overflow-hidden p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <Shape kind="cookie" solid size={56}>
                    <Icon name="agents" size={26} />
                  </Shape>
                  <h3 className="text-2xl font-semibold tracking-tight">Why an AI agent</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted">
                  Studying a resistance protein used to need a bioinformatician, a server and weeks of
                  setup. An agent can now plan that analysis, run the tools and report back in an
                  afternoon. That opens the work to district hospitals, veterinary labs and university
                  departments that have the questions but not the infrastructure.
                </p>
                <p className="mt-5 flex gap-3 rounded-2xl bg-tc p-4 text-sm leading-relaxed text-on-tc">
                  <Icon name="info" className="mt-0.5 shrink-0" />
                  <span>Treat what the agent tells you as a lead to follow up. It is not proof, and it does not stand in for a laboratory result.</span>
                </p>
              </div>
            </div>

            {/* The one agent */}
            <div id="agent" className="mt-16 scroll-mt-24 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)]">
              <article className="card flex flex-col p-7">
                <p className="text-sm font-semibold text-accent">The agent</p>
                <div className="mt-4 flex items-center gap-4">
                  <ToolLogo logo="antigravity.svg" name={agent.name} large />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{agent.name}</h3>
                    <p className="text-sm text-muted">{agent.developer}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{agent.about}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">Every team uses this agent. Nobody builds anything.</p>
                <a href={agent.url} {...ext} className="btn btn-tonal btn-sm mt-auto self-start">
                  antigravity.google
                  <Icon name="external" size={16} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </article>

              <article className="card flex flex-col p-7">
                <p className="text-sm font-semibold text-accent">Its scientific skills</p>
                <div className="mt-4 flex items-center gap-4">
                  <ToolLogo logo="deepmind.png" name={skillsPlugin.name} large />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{skillsPlugin.name}</h3>
                    <p className="text-sm text-muted">{skillsPlugin.developer}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{skillsPlugin.about}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Some of the sources it reaches">
                  {tools
                    .filter((t, i, all) => t.skill && t.amr && t.logo && all.findIndex((o) => o.logo === t.logo) === i)
                    .slice(0, 9)
                    .map((t) => (
                      <li key={t.name} title={t.name} className="logo-tile !h-9 !w-9 !rounded-[10px] !p-1.5">
                        <Image src={asset(`/tools/${t.logo}`)} alt={t.name} width={36} height={36} />
                      </li>
                    ))}
                  <li className="grid h-9 place-items-center rounded-[10px] bg-surface-2 px-2.5 text-xs font-semibold">+{sourceCount - 9}</li>
                </ul>
                <Link href="/resources/#toolbox" className="btn btn-tonal btn-sm mt-6 self-start lg:mt-auto">
                  All {sourceCount} sources
                  <Icon name="arrow" size={16} />
                </Link>
              </article>

              <figure className="min-w-0">
                <AgentTrace />
                <figcaption className="mt-3 text-center text-xs text-muted">An invented example of the agent at work. Not real results.</figcaption>
              </figure>
            </div>

            <h3 className="mt-16 text-xl font-semibold tracking-tight">Check every answer</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {pillars.map((p, i) => (
                <li key={p.title} className="card card--flat bg-bg-elev p-6">
                  <Shape kind={stepShapes[i]} size={44}>
                    <span className="text-sm font-bold">{i + 1}</span>
                  </Shape>
                  <h4 className="mt-4 text-lg font-semibold">{p.title}</h4>
                  <p className="mt-1 font-medium">{p.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The four areas */}
        <Section
          id="challenges"
          tone="tonal"
          icon="tracks"
          eyebrow="Challenges"
          title="Four areas"
          intro={<p>Health, food, agriculture and livestock. Your team picks one and investigates resistance in it, using the agent and public data.</p>}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {areas.map((t, i) => (
              <article key={t.code} className="track-card card card-hover group relative flex flex-col overflow-hidden p-7 sm:p-8" style={{ "--tc": t.hue } as CSSProperties}>
                <Shape kind={(["cookie", "flower", "clover", "burst"] as const)[i]} size={72}>
                  <Icon name={t.icon} size={34} />
                </Shape>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.08em]" style={{ color: `color-mix(in srgb, ${t.hue} 60%, var(--on-s))` }}>
                  {t.theme}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">{t.body}</p>
                <div className="track-question mt-auto">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="search" size={16} />
                    A question you could start from
                  </p>
                  <p className="mt-2 text-sm italic leading-relaxed">{t.question}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="card mt-4 flex gap-4 p-6 sm:p-7">
            <Shape kind="burst" size={44} className="mt-0.5">
              <Icon name="info" size={20} />
            </Shape>
            <div className="leading-relaxed text-muted">
              <p className="font-semibold text-fg">Bring your own question</p>
              <p className="mt-1 max-w-[80ch] text-sm">
                The sample questions show the kind of thing that fits. You are not bound to them, or
                to any particular organism, protein or dataset. If you have seen a resistance problem
                in your own hospital, farm or lab, build your project around that. It only has to
                sit within one of the four areas and respect the{" "}
                <Link href="/terms/" className={textLink}>
                  rules of participation
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="card card--still mt-4 p-6 sm:p-10">
            <p className="eyebrow">One Health</p>
            <h3 className="mt-3 text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-semibold leading-tight tracking-tight">How the areas connect</h3>
            <p className="mt-3 max-w-[64ch] leading-relaxed text-muted">
              People, animals, crops and water share the same bacteria and fungi. Pick a route to see
              how resistance travels between the four areas.
            </p>
            <div className="mt-8">
              <OneHealth />
            </div>
          </div>
        </Section>

        {/* Take part */}
        <Section
          id="participate"
          icon="users"
          eyebrow="Take part"
          title="How it works"
          intro={<p>Come with colleagues or come by yourself. Either way you end up in a mixed team with two mentors.</p>}
        >
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="card relative flex flex-col p-7">
                <div className="flex items-center gap-4">
                  <Shape kind={stepShapes[i]} solid size={52}>
                    <span className="text-lg font-bold">{i + 1}</span>
                  </Shape>
                  {i < steps.length - 1 && <span className="hidden h-0.5 flex-1 rounded bg-line-strong md:block" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                {i === 0 && (
                  <div className="mt-auto pt-6">
                    <RegisterLink className="btn btn-primary btn-sm" label={registerOpen ? "Register on Luma" : "Registration details"} />
                  </div>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <Icon name="info" size={18} />
            Fee: {event.fee.toLowerCase()}. You do not need to code, and you do not need to have used an AI agent before.
          </p>
        </Section>

        {/* Timeline */}
        <section id="timeline" className="section section--tonal">
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <header className="grid content-start gap-4 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">
                <Icon name="calendar" size={20} />
                Schedule
              </p>
              <h2 className="section__title">Key dates</h2>
              <p className="section__lead">
                Nearly all the work is done online in the weeks before Dhaka. Teams form, learn the
                agent, work through their question with mentors and hand in. The final is where
                they present.
              </p>
              <p className="flex items-center gap-2 text-sm text-muted">
                <Icon name="info" size={18} />
                Dates go up here once they are fixed.
              </p>
            </header>

            <ol className="timeline">
              {milestones.map((m, i) => (
                <li key={m.title} data-final={m.final ? "true" : undefined}>
                  <Shape kind="cookie" solid hue={m.final ? "var(--tertiary)" : undefined} className="timeline-node">
                    <span style={m.final ? { color: "var(--on-tertiary)" } : undefined}>{i + 1}</span>
                  </Shape>
                  <div className="timeline-card">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                      <p className="flex items-center gap-2 text-sm text-muted">
                        <Icon name="calendar" size={16} />
                        {m.date}
                      </p>
                      <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted">{m.phase}</span>
                    </div>
                    <h3 className="mt-1.5 font-sans text-base font-semibold">{m.title}</h3>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Judging and prizes */}
        <section id="judging" className="section">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <header className="grid content-start gap-4">
                <p className="eyebrow">
                  <Icon name="users" size={20} />
                  Judging
                </p>
                <h2 className="section__title">The final pitch</h2>
                <p className="section__lead">
                  At the final, every team gets <strong className="text-fg">10 minutes</strong> in front
                  of the jury. Say which resistance problem you took on, what the agent did, what you
                  found, and why anyone in Bangladesh should care.
                </p>
                <Link href="/resources/#presentation" className="btn btn-outline btn-sm justify-self-start">
                  A structure you can borrow
                  <Icon name="arrow" size={16} />
                </Link>
              </header>

              <div>
                <p className="eyebrow">
                  <Icon name="trophy" size={20} />
                  Prizes
                </p>
                <h3 className="mt-3 text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-semibold leading-tight tracking-tight">Top three teams</h3>
                <ol className="mt-8 grid items-end gap-2 sm:grid-cols-3">
                  {prizes.map((p, i) => (
                    <li key={p.label} className={`podium ${podiumOrder[i]}`} data-place={p.place}>
                      <div className={`flex flex-col items-center px-4 pb-6 pt-6 text-center ${podiumHeight[i]}`}>
                        <Shape kind="burst" solid className="podium-medal">
                          <span>{p.place}</span>
                        </Shape>
                        <p className="mt-3 text-sm text-muted">{p.label}</p>
                        <p className="mt-1 font-display text-lg font-semibold leading-tight">{p.amount}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm text-muted">
                  Amounts are announced once sponsors are confirmed.{" "}
                  <Link href="/terms/#prizes" className={textLink}>
                    See the rules on prizes
                  </Link>
                </p>
              </div>
            </div>

            <div className="card card--still mt-14 p-6 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl font-semibold tracking-tight">Judging criteria</h3>
                <p className="text-sm text-muted">Each is marked out of 10, then weighted as shown.</p>
              </div>
              <div className="mt-7 flex h-2.5 gap-1" aria-hidden="true">
                {criteria.map((c, i) => (
                  <span key={c.name} className="rounded-full" style={{ width: `${c.weight}%`, background: criterionHues[i] }} />
                ))}
              </div>
              <dl className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
                {criteria.map((c, i) => (
                  <div key={c.name}>
                    <dd className="font-display text-[2.75rem] font-semibold leading-none tracking-tight">
                      {c.weight}
                      <span className="text-xl text-muted">%</span>
                    </dd>
                    <dt className="mt-3 flex items-center gap-2 font-semibold">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: criterionHues[i] }} aria-hidden="true" />
                      {c.name}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted">{c.note}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 flex gap-3 border-t border-line pt-6 text-sm text-muted">
                <Icon name="info" size={18} className="mt-0.5 shrink-0" />
                {tieBreak}
              </p>
            </div>
          </div>
        </section>

        {/* Getting ready */}
        <Section
          id="resources"
          tone="tonal"
          icon="search"
          eyebrow="Prepare"
          title="Resources"
          intro={<p>This page keeps to the essentials. The how-to lives in the preparation resources.</p>}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { href: "/resources/#guide", icon: "agents", shape: "cookie" as const, title: "Working with the agent", body: "Seven steps from a resistance question to an answer you have tested, with the traps to watch for." },
              { href: "/resources/#toolbox", icon: "tracks", shape: "flower" as const, title: "Toolbox", body: `Antigravity, its Science Skills, and the ${sourceCount} databases and tools they reach, each with its logo and link.` },
              { href: "/committees/#mentors", icon: "users", shape: "burst" as const, title: "Mentors", body: "Who can help with the biology, and who can help when the agent misbehaves." },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="card card-hover group flex flex-col p-7">
                <Shape kind={r.shape} size={56}>
                  <Icon name={r.icon} size={26} />
                </Shape>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent">
                  Open
                  <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <h3 className="mt-14 text-xl font-semibold tracking-tight">Common questions</h3>
          <div className="mt-5">
            <Faq items={faqs} />
          </div>
          <Link href="/resources/#faq" className="btn btn-outline btn-sm mt-6">
            Read all {faqAll.length} answers
            <Icon name="arrow" size={16} />
          </Link>
        </Section>

        {/* Contact */}
        <Section id="contact" icon="mail" eyebrow="Contact" title="Get in touch" intro={<p>Not sure whether this is for you, or want to support it? Write to us.</p>}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <Shape kind="cookie" size={44}>
                  <Icon name="mail" size={20} />
                </Shape>
                <h3 className="font-sans font-semibold">Email</h3>
              </div>
              <a href={`mailto:${event.contactEmail}`} className={`mt-4 block break-all text-lg ${textLink}`}>
                {event.contactEmail}
              </a>
              <p className="mt-2 text-sm text-muted">For questions about joining, mentoring or sponsoring</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <Shape kind="flower" size={44}>
                  <Icon name="pin" size={20} />
                </Shape>
                <h3 className="font-sans font-semibold">Location</h3>
              </div>
              <p className="mt-4 text-lg">{event.location}</p>
              <p className="mt-2 text-sm text-muted">Venue for the final: {event.venue.toLowerCase()}. Everything before it is online.</p>
            </div>
            <div className="flex flex-col justify-center gap-1 rounded-[28px] bg-sc p-3 text-on-sc">
              {[
                { href: "/resources/#faq", label: "Check the FAQ first" },
                { href: "/register/", label: "How to register" },
                { href: event.communityUrl, label: "Join the shared channel" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3.5 font-semibold transition-colors hover:bg-black/10">
                  {l.label}
                  <Icon name="arrow" size={18} />
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* Organizers and partners */}
        <Section
          id="organizers"
          tone="tonal"
          icon="users"
          eyebrow="Organizers"
          title="Who runs it"
          intro={<p>Run by {hosts.map((h) => h.name).join(" and ")}, two Bangladeshi research and training organizations, together with the partners listed here.</p>}
        >
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {hosts.map((h) => (
              <li key={h.name} className="card group overflow-hidden !rounded-[20px]">
                <div className="m-2 flex h-28 items-center justify-center rounded-[14px] bg-white px-6">
                  <div className="relative h-14 w-full">
                    <Image src={asset(h.logo)} alt={`${h.name} logo`} fill sizes="16rem" className="hover-zoom object-contain" />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <p className="font-semibold">{h.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{h.note}</p>
                </div>
              </li>
            ))}
            {partnerTiers.flatMap((tier) =>
              partners
                .filter((p) => p.tier === tier)
                .map((p) => (
                  <li key={p.name}>
                    <PartnerLogo partner={p} />
                  </li>
                )),
            )}
            {partners.length === 0 &&
              openPartnerSlots.slice(0, 2).map((slot) => (
                <li key={slot.role}>
                  <a
                    href={`mailto:${event.contactEmail}?subject=${encodeURIComponent(`${event.shortName} partnership: ${slot.role}`)}`}
                    className="flex h-full min-h-44 flex-col items-center justify-center rounded-[20px] border border-dashed border-line-strong p-5 text-center transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon name="users" />
                    <span className="mt-3 font-semibold">{slot.role}</span>
                    <span className="mt-0.5 text-sm text-muted">{slot.hint}</span>
                  </a>
                </li>
              ))}
          </ul>
          {partners.length === 0 && (
            <p className="mt-5 text-sm text-muted">
              We are also looking for {openPartnerSlots.slice(2).map((s) => s.role.toLowerCase()).join(" and ")}s.{" "}
              <a href={`mailto:${event.contactEmail}?subject=${encodeURIComponent(`${event.shortName} partnership`)}`} className={textLink}>
                Write to us
              </a>
              .
            </p>
          )}
        </Section>

        {/* Rules in brief */}
        <Section
          id="terms"
          icon="info"
          eyebrow="Rules"
          title="In brief"
          intro={
            <p>
              Anyone studying or working in a relevant field can join. You register by yourself and
              work in a team of {event.teamSize}. You keep ownership of what you make. You must say
              which skills and data the agent used, and you may not use data that could identify a patient.
            </p>
          }
        >
          <div className="-mt-4 flex flex-wrap gap-3">
            <Link href="/terms/" className="btn btn-primary">
              Read the full rules
            </Link>
            <Link href="/privacy/" className="btn btn-tonal">
              Privacy notice
            </Link>
          </div>
        </Section>

        {/* People */}
        <Section
          id="committees"
          tone="tonal"
          icon="users"
          eyebrow="People"
          title="Committees and mentors"
          intro={<p>Two committees set the event up, a jury scores the work, and mentors stay with the teams throughout.</p>}
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ...committees.map((c) => ({
                title: c.title,
                body: c.short,
                count: c.members.length ? `${c.members.length} members` : "To be announced",
                photos: c.members.filter((m) => m.photo).map((m) => m.photo as string),
                href: `/committees/#${c.id}`,
                cta: "See who is on it",
              })),
              {
                title: "Mentors",
                body: "One for the science, one for the agent, matched to what your team is working on.",
                count: mentors.length ? `${mentors.length} mentors` : "To be announced",
                photos: [] as string[],
                href: "/committees/#mentors",
                cta: "See the mentors",
              },
            ].map((c, i) => (
              <li key={c.title}>
                <Link href={c.href} className="card card-hover group flex h-full flex-col p-7">
                  <Shape kind={(["cookie", "flower", "clover", "burst"] as const)[i]} size={52}>
                    <Icon name={i === 2 ? "trophy" : "users"} size={24} />
                  </Shape>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
                  <p className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5 text-sm">
                    <span className="flex items-center gap-3 text-muted">
                      {c.photos.length > 0 && (
                        <span className="flex -space-x-2">
                          {c.photos.map((ph) => (
                            <span key={ph} className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-surface">
                              <Image src={asset(ph)} alt="" fill sizes="2rem" className="object-cover object-[50%_20%]" />
                            </span>
                          ))}
                        </span>
                      )}
                      {c.count}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
                      {c.cta}
                      <Icon name="arrow" size={16} />
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Register */}
        <section id="register" className="section">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[clamp(28px,4vw,48px)] bg-pc px-6 py-14 text-center text-on-pc sm:px-12 sm:py-20">
              <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] opacity-80">Join in</p>
                <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+3.4vw,3.75rem)] font-bold leading-[1.05] tracking-tight">Join {event.shortName}</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg opacity-85">
                  Sign-up takes a few minutes on Luma. Register by yourself, add a team name if you
                  have one, and we take it from there. Mentors have their own sign-up.
                </p>
                <p className="mt-4 text-sm font-semibold">{registerOpen ? `Registration deadline: ${event.registrationDeadline}` : "Sign-up is not open yet."}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <RegisterLink className="btn bg-[var(--on-primary-container)] text-[var(--primary-container)] hover:shadow-lg" label={registerOpen ? "Register on Luma" : "How registration works"} />
                  <a href={mentorHref} className="btn border-current/40 hover:bg-black/10">
                    Offer to mentor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
