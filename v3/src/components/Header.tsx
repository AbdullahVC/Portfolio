'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { isOnlineNow } from '@/lib/status';

const NAV_ITEMS = [
  { num: '01.', key: 'about' as const, href: '#about' },
  { num: '02.', key: 'services' as const, href: '#services' },
  { num: '03.', key: 'work' as const, href: '#work' },
  { num: '04.', key: 'stack' as const, href: '#stack' },
  { num: '05.', key: 'contact' as const, href: '#contact' }
];

const LOCALES = ['tr', 'de', 'en'] as const;

export default function Header() {
  const t = useTranslations('nav');
  const [active, setActive] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Hero dahil tüm bölümleri gözle — hero'ya geri çıkıldığında aktif resetlensin
    const ids = ['hero', ...NAV_ITEMS.map((i) => i.key)];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Viewport ortasındaki ince şerit — hangi section o şerite değiyorsa aktif
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hero navbar'da yok → underline gözükmesin
            setActive(entry.target.id === 'hero' ? '' : entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close menu on Escape or when viewport widens past lg
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 py-4 backdrop-blur bg-bg/85 border-b border-transparent">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-6">
          <div className="relative group">
            <a id="nav-logo" href="#hero" className="font-sans font-semibold text-xl text-primary tracking-tight">
              {t('logo')}
            </a>
            <a
              href="https://coskuntech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block absolute left-0 top-full mt-1.5 font-mono text-[10px] text-slate-500 hover:text-primary tracking-[0.22em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              coskuntech
            </a>
          </div>

          <ul className="hidden lg:flex gap-8 items-center list-none">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.key;
              return (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={`group relative inline-block font-mono text-[13px] transition-colors ${
                      isActive ? 'text-primary' : 'text-slate-100 hover:text-primary'
                    }`}
                  >
                    <span className="text-primary mr-1">{item.num}</span>
                    {t(item.key)}
                    <span
                      className={`pointer-events-none absolute left-0 -bottom-1 h-px w-full bg-primary origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <LangSwitcher />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              className="hidden lg:inline-flex font-mono text-[12px] sm:text-[13px] px-3 sm:px-4 py-2 sm:py-2.5 border border-primary rounded text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
            >
              {t('resume')}
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 border border-primary/40 rounded text-primary hover:bg-primary/10 transition-colors"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel — slides down below the sticky nav */}
      <div
        className={`lg:hidden fixed inset-x-0 z-40 bg-bg/95 backdrop-blur border-b border-primary/15 transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ top: 'var(--header-h)' }}
      >
        <ul className="max-w-[1300px] mx-auto px-5 sm:px-8 py-4 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-3 py-3 font-mono text-[15px] text-slate-100 hover:text-primary transition-colors"
              >
                <span className="text-primary">{item.num}</span>
                {t(item.key)}
              </a>
            </li>
          ))}
          <li className="pt-4 mt-2 border-t border-primary/15">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
              className="inline-flex font-mono text-[13px] px-4 py-2.5 border border-primary rounded text-primary hover:bg-primary/10 transition-colors"
            >
              {t('resume')}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

function LangSwitcher() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-1 items-center font-mono text-[13px] list-none">
      {LOCALES.map((loc, i) => (
        <li key={loc} className="flex items-center">
          <Link
            href={pathname}
            locale={loc}
            className="text-slate-300 hover:text-primary px-1.5 sm:px-2 py-1 transition-colors uppercase"
          >
            {loc}
          </Link>
          {i < LOCALES.length - 1 && <span className="text-slate-500">·</span>}
        </li>
      ))}
      <li className="hidden sm:flex items-center pl-2">
        <span className="text-slate-500 mr-3">·</span>
        <OnlineStatus />
      </li>
    </ul>
  );
}

function OnlineStatus() {
  const t = useTranslations('nav');
  const [online, setOnline] = useState<boolean>(true);

  useEffect(() => {
    const update = () => setOnline(isOnlineNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-slate-300">
      <span
        className="inline-block w-[7px] h-[7px] rounded-full"
        style={{ backgroundColor: online ? '#22c55e' : '#ef4444' }}
        aria-hidden="true"
      />
      {online ? t('status_online') : t('status_offline')}
    </span>
  );
}
