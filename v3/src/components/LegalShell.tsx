import { Link } from '@/i18n/routing';

export default function LegalShell({
  title,
  backLabel,
  updatedLabel,
  children,
}: {
  title: string;
  backLabel: string;
  updatedLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page min-h-screen bg-bg text-slate-300">
      {/* Bu sayfada global mandatory snap'i kapat (uzun metin akışı için) */}
      <style>{`html{scroll-snap-type:none !important;}`}</style>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[13px] text-primary hover:underline mb-12"
        >
          <span aria-hidden>←</span>
          {backLabel}
        </Link>

        <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-slate-100 tracking-tight mb-3">
          {title}
        </h1>
        {updatedLabel ? (
          <p className="font-mono text-[12px] text-slate-500 mb-12">{updatedLabel}</p>
        ) : (
          <div className="mb-12" />
        )}

        <div className="legal-content space-y-8 text-[15px] leading-[1.75] text-slate-400">
          {children}
        </div>
      </div>
    </main>
  );
}
