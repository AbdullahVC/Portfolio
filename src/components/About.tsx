import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function About() {
  const t = useTranslations('about');
  const focusItems = (t.raw('focus_items') as string[]) ?? [];

  return (
    <section id="about" className="snap-section flex flex-col justify-center">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading num="01." title={t('heading')} />

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-start">

          {/* Text column */}
          <div className="space-y-5 max-w-[560px] text-[17px]">
            <p className="leading-[1.75]">{t('p1')}</p>
            <p className="leading-[1.75]">
              {t('p2_pre')}
              <span className="text-primary">{t('p2_accent')}</span>
              {t('p2_post')}
            </p>
            <p className="leading-[1.75]">{t('p3')}</p>
            <p className="leading-[1.75]">{t('p4')}</p>

            <div className="mt-10">
              <p className="font-mono text-[13px] text-primary mb-4 tracking-wider">{t('focus_label')}</p>
              <ul className="space-y-3 list-none">
                {focusItems.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[15px] text-slate-100 before:content-['▹'] before:text-primary before:mr-2.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile photo — editorial, low-contrast fade */}
          <div className="about-photo hidden md:block relative self-start max-w-[400px] md:justify-self-end mt-5">
            <div className="about-photo-frame relative overflow-hidden z-10">
              <Image
                src="/photo.png"
                alt={t('photo_alt')}
                width={400}
                height={500}
                className="about-photo-img object-cover object-top w-full"
                priority
              />
              <div className="about-photo-veil" aria-hidden="true" />
            </div>
            {/* Offset border accent — softened */}
            <div
              className="about-photo-accent absolute pointer-events-none"
              style={{ inset: '16px -16px -16px 16px' }}
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
