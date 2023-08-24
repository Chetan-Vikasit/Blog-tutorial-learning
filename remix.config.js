/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  serverModuleFormat: "cjs",
  tailwind: true,
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
  postcss: true,
 
};
