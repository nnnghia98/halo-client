/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/san-pham": { page: "/product" },
      "/san-pham/[category]": { page: "/product/[category]" },
      "/bo-suu-tap": { page: "/collection" },
      "/cac-du-an": { page: "/project" },
    };
  },
};

module.exports = nextConfig;
