import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nl/blog/student-bike-guide-groningen",
        destination: "/nl/blog/student-bike-guide-groningen-2026",
        permanent: true,
      },
      {
        source: "/en/guides/student-bike-guide-groningen",
        destination: "/en/guides/student-bike-guide-groningen-2026",
        permanent: true,
      },
      {
        source: "/blog/student-bike-guide-groningen",
        destination: "/nl/blog/student-bike-guide-groningen-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
