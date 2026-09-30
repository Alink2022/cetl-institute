import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: CSP },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Vercel weist jedem Projekt automatisch eine <project>.vercel.app-Domain
  // zu, die sich im Dashboard nicht löschen lässt. Damit ausschließlich
  // www.cetl.institute als Live-Seite erreichbar ist, leiten wir die
  // Vercel-Standarddomain und die nackte Apex-Domain dauerhaft auf www um.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cetl-institute.vercel.app" }],
        destination: "https://www.cetl.institute/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "cetl.institute" }],
        destination: "https://www.cetl.institute/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
