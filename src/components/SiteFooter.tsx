import Link from "next/link";
import { Logo } from "@/components/SiteHeader";
import RegisterLink from "@/components/RegisterLink";
import { event, footerNav } from "@/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-elev">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.3fr_2.4fr]">
        <div>
          <Link href="/#top" aria-label={`${event.title} home`} className="inline-block rounded-xl transition-opacity hover:opacity-80">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {event.name}. {event.location}.
          </p>
          <h2 className="mt-8 text-sm font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${event.contactEmail}`} className="hover:text-fg">
                {event.contactEmail}
              </a>
            </li>
            <li>
              <Link href={event.communityUrl} className="hover:text-fg">
                Community channel
              </Link>
            </li>
          </ul>
          <RegisterLink className="btn btn-primary btn-sm mt-6" />
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-fg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="container-x py-6 text-xs text-muted">© 2026 {event.title}</p>
      </div>
    </footer>
  );
}
