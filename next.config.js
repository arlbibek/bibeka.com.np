/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
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
  async redirects() {
    return [
      {
        source: "/install",
        destination:
          "https://raw.githubusercontent.com/arlbibek/scripts/master/install-from-dir.ps1",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/arlbibek",
        permanent: true,
      },
      {
        source: "/easyaccess",
        destination:
          "https://drive.google.com/drive/folders/1F_OYMSpHlls1ej4KZSX6g2BDkKGt446T",
        permanent: true,
      },
      {
        source: "/easyupload",
        destination: "https://mega.nz/megadrop/fzUsZP-DxgM",
        permanent: true,
      },
    ];
  },
};
