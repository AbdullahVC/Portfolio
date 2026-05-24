import { useTranslations } from 'next-intl';
import type { ArchiveProject } from '@/data/projects';
import { NodeGlyph } from './Icons';

export default function ArchiveCard({ project }: { project: ArchiveProject }) {
  const tp = useTranslations('projects.archive');
  const title   = tp(`${project.slug}.title`);
  const summary = tp(`${project.slug}.summary`);

  const showRight = project.github || project.status;

  return (
    <article className="archive-card group h-full flex flex-col">
      <header className="flex items-start justify-between gap-3 mb-6">
        <NodeGlyph />
        {showRight && (
          project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="archive-card-repo font-mono text-[11px] text-slate-500 tracking-[0.14em] hover:text-primary transition-colors"
            >
              ↗ repo
            </a>
          ) : (
            <span className="font-mono text-[11px] text-slate-600 tracking-[0.14em] uppercase">
              {project.status}
            </span>
          )
        )}
      </header>

      <h4 className="font-sans text-[17px] font-semibold text-slate-100 mb-2 leading-[1.3] tracking-tight">
        {title}
      </h4>

      <p className="flex-1 text-[14px] leading-[1.6] text-slate-400 mb-6">
        {summary}
      </p>

      <p className="font-mono text-[12px] leading-[1.7] text-slate-500 tracking-wider">
        {project.stack.join('  ·  ')}
      </p>
    </article>
  );
}
