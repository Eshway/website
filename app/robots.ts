import type { MetadataRoute } from "next";

function getSiteUrl() {
    const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (env) return env.replace(/\/+$/, "");
    return "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
    const siteUrl = getSiteUrl();
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}

