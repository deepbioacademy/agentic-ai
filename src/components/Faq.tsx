export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq card card--still divide-y divide-line">
      {items.map((f) => (
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
  );
}
