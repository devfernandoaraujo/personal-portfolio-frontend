import path from 'path';
import type { NextConfig } from 'next';

const config: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../'),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'unpkg.com' },
    ],
  },
};

export default config;
