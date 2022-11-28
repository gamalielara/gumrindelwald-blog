/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  images:{
    domains: ["media.graphassets.com", ]
  },
  async redirects() {
    return [
      {
        source: "/category",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/tag",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/article",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
