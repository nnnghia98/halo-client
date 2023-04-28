/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = async (phase, { defaultConfig }) => {
  try {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BACKEND_API}page/main-page`
    // );
    // const data = await res.json();

    const [routesRes, settingRes] = Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}page/main-page`),
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}setting/fetch-all`),
    ]);

    return {
      defaultConfig,
      publicRuntimeConfig: {
        routes: routesRes.json().data,
        setting: settingRes.json().data,
      },
      ...nextConfig,
    };
  } catch (e) {
    return {
      defaultConfig,
      ...nextConfig,
    };
  }
};
