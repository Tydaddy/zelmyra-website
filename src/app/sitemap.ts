import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://www.zelmyra.net/skyblock", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://www.zelmyra.net/", lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: "https://www.zelmyra.net/smp", lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: "https://www.zelmyra.net/events", lastModified, changeFrequency: "weekly", priority: 0.75 },
    { url: "https://www.zelmyra.net/vote", lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: "https://www.zelmyra.net/guides", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://www.zelmyra.net/store", lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
