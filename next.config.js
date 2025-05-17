/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
        source: "/github",
        destination: "https://github.com/arlbibek",
        permanent: true,
      },
      {
        source: "/arlresume",
        destination:
          "https://drive.google.com/drive/folders/1xc-jyi9qWAuSwfDL8rgxDn4YrwcMi9il",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "https://rxresu.me/bibeka/resume",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "https://rxresu.me/bibeka/resume",
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
      {
        source: "/arlext",
        destination:
          "https://alternativeto.net/lists/41213/browser-extensions-i-cannot-live-without/",
        permanent: true,
      },
      {
        source: "/arlapps",
        destination:
          "https://alternativeto.net/lists/41212/softwares-and-tools-that-i-cannot-live-without/",
        permanent: true,
      },
    ];
  },
};
