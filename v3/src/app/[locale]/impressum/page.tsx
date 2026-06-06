import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalShell from '@/components/LegalShell';
import { OPERATOR } from '@/config/legal';

const DOMAIN = 'https://www.abdullahvcoskun.dev';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.impressum' });
  const brandName = locale === 'tr' ? 'Abdullah V. Çoşkun' : 'Abdullah V. Coskun';
  return {
    title: `${t('title')} — ${brandName}`,
    alternates: { canonical: `${DOMAIN}/${locale}/impressum` },
    robots: { index: true, follow: true },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <LegalShell title={t('impressum.title')} backLabel={t('back')}>
      <section>
        <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-primary mb-3">
          {t('impressum.operator_label')}
        </h2>
        <p className="text-slate-300">{OPERATOR.legalName}</p>
        {OPERATOR.showAddress && (
          <p className="mt-1 text-slate-400">
            {OPERATOR.locality}, {t('impressum.country')}
          </p>
        )}
      </section>

      <section>
        <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-primary mb-3">
          {t('impressum.contact_label')}
        </h2>
        <p>
          <span className="text-slate-500">{t('impressum.email_label')}: </span>
          <a href={`mailto:${OPERATOR.email}`} className="text-primary hover:underline">
            {OPERATOR.email}
          </a>
        </p>
        {OPERATOR.phone && (
          <p className="mt-1">
            <span className="text-slate-500">{t('impressum.phone_label')}: </span>
            <span className="text-slate-300">{OPERATOR.phone}</span>
          </p>
        )}
        {OPERATOR.taxId && (
          <p className="mt-1">
            <span className="text-slate-500">{t('impressum.tax_label')}: </span>
            <span className="text-slate-300">{OPERATOR.taxId}</span>
          </p>
        )}
      </section>

      <section>
        <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-primary mb-3">
          {t('impressum.disclaimer_heading')}
        </h2>
        <p>{t('impressum.disclaimer_body')}</p>
      </section>
    </LegalShell>
  );
}
