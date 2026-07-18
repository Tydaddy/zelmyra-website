import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers can hit resource limits when Next tries to optimize many
  // large Minecraft screenshots on request. Serve images directly from /public.
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
