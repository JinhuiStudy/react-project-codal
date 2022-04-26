/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@common/components"]);
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
