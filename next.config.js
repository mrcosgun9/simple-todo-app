/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

module.exports = nextConfig;
