import type { NextConfig } from "next";
const repoName = "swiss-crafts";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
