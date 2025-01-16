import type { NextConfig } from "next";

import withPWA from '@ducanh2912/next-pwa';

const withPWAConfig = withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development"
});

const nextConfig:NextConfig = {
}
module.exports = withPWAConfig(nextConfig);
