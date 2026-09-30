import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files. This exports every portfolio route
  // to the `out` directory and keeps detail-page URLs refresh-safe.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
