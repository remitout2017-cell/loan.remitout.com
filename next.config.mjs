/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ===============================
     CORE MODE
  =============================== */
  output: "export",
  trailingSlash: true,

  /* ===============================
     REACT & BUILD
  =============================== */
  reactStrictMode: true,
  reactCompiler: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },

  /* ===============================
     IMAGES (STATIC EXPORT SAFE)
  =============================== */
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  /* ===============================
     CSS & RUNTIME
  =============================== */
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  /* ===============================
     TURBOPACK (EXPLICIT, SILENCES ERROR)
  =============================== */
  turbopack: {},
};

export default nextConfig;
