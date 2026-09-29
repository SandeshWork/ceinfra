/** @type {import('next').NextConfig} */
const nextConfig = {
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
