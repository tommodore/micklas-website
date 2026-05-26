import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['payload'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
