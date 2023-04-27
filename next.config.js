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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}page/main-page`
    );
    const data = await res.json();

    return {
      defaultConfig,
      publicRuntimeConfig: { routes: data.data },
      ...nextConfig,
    };
  } catch (e) {
    return {
      defaultConfig,
      ...nextConfig,
    };
  }
};
