import { strapiApiUrl } from "@/strapi/env";
import { NextConfig } from "next";

const cspHeader = `
    frame-ancestors ${strapiApiUrl || "none"};
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;