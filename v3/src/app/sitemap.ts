import type { MetadataRoute } from 'next';

const DOMAIN = 'https://abdullahvcoskun.dev';
const locales = ['tr', 'en', 'de'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${DOMAIN}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'tr' ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${DOMAIN}/${l}`])),
    },
  }));

  return entries;
}
