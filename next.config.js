
const path = require('path');
const nextConfig = { 
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {   
      formats: ['image/avif', 'image/webp'],  
   },
   devtool: 'source-map',
};

module.exports = nextConfig;
