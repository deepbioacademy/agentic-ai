import Image from "next/image";
import { asset, type Partner } from "@/content";

function initials(name: string) {
  const words = name.trim().split(/\s+/);
  return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase();
}

export default function PartnerLogo({ partner }: { partner: Partner }) {
  const body = (
    <>
      {/* Logos sit on a white plate so dark-ink logos stay legible in dark mode. */}
      <div className="relative flex h-28 items-center justify-center bg-white px-8">
        {partner.logo ? (
          <div className="relative h-14 w-full">
            <Image
              src={asset(partner.logo)}
              alt={`${partner.name} logo`}
              fill
              sizes="16rem"
              className="object-contain"
            />
          </div>
        ) : (
          <span
            aria-hidden="true"
            className="grid h-14 w-14 place-items-center rounded-xl bg-[#0b0e13] text-lg font-bold tracking-tight text-white"
          >
            {initials(partner.name)}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
        <span className="font-semibold">{partner.name}</span>
        {partner.url && (
          <svg viewBox="0 0 20 20" width="16" height="16" className="shrink-0 text-muted" aria-hidden="true">
            <path d="M7 13L13 7M8 7h5v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </>
  );

  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card block overflow-hidden transition-colors hover:border-line-strong"
    >
      {body}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <div className="card overflow-hidden">{body}</div>
  );
}
