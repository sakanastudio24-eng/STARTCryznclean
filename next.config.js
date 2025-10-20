/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      // add others you used, e.g. cloudflare images/CDN:
      // { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};
export default nextConfig;
