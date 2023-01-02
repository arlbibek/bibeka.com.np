/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
        port: "",
        pathname: "/279527322/**",
      },
    ],
  },
};
