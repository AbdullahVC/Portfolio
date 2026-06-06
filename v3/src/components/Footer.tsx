import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const tl = useTranslations('legal');

  return (
    <footer className="footer-snap py-12 text-center font-mono">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-[12.5px] text-slate-400 leading-[1.7] mb-1.5">
          {t('credit_line_1_pre')}{' '}
          <a
            href="https://v4.brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 decoration-primary/50 hover:decoration-primary"
          >
            {t('credit_line_1_link')}
          </a>
          .
        </p>
        <p className="text-[12.5px] text-slate-400 leading-[1.7] mb-3">
          {t('credit_line_2')}
        </p>
        <p className="font-mono text-[11.5px] text-slate-400 tracking-[0.06em] mb-4">
          {t('studio_line')}
        </p>
        <p className="text-[11px] text-slate-400 tracking-[0.18em] uppercase mb-4">
          {t('copyright')}
        </p>
        <nav className="flex items-center justify-center gap-5 font-mono text-[11.5px]">
          <Link href="/impressum" className="text-slate-400 hover:text-primary transition-colors">
            {tl('impressum.nav_label')}
          </Link>
          <span aria-hidden className="text-slate-700">·</span>
          <Link href="/datenschutz" className="text-slate-400 hover:text-primary transition-colors">
            {tl('datenschutz.nav_label')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
