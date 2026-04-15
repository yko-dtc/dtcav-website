import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      {
        pathname: "/media/**",
        search: "",
      },
      {
        pathname: "/media/manufacturers/**",
        search: "?v=2026-04-15",
      },
    ],
  },
};

export default nextConfig;
