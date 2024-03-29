/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_APIKEY: process.env.REACT_APP_APIKEY,
    REACT_APP_AUTHDOMAIN: process.env.REACT_APP_AUTHDOMAIN,
    REACT_APP_PROJECTID: process.env.REACT_APP_PROJECTID,
    REACT_APP_STORAGEBUCKET: process.env.REACT_APP_STORAGEBUCKET,
    REACT_APP_MESSAGINGSENDERID: process.env.REACT_APP_MESSAGINGSENDERID,
    REACT_APP_APPID: process.env.REACT_APP_APPID,
    REACT_APP_MEASUREMENTID: process.env.REACT_APP_MEASUREMENTID,
    REACT_APP_VERSION: require("./package.json").version,
    REACT_GA_ID: process.env.REACT_GA_ID,
    REACT_GA_INIT_FUNC: process.env.REACT_GA_INIT_FUNC,
  },
  compiler: {
    removeConsole: {
      exclude: ["info"],
    },
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
  i18n: {
    locales: ["in", "en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
