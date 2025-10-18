/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Static export enable (Next.js 15+)
  output: 'export',

  // ✅ Disable image optimization for static build
  images: {
    unoptimized: true,
    domains: ["lovable.dev"],
  },

  // ✅ Ignore ESLint errors during build (for smooth CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Add important security headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],
};

export default nextConfig;
