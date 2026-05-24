'use client';

import { useEffect, useState } from 'react';

export default function StatusLine() {
  const [time, setTime] = useState<string>('--:--');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <p
        className="reveal mt-4 font-mono text-[11px] text-slate-700 tracking-[0.2em] uppercase"
        style={{ ['--i' as string]: 6 }}
      >
        <span suppressHydrationWarning>LOCAL {time}</span>
        <span className="mx-2 text-slate-700">·</span>
        <span>STATUS ONLINE</span>
      </p>
      <p
        className="reveal mt-1.5 font-mono text-[10.5px] text-slate-700 tracking-[0.18em]"
        style={{ ['--i' as string]: 7 }}
      >
        operated under coskuntech
      </p>
    </>
  );
}
