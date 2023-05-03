/** @type {import('next').NextConfig} */

const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

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

const sentryWebpackPluginOptions = {
  org: "phongtran-9e",
  project: "halo",
  silent: true, // Suppresses all logs
};

module.exports = async () => {
  try {
    const publicRuntimeConfigRes = await buildPublicRuntimeConfig();

    nextConfig.publicRuntimeConfig = publicRuntimeConfigRes;
    nextConfig.sentry = {
      hideSourceMaps: true,
      enabled: process.env.NODE_ENV === "production",
    };

    return withSentryConfig(nextConfig, sentryWebpackPluginOptions);
  } catch (e) {
    console.log(e)
    return withSentryConfig(nextConfig, sentryWebpackPluginOptions);
  }
};
