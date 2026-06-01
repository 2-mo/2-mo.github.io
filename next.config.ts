import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Allow dev-server requests/HMR from LAN origins (e.g. testing on a phone).
  // Dev-only — ignored by the static production build.
  allowedDevOrigins: ['192.168.1.7'],
};

export default nextConfig;
