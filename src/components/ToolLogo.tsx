import Image from "next/image";
import { asset } from "@/content";

// A tool or data-source logo on a white plate. Falls back to initials.
export default function ToolLogo({ logo, name, large = false }: { logo?: string; name: string; large?: boolean }) {
  const px = large ? 64 : 44;
  const initials = name
    .replace(/[^A-Za-z ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span className={`logo-tile ${large ? "logo-tile--lg" : ""}`}>
      {logo ? (
        <Image src={asset(`/tools/${logo}`)} alt="" width={px} height={px} />
      ) : (
        <span className="logo-tile__mono" aria-hidden="true">
          {initials}
        </span>
      )}
    </span>
  );
}
