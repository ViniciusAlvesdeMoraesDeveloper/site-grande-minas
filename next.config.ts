import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["images.unsplash.com"],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
