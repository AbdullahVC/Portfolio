'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  // Sadece sayfa biraz scroll edildiğinde göster, hero'dayken gizli kalsın
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Sayfanın başına dön"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40
        flex items-center justify-center w-11 h-11 rounded-full
        border border-slate-700/60 bg-bg/40 backdrop-blur
        text-slate-300/50
        transition-all duration-300
        hover:text-primary hover:border-primary hover:bg-bg/80 hover:-translate-y-1
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-2'}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
