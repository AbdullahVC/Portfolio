import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/LegalShell';
import { OPERATOR } from '@/config/legal';

const DOMAIN = 'https://www.abdullahvcoskun.dev';

const SECTIONS = [
  'controller',
  'hosting',
  'logs',
  'contact',
  'cookies',
  'tracking',
  'rights',
  'changes',
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.datenschutz' });
  const brandName = locale === 'tr' ? 'Abdullah V. Çoşkun' : 'Abdullah V. Coskun';
  return {
    title: `${t('title')} — ${brandName}`,
    alternates: { canonical: `${DOMAIN}/${locale}/datenschutz` },
    robots: { index: true, follow: true },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <LegalShell
      title={t('datenschutz.title')}
      backLabel={t('back')}
      updatedLabel={t('datenschutz.updated')}
    >
      <p>{t('datenschutz.intro')}</p>

      {SECTIONS.map((key) => (
        <section key={key}>
          <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-primary mb-3">
            {t(`datenschutz.${key}_heading`)}
          </h2>
          <p className="whitespace-pre-line">
            {t(`datenschutz.${key}_body`, { email: OPERATOR.email })}
          </p>
        </section>
      ))}
    </LegalShell>
  );
}
