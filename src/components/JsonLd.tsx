import { useLocale } from 'next-intl';

const DOMAIN = 'https://abdullahvcoskun.dev';

export default function JsonLd() {
  const locale = useLocale();
  const name = locale === 'tr' ? 'Abdullah V. Çoşkun' : 'Abdullah V. Coskun';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url: DOMAIN,
    jobTitle: 'AI-Native Full-Stack Developer',
    knowsLanguage: ['Turkish', 'English', 'German'],
    sameAs: [
      'https://github.com/AbdullahVC',
      'https://linkedin.com/in/abdullahvcoskun',
      'https://x.com/AbdullahVCoskun',
      'https://www.instagram.com/abdullahveyselcoskun/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'CoskunTech',
      url: DOMAIN,
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Workflow Automation',
      'Full-Stack Development',
      'Next.js',
      'TypeScript',
      'n8n',
      'Internal Tooling',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${name} — Portfolio`,
    url: DOMAIN,
    inLanguage: [locale],
    author: { '@type': 'Person', name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
