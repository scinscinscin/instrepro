import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["page.tsx", "server.ts", "ts"],
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
