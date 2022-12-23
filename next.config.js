/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    NEXT_FIREBASE_APIKEY: process.env.NEXT_FIREBASE_APIKEY,
    NEXT_FIREBASE_AUTH_DOMAIN: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
    NEXT_FIREBASE_PROJECT_ID: process.env.NEXT_FIREBASE_PROJECT_ID,
    NEXT_FIREBASE_PROJECTBUCKET: process.env.NEXT_FIREBASE_PROJECTBUCKET,
    NEXT_FIREBASEMESSAGING_SENDER_ID: process.env.NEXT_FIREBASEMESSAGING_SENDER_ID,
    NEXT_FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
    NEXT_FIREBASE_MEASUREMENT_ID: process.env.NEXT_FIREBASE_MEASUREMENT_ID,
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
