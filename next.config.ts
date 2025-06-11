import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lacreisaude.com.br"],
  },
  webpack: (config) => {
    if (config.cache && config.cache.type === 'filesystem') {
      config.cache.buildDependencies = {
        config: [__filename],
      };
    }
    return config;
  },
};

export default nextConfig;