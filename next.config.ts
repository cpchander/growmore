import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ============================================================
  // SECURITY: HTTP Security Headers (fixes H3)
  // ============================================================
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking — deny all framing
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Prevent MIME-type sniffing attacks
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer information leakage
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // HSTS — force HTTPS for 2 years + include subdomains + preload
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Restrict browser feature access
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Cross-origin isolation
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // Content Security Policy — allow inline styles/scripts for Next.js + 3D libs
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://region1.google-analytics.com",
              "media-src 'self' blob:",
              "worker-src 'self' blob:",
              "frame-src 'self' https://www.youtube.com https://www.google.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
