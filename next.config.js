/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useDeploymentId: true,
    // If use with serverActions is desired
    useDeploymentIdServerActions: true,
  },
};

module.exports = nextConfig;
