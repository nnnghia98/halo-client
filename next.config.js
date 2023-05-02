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
    const [routesRes, settingRes, productAttributesRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}page/main-page`),
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}setting/fetch-all`),
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}product-attribute/fetch-all`),
    ]);

    const [routes, settings, productAttributes] = await Promise.all([routesRes.json(), settingRes.json(), productAttributesRes.json()]);

    return {
      defaultConfig,
      publicRuntimeConfig: {
        routes: routes.data,
        settings: settings.data,
        productAttributes: productAttributes.data,
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
