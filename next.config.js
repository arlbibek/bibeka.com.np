/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    const github = "https://github.com/arlbibek";
    const youtube = "https://www.youtube.com/channel/UC1Z6c7Q69HeY0M22AyFSgkA";
    const masterdb =
      "https://docs.google.com/spreadsheets/d/18KHUxdSNkJD4Ln9xjsEPR67d-gcCYXgmo0bgNui3DTk/edit?usp=sharing";
    const nepaliCalendar = "https://nepalicalendar.rat32.com/";
    return [
      // GitHub
      {
        source: "/github",
        destination: github,
        permanent: true,
      },
      {
        source: "/GitHub",
        destination: github,
        permanent: true,
      },
      {
        source: "/GITHUB",
        destination: github,
        permanent: true,
      },
      // YouTube
      {
        source: "/YouTube",
        destination: youtube,
        permanent: true,
      },
      {
        source: "/youtube",
        destination: youtube,
        permanent: true,
      },
      {
        source: "/YOUTUBE",
        destination: youtube,
        permanent: true,
      },
      {
        source: "/masterdb",
        destination: masterdb,
        permanent: true,
      },
      // nepali calendar
      {
        source: "/cal",
        destination: nepaliCalendar,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
