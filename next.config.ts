import type { NextConfig } from "next";

// Served from a sub-path on GitHub Pages (e.g. /agentic-ai); empty locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in out/, for GitHub Pages
  basePath,
  trailingSlash: true,
  images: { unoptimized: true }, // no image server on static hosting
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
