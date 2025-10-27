import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abdullahvcoskun.dev";
  const locales = ["tr", "en", "de"];

  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((loc) => [loc, `${baseUrl}/${loc}`])),
    },
  }));

  return routes;
}
