import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="footer-snap py-12 text-center font-mono">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-[12.5px] text-slate-400 leading-[1.7] mb-1.5">
          {t('credit_line_1_pre')}{' '}
          <a
            href="https://v4.brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {t('credit_line_1_link')}
          </a>
          .
        </p>
        <p className="text-[12.5px] text-slate-400 leading-[1.7] mb-3">
          {t('credit_line_2')}
        </p>
        <p className="font-mono text-[11.5px] text-slate-500 tracking-[0.06em] mb-4">
          {t('studio_line')}
        </p>
        <p className="text-[11px] text-slate-600 tracking-[0.18em] uppercase">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
