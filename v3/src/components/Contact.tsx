import { useTranslations } from 'next-intl';
import { MailGlyph, LinkedinGlyph, GithubGlyph } from './Icons';

function WhatsappGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 0 0-6.8 12.16L0 16l3.92-1.17A8 8 0 1 0 8 0zm4.46 11.3c-.19.54-.92.99-1.51 1.07-.41.05-.95.07-3.18-.85-2.65-1.09-4.34-3.74-4.47-3.92-.13-.18-1.06-1.41-1.06-2.69 0-1.28.67-1.9.91-2.16.23-.25.51-.32.68-.32h.49c.16 0 .37-.06.58.44.22.51.74 1.78.8 1.91.06.13.1.28.02.46-.08.17-.12.28-.24.43-.12.16-.25.35-.36.46-.12.13-.24.26-.1.5.14.25.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.13.38.11.52-.07.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.21.08 1.36.64 1.59.76.23.12.38.18.44.28.06.1.06.59-.13 1.14z"/>
    </svg>
  );
}

export default function Contact() {
  const t = useTranslations('contact');
  const tNav = useTranslations('nav');

  return (
    <section id="contact" className="snap-section flex flex-col justify-center">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Header parity with nav */}
        <div className="contact-num flex items-baseline gap-3 mb-10">
          <span className="font-mono text-lg text-primary font-medium">05.</span>
          <span className="font-sans text-2xl md:text-3xl font-semibold text-slate-100 tracking-tight">
            {tNav('contact')}
          </span>
          <span className="contact-header-line" />
        </div>

        {/* Eyebrow */}
        <p className="font-mono text-[11px] text-primary mb-6 tracking-[0.22em] uppercase">
          {t('eyebrow')}
        </p>

        {/* Heading */}
        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-100 mb-6 tracking-tight leading-[1.05]">
          {t('heading')}
        </h2>

        {/* Body */}
        <p className="max-w-[58ch] text-[16px] md:text-[17px] leading-[1.6] text-slate-300 mb-10">
          {t('body')}
        </p>

        {/* Primary channel — mailto with icon */}
        <a
          href="mailto:info@abdullahvcoskun.dev"
          className="contact-cta inline-flex items-center gap-3 font-mono text-[15px] md:text-[17px] tracking-wide"
        >
          <span className="contact-cta-icon" aria-hidden="true">
            <MailGlyph size={18} />
          </span>
          <span>{t('cta')}</span>
        </a>

        {/* Secondary channels — LinkedIn · GitHub · WhatsApp */}
        <div className="contact-channels mt-10">
          <p className="font-mono text-[10.5px] text-primary tracking-[0.22em] uppercase mb-3">
            {t('channels_label')}
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href="https://linkedin.com/in/abdullahvcoskun"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel inline-flex items-center gap-2 font-mono text-[13px] tracking-wider text-slate-200"
            >
              <LinkedinGlyph size={15} />
              <span>{t('channel_linkedin')}</span>
            </a>
            <a
              href="https://github.com/AbdullahVC"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel inline-flex items-center gap-2 font-mono text-[13px] tracking-wider text-slate-200"
            >
              <GithubGlyph size={15} />
              <span>{t('channel_github')}</span>
            </a>
            <a
              href="https://wa.me/905373545793"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel inline-flex items-center gap-2 font-mono text-[13px] tracking-wider text-slate-200"
            >
              <WhatsappGlyph size={15} />
              <span>{t('channel_whatsapp')}</span>
            </a>
          </div>
        </div>

        {/* Studio — CoskunTech identity block */}
        <div className="contact-studio mt-16 pt-6 border-t border-primary/10 max-w-[62ch]">
          <p className="font-mono text-[10.5px] text-primary tracking-[0.22em] uppercase mb-3">
            {t('studio_label')}
          </p>
          <p className="font-mono text-[14px] leading-[1.6] text-slate-200">
            <a
              href="https://coskuntech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-brand text-slate-100 hover:text-primary transition-colors"
            >
              {t('studio_brand')}
            </a>
            <span className="text-slate-400">{t('studio_post')}</span>
          </p>
          <p className="font-mono text-[11.5px] text-slate-500 tracking-[0.06em] mt-2">
            {t('studio_meta')}
          </p>
        </div>
      </div>
    </section>
  );
}
