import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

function getSiteUrl() {
    const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (env) return env.replace(/\/+$/, "");
    return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = getSiteUrl();
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/apply`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ];

    const caseStudies: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
        url: `${siteUrl}/case-studies/${cs.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...caseStudies];
}

