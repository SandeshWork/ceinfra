/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/fleet",
        destination: "/machineries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
