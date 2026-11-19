import Link from "next/link";
import Icon from "@/components/Icon";
import type { ResLink } from "@/resources";

// A small link chip. External links open in a new tab; "#x" links stay on the page.
export default function ResLinkChip({ link }: { link: ResLink }) {
  const cls =
    "inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent";
  if (link.href.startsWith("http")) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {link.label}
        <Icon name="external" size={14} />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={cls}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={cls}>
      {link.label}
    </Link>
  );
}
