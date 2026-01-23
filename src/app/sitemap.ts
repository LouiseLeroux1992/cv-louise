import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lerouxlouise.fr";
  const locales = ["fr", "en"];

  const routes = [
    "",
    "/services/developpement",
    "/services/illustration",
    "/a-propos",
    "/contact",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
