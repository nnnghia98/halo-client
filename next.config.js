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
    const [routesRes, settingRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}page/main-page`),
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}setting/fetch-all`),
    ]);

    const routes = await routesRes.json();
    const settings = await settingRes.json();

    return {
      defaultConfig,
      publicRuntimeConfig: {
        routes: routes.data,
        setting: settings.data,
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
