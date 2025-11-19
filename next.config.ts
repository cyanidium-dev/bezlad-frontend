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
    },
};

export default nextConfig;
