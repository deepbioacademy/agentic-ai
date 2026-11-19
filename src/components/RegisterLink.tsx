import Link from "next/link";
import { event, registerOpen } from "@/content";

// Registration lives on Luma. Once the Luma URL is set in content.ts this opens
// the event page in a new tab; until then it points at the registration page.
export default function RegisterLink({
  className,
  label = "Register",
  onClick,
}: {
  className?: string;
  label?: string;
  onClick?: () => void;
}) {
  if (registerOpen) {
    return (
      <a href={event.lumaUrl} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {label}
        <span className="sr-only"> on Luma (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href="/register/" className={className} onClick={onClick}>
      {label}
    </Link>
  );
}
