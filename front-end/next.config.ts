import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["127.0.0.1", "fcore.tech"],
    formats: ["image/avif", "image/webp"],
  },
  distDir: "dist",
  trailingSlash: false,
};

export default nextConfig;
