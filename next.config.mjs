import ContentSecurityPolicy from "./csp.config.mjs";

import pkg from "./package.json" with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  output: "export",
  env: {
    NEXT_PUBLIC_APP_VERSION: pkg.version,
    NEXT_PUBLIC_APP_VERSION_COMMIT: process.env.GITHUB_SHA,
    CONTENT_SECURITY_POLICY: ContentSecurityPolicy,
  },
  transpilePackages: ["@codegouvfr/react-dsfr"],
};

export default nextConfig;
