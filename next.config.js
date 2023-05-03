/** @type {import('next').NextConfig} */

const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

async function buildNextConfig(config) {
  const [routesRes, settingRes, productAttributesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}page/main-page`),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}setting/fetch-all`),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}product-attribute/fetch-all`),
  ]);

  const [routes, settings, productAttributes] = await Promise.all([routesRes.json(), settingRes.json(), productAttributesRes.json()]);
  config.publicRuntimeConfig = {
    routes: routes.data,
      settings: settings.data,
      productAttributes: productAttributes.data,
  };
}

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
  sentry: {
    hideSourceMaps: true,
    enabled: process.env.NODE_ENV === 'production'
  }
};

buildNextConfig(nextConfig);

const sentryWebpackPluginOptions = {
  org: "phongtran-9e",
  project: "halo",
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
