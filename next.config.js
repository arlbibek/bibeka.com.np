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
        source: "/bs",
        destination: "https://nepalicalendar.rat32.com",
        permanent: true,
      },
      {
        source: "/arlresume",
        destination:
          "https://drive.google.com/drive/folders/1xc-jyi9qWAuSwfDL8rgxDn4YrwcMi9il",
        permanent: true,
      },
    ];
  },
};
