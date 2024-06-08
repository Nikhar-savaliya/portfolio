/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ansubkhan.com",
      },
      {
        hostname: "skillicons.dev",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
