'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';

type Phase = 'init' | 'fly' | 'dissolve' | 'hold' | 'shrink' | 'fade' | 'done';

function getWords(locale: string) {
  const isTr = locale === 'tr';
  return [
    { first: 'A', rest: 'bdullah', init: 'translate(-100vw, 0)' },
    { first: 'V', rest: '.',        init: 'translate(0, -100vh)' },
    { first: isTr ? 'Ç' : 'C', rest: isTr ? 'oşkun' : 'oskun', init: 'translate(100vw, 0)' },
  ];
}

/* Per-letter retraction stagger (ms between adjacent letters). */
const LETTER_STAGGER = 55;
const LETTER_FADE    = 320;

/* Easings */
const EASE      = 'cubic-bezier(0.645, 0.045, 0.355, 1)';   // smooth, structural
const SOFT_EASE = 'cubic-bezier(0.25, 0.1, 0.25, 1)';       // gentle in/out

export default function IntroLoader() {
  const locale = useLocale();
  const words = getWords(locale);
  const [phase, setPhase] = useState<Phase>('init');
  const [shrinkTransform, setShrinkTransform] = useState('translate(-44vw, -44vh) scale(0.22)');
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTimeout(() => setPhase('done'), 400);
      return;
    }

    document.body.style.overflow = 'hidden';

    const timers = [
      // fly: words slide + fade in from off-screen (720ms transition)
      setTimeout(() => setPhase('fly'), 60),

      // dissolve: letters retract right-to-left toward the anchor
      setTimeout(() => setPhase('dissolve'), 1200),

      // hold: capture geometry of the now-compact "AVC" form
      setTimeout(() => {
        const navLogo = document.getElementById('nav-logo');
        const group   = groupRef.current;

        if (navLogo && group) {
          const nav   = navLogo.getBoundingClientRect();
          const grp   = group.getBoundingClientRect();

          const dx    = (nav.left + nav.width  / 2) - (grp.left + grp.width  / 2);
          const dy    = (nav.top  + nav.height / 2) - (grp.top  + grp.height / 2);
          const scale = nav.height / grp.height;

          setShrinkTransform(`translate(${dx}px, ${dy}px) scale(${scale})`);
        }

        setPhase('hold');
      }, 2150),

      // shrink: smooth glide to navbar logo (720ms)
      setTimeout(() => setPhase('shrink'), 2330),

      // fade out loader (300ms)
      setTimeout(() => setPhase('fade'), 3050),

      setTimeout(() => setPhase('done'), 3370),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (phase === 'done') document.body.style.overflow = '';
  }, [phase]);

  if (phase === 'done') return null;

  const isFlying    = phase !== 'init';
  const isDissolved = phase === 'dissolve' || phase === 'hold' || phase === 'shrink' || phase === 'fade';
  const isShrunk    = phase === 'shrink' || phase === 'fade';
  const isFading    = phase === 'fade';

  const letterBase = {
    display:       'inline-block',
    fontFamily:    'var(--font-sans)',
    fontWeight:    600,
    fontSize:      'clamp(2.2rem, 8vw, 5rem)',
    lineHeight:    1,
    letterSpacing: '-0.02em',
    color:         'var(--color-primary)',
    verticalAlign: 'baseline',
  } as const;

  return (
    <div
      aria-hidden="true"
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9999,
        backgroundColor: 'var(--color-bg)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        opacity:          isFading ? 0 : 1,
        transition:       isFading ? `opacity 300ms ${SOFT_EASE}` : 'none',
        pointerEvents:    isFading ? 'none' : 'all',
        padding:          '0 1rem',
      }}
    >
      <div
        ref={groupRef}
        style={{
          display:         'flex',
          alignItems:      'baseline',
          gap:             isDissolved ? '0.04em' : '0.5em',
          transformOrigin: 'center center',
          transform:       isShrunk ? shrinkTransform : 'translate(0, 0) scale(1)',
          transition:      [
            isShrunk ? `transform 720ms ${EASE}` : '',
            `gap 520ms ${SOFT_EASE} 380ms`,
          ].filter(Boolean).join(', '),
          whiteSpace: 'nowrap',
        }}
      >
        {words.map(({ first, rest, init }) => (
          <div
            key={first}
            style={{
              display:    'inline-flex',
              alignItems: 'baseline',
              opacity:    isFlying ? 1 : 0,
              transform:  isFlying ? 'translate(0, 0)' : init,
              transition: isFlying && !isShrunk
                ? `transform 720ms ${EASE}, opacity 720ms ${SOFT_EASE}`
                : 'none',
            }}
          >
            <span style={letterBase}>{first}</span>
            {Array.from(rest).map((char, i, arr) => {
              // rightmost letter retracts first, leftmost (closest to anchor) last
              const delay = (arr.length - 1 - i) * LETTER_STAGGER;
              return (
                <span
                  key={i}
                  style={{
                    ...letterBase,
                    overflow:   'hidden',
                    opacity:    isDissolved ? 0 : 1,
                    maxWidth:   isDissolved ? '0' : '1.2em',
                    transform:  isDissolved ? 'translateX(-0.15em)' : 'translateX(0)',
                    transition: `opacity ${LETTER_FADE}ms ${SOFT_EASE} ${delay}ms, max-width ${LETTER_FADE}ms ${SOFT_EASE} ${delay}ms, transform ${LETTER_FADE}ms ${SOFT_EASE} ${delay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
