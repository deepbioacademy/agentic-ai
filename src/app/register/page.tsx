import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import RegisterLink from "@/components/RegisterLink";
import { Check, SkipLink } from "@/components/Section";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { event, mentorHref, mentorOpen, mentorTypes, registerOpen } from "@/content";

export const metadata: Metadata = {
  title: `Registration | ${event.title}`,
  description: "How to register as a participant or sign up as a mentor. Registration takes place on Luma.",
};

const link = "underline decoration-line-strong underline-offset-4 hover:text-accent";

export default function RegisterPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <PageHeader
          eyebrow="Registration"
          title="Registration"
          summary={`Sign-up for ${event.shortName} happens on Luma, an event platform, not on this website. There is one route for participants and another for mentors.`}
        />
        <div className="container-x py-14 sm:py-20">
          <dl className="card card--still grid gap-px overflow-hidden bg-line sm:grid-cols-2">
            <div className="bg-surface px-6 py-5">
              <dt className="text-sm text-muted">Registration status</dt>
              <dd className="mt-1 flex items-center gap-2 text-lg font-semibold">
                <span className={`h-2.5 w-2.5 rounded-full ${registerOpen ? "bg-accent" : "bg-muted"}`} aria-hidden="true" />
                {registerOpen ? "Open" : "Opens soon"}
              </dd>
            </div>
            <div className="bg-surface px-6 py-5">
              <dt className="text-sm text-muted">Registration deadline</dt>
              <dd className="mt-1 text-lg font-semibold">{event.registrationDeadline}</dd>
            </div>
          </dl>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section aria-labelledby="participants" className="card flex flex-col p-7 sm:p-8">
              <h2 id="participants" className="scroll-mt-24 text-2xl font-bold tracking-tight">
                Participants
              </h2>
              <p className="mt-2 text-muted">Students, researchers, doctors, vets, agronomists and people in industry, from anywhere in Bangladesh.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "One sign-up per person. You accept the rules as part of it.",
                  "Coming with friends? Agree on a team name and all type it the same way.",
                  "Coming alone? Leave the team name empty and we will find you a team.",
                  `Teams are ${event.teamSize} people.`,
                  "Everyone uses the same agent, Google Antigravity. You do not need to code or to have used it before.",
                  "Everything before the final is online, so you can join from outside Dhaka.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm">
                <span className="text-muted">Fee: </span>
                <strong>{event.fee}</strong>
              </p>
              <div className="mt-auto pt-7">
                {registerOpen ? (
                  <RegisterLink className="btn btn-primary" label="Register on Luma" />
                ) : (
                  <p className="flex gap-3 rounded-xl border border-line-strong bg-surface-2 p-4 text-sm leading-relaxed">
                    <Icon name="info" className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      Sign-up is not open yet. The Luma link will be posted here. If you want an email when it is,{" "}
                      <a href={`mailto:${event.contactEmail}?subject=${encodeURIComponent(`${event.shortName} registration`)}`} className={link}>
                        write to us
                      </a>
                      .
                    </span>
                  </p>
                )}
              </div>
            </section>

            <section aria-labelledby="mentors" className="card flex flex-col p-7 sm:p-8">
              <h2 id="mentors" className="scroll-mt-24 text-2xl font-bold tracking-tight">
                Mentors
              </h2>
              <p className="mt-2 text-muted">
                Each team is paired with two mentors. If you can give a few hours online, we would like to hear from you.
              </p>
              <dl className="mt-6 space-y-4">
                {mentorTypes.map((m) => (
                  <div key={m.id}>
                    <dt className="font-semibold">{m.title}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-muted">{m.body}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-muted">All mentoring is online. You can do it from anywhere, including abroad.</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-7">
                <a href={mentorHref} {...(mentorOpen ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="btn btn-primary">
                  {mentorOpen ? "Mentor sign-up form" : "Sign up by email"}
                </a>
                <Link href="/committees/#mentors" className="btn btn-outline">
                  See the mentors
                </Link>
              </div>
            </section>
          </div>

          <section aria-labelledby="before" className="card mt-6 p-7 sm:p-8">
            <h2 id="before" className="text-xl font-semibold">
              Worth reading first
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                The{" "}
                <Link href="/terms/" className={link}>
                  rules of participation
                </Link>
                , which you accept when you sign up.
              </li>
              <li>
                The{" "}
                <Link href="/privacy/" className={link}>
                  privacy notice
                </Link>
                , on what happens to your details.
              </li>
              <li>
                The{" "}
                <Link href="/resources/#faq" className={link}>
                  FAQ
                </Link>
                . If your question is not there,{" "}
                <Link href="/#contact" className={link}>
                  ask us
                </Link>
                .
              </li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
