// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import routing from "@/i18n/routing";

import "@/app/[locale]/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

// Static params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://abdullahvcoskun.dev";

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("name")}`,
    },
    description: t("description"),
    keywords: [
      "Full Stack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Portfolio",
      "Web Developer",
      "Abdullah V. ÇOŞKUN",
    ],
    authors: [{ name: "Abdullah Veysel ÇOŞKUN" }],
    creator: "Abdullah Veysel ÇOŞKUN",
    openGraph: {
      type: "website",
      locale: locale,
      url: `${baseUrl}/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: t("name"),
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: t("name"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@abdullahvcoskun",
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        tr: `${baseUrl}/tr`,
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
      },
    },
    other: {
      "theme-color": "#0f172a",
      "mobile-web-app-capable": "yes",
    },
    icons: {
      icon: [
        { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon/favicon.ico",
      apple: "/favicon/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Geçersiz locale ise 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // next-intl server context
  setRequestLocale(locale);

  // Mesajları server'da çek
  const messages = await getMessages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Veysel ÇOŞKUN",
    url: "https://abdullahvcoskun.dev",
    jobTitle: "Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js",
    sameAs: [
      "https://github.com/AbdullahVC",
      "https://linkedin.com/in/abdullahvcoskun",
      "https://twitter.com/abdullahvcoskun",
      "https://instagram.com/abdullahveyselcoskun",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "Web Development",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Abdullah V. Coşkun" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
