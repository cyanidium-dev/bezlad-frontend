import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compress: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "cdn.sanity.io",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "**",
            },
        ],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Enable React compiler optimizations
    reactStrictMode: true,
};

export default nextConfig;
