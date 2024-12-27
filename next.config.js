/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
   
  },
  appDir: true, 
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URL,
  },
};

module.exports = nextConfig;