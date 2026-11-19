import type { Metadata, Viewport } from "next";
import { Commissioner, Roboto_Flex, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = Roboto_Flex({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const brand = Commissioner({ variable: "--font-brand", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-jbmono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "AAI4CB Hackathon 2027 | Agentic AI in Computational Biology",
  description:
    "AAI4CB Hackathon 2027: mixed teams direct an AI agent, Google Antigravity, to investigate antimicrobial resistance in Bangladesh across health, food, agriculture and livestock. Final in Dhaka.",
  openGraph: {
    title: "AAI4CB Hackathon 2027",
    description: "Teams direct an AI agent to investigate antimicrobial resistance in Bangladesh across health, food, agriculture and livestock. Online working weeks, in-person final in Dhaka.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#10131a" },
    { media: "(prefers-color-scheme: light)", color: "#f9f9ff" },
  ],
};

// Sets the theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${body.variable} ${brand.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
