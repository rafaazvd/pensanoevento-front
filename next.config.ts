/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permitir qualquer domínio
      },
      {
        protocol: "http",
        hostname: "**", // Permitir qualquer domínio
      },
    ],
  },
};

export default nextConfig;
