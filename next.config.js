/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

async function buildPublicRuntimeConfig() {
  const [routesRes, settingRes, productAttributesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/page/main-page`),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/setting/fetch-all`),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/product-attribute/fetch-all`),
  ]);

  const [routes, settings, productAttributes] = await Promise.all([
    routesRes.json(),
    settingRes.json(),
    productAttributesRes.json(),
  ]);

  return {
    routes: routes.data,
    settings: settings.data,
    productAttributes: productAttributes.data,
  };
}

module.exports = async (phase, {defaultConfig}) => {
  try {
    const publicRuntimeConfigRes = await buildPublicRuntimeConfig();

    nextConfig.publicRuntimeConfig = publicRuntimeConfigRes;
    nextConfig.sentry = {
      hideSourceMaps: true,
      enabled: true,
    };

    return {
      defaultConfig,
      ...nextConfig
    };
  } catch (e) {
    return {
      defaultConfig
    }
  }
};
