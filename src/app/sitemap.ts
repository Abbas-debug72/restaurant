import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = ["", "/menu", "/about", "/reservations", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
