import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://ziqiliow.framer.website/',
      },
    ];
  },
};

export default nextConfig;
