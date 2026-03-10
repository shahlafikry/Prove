'use client';

const nextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Replace with your image domain
    sizes: [16, 32, 48, 64, 96, 128, 256, 384, 640], // Available sizes for the images
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
