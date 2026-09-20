import { MetadataRoute } from "next";
import { blogsData } from "@/data/blogs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fosti-ums.pages.dev";
  // Clean W3C Date format (YYYY-MM-DD) preferred by Google Search Console
  const currentDate = new Date().toISOString().split("T")[0];

  // Dynamic Blog routes (All confirmed 200 OK)
  const blogRoutes: MetadataRoute.Sitemap = blogsData.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Core Static routes (All confirmed 200 OK)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/divisi/ristek`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/divisi/keor`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/divisi/hubpub`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogRoutes];
}
