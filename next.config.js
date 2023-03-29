/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
