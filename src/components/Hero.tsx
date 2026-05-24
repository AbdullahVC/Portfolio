import { useTranslations } from 'next-intl';
import StatusLine from './StatusLine';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="relative snap-section flex flex-col justify-center overflow-hidden">
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <p className="reveal font-mono text-sm text-primary mb-6 tracking-wider" style={{ ['--i' as string]: 0 }}>
          {`> ${t('eyebrow')}`}
          <span className="caret" aria-hidden="true" />
        </p>

        <h1
          className="reveal font-sans font-semibold leading-[1.05] tracking-tight text-slate-100 mb-3 text-5xl sm:text-7xl lg:text-[5.25rem]"
          style={{ ['--i' as string]: 1 }}
        >
          {t('name')}
        </h1>

        <p
          className="reveal font-sans font-semibold leading-[1.05] tracking-tight mb-10 text-4xl sm:text-5xl lg:text-[4.5rem]"
          style={{ ['--i' as string]: 2 }}
        >
          <span className="text-slate-500">{t('tagline_pre')}</span>
          <span className="text-primary-400">{t('tagline_accent')}</span>
          <span className="text-slate-100">{t('tagline_post')}</span>
        </p>

        <p className="reveal max-w-[58ch] text-[17px] md:text-[18px] leading-[1.6] mb-12" style={{ ['--i' as string]: 3 }}>
          {t('intro')}
        </p>

        <div className="reveal flex flex-wrap items-center gap-x-8 gap-y-4" style={{ ['--i' as string]: 4 }}>
          <a
            href="#work"
            className="focus-tactical group inline-flex items-center gap-2 font-mono text-base px-9 py-5 border border-primary rounded text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all"
          >
            <span>{t('cta')}</span>
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#contact"
            className="focus-tactical group inline-flex items-center gap-2 font-mono text-base text-slate-300 hover:text-primary transition-colors"
          >
            <span className="border-b border-slate-700 group-hover:border-primary transition-colors pb-0.5">{t('cta_secondary')}</span>
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <p className="reveal mt-8 font-mono text-[13px] text-slate-300 tracking-wide" style={{ ['--i' as string]: 5 }}>
          {(['Next.js', 'AI Workflows', 'Automation', 'Internal Tools'] as const).map((tag, i, arr) => (
            <span key={tag}>
              <span className="hover:text-slate-100 transition-colors cursor-default">{tag}</span>
              {i < arr.length - 1 && <span className="mx-3 text-slate-700">·</span>}
            </span>
          ))}
        </p>

        <StatusLine />
      </div>

      <div
        className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] text-slate-500 tracking-[0.3em] flex flex-col items-center gap-1 pointer-events-none"
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <span>↓</span>
      </div>
    </section>
  );
}
