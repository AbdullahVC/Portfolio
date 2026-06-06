import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { routing } from '@/i18n/routing';
import IntroLoader from '@/components/IntroLoader';
import '../globals.css';

const DOMAIN = 'https://www.abdullahvcoskun.dev';

const sans = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap'
});

function getNameForLocale(locale: string) {
  // TR keeps Turkish diacritics; EN/DE use the latinised form (no ç/ş).
  return locale === 'tr' ? 'Abdullah V. Çoşkun' : 'Abdullah V. Coskun';
}

const descriptions: Record<string, string> = {
  tr: 'AI destekli ürünler, workflow otomasyonları ve dijital operasyon sistemleri geliştiriyorum. Fikirden deploy\'a kadar tüm sistemi inşa ediyorum.',
  en: 'I build AI-powered products, workflow automations and digital operation systems. From idea to deployment — end-to-end.',
  de: 'Ich entwickle KI-gestützte Produkte, Workflow-Automatisierungen und digitale Betriebssysteme. Von der Idee bis zum Deployment — end-to-end.',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const name = getNameForLocale(locale);
  const description = descriptions[locale] || descriptions.en;
  const url = `${DOMAIN}/${locale}`;

  return {
    metadataBase: new URL(DOMAIN),
    title: `${name} — Full-Stack Web & AI Developer`,
    description,
    keywords: ['AI developer', 'full-stack developer', 'workflow automation', 'n8n', 'Next.js', 'internal tools', 'DACH', 'Turkey', 'freelance developer'],
    authors: [{ name, url: DOMAIN }],
    creator: name,
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: { url: '/apple-icon.png', sizes: '180x180' },
    },
    alternates: {
      canonical: url,
      languages: {
        'tr': `${DOMAIN}/tr`,
        'en': `${DOMAIN}/en`,
        'de': `${DOMAIN}/de`,
        'x-default': `${DOMAIN}/tr`,
      },
    },
    openGraph: {
      title: `${name} — Full-Stack Web & AI Developer`,
      description,
      url,
      siteName: name,
      locale: locale === 'tr' ? 'tr_TR' : locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${name} — Full-Stack Web & AI Developer`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} — Full-Stack Web & AI Developer`,
      description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export const viewport = {
  themeColor: '#0A192F',
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'tr' | 'de' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-bg text-slate-300 font-sans">
        <NextIntlClientProvider messages={messages}>
          <IntroLoader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
