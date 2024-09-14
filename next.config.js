const { env } = require("process");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx"
  // unstable_staticImage: true,
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/pool" : "";

module.exports = withNextra({
  images: {
    unoptimized: true
  },
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
  env: {
    BASE_PATH: assetPrefix
  }
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
