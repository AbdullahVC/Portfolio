import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';
import { stackCategories, recentStack } from '@/data/stack';

export default function Stack() {
  const t = useTranslations('stack');
  const tNav = useTranslations('nav');

  return (
    <section id="stack" className="snap-section flex flex-col justify-center">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <SectionHeading num="04." title={tNav('stack')} />

        {/* Recent focus strip */}
        <div className="stack-recent mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="font-mono text-[11.5px] text-primary tracking-[0.22em] uppercase">
            // recent focus
          </span>
          <span className="font-mono text-[14px] text-slate-300 tracking-wide">
            {recentStack.join('  ·  ')}
          </span>
        </div>

        {/* Categories — compact inline format, vertically stacked */}
        <div className="space-y-5 mb-10">
          {stackCategories.map((cat) => (
            <div key={cat.id} className="stack-row grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-8 gap-y-2 items-baseline">
              <span className="font-mono text-[12px] text-primary tracking-[0.24em] uppercase">
                // {t(cat.id)}
              </span>
              <span className="font-mono text-[14.5px] text-slate-200 tracking-wide">
                {cat.items.join('  ·  ')}
              </span>
            </div>
          ))}
        </div>

        {/* Footer — real operational meta */}
        <div className="pt-5 border-t border-primary/12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10.5px] text-primary tracking-[0.22em] uppercase">
              // active stack
            </span>
            <span className="font-mono text-[12.5px] text-slate-300 tracking-wide">
              Next.js · React · n8n
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10.5px] text-primary tracking-[0.22em] uppercase">
              // status
            </span>
            <span className="font-mono text-[12.5px] text-slate-300 tracking-wide">
              available for freelance
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10.5px] text-primary tracking-[0.22em] uppercase">
              // region
            </span>
            <span className="font-mono text-[12.5px] text-slate-300 tracking-wide">
              TR · DACH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
