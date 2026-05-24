import { Fragment, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import type { FeaturedProject, ProjectIcon } from '@/data/projects';
import {
  GithubGlyph,
  WorkflowGlyph,
  DashboardGlyph,
  GlobeGlyph,
} from './Icons';

const ICON_MAP: Record<ProjectIcon, (props: { size?: number; className?: string }) => ReactNode> = {
  workflow: WorkflowGlyph,
  dashboard: DashboardGlyph,
  globe: GlobeGlyph,
};

export default function ProjectCard({ project }: { project: FeaturedProject }) {
  const t = useTranslations('work');
  const tp = useTranslations('projects.featured');
  const Icon = project.icon ? ICON_MAP[project.icon] : null;

  const title       = tp(`${project.slug}.title`);
  const category    = tp(`${project.slug}.category`);
  const description = tp(`${project.slug}.description`);

  return (
    <article className="project-card group h-full">
      {/* Preview — top, screenshot or operational placeholder */}
      <div className="project-card-preview relative w-full aspect-[16/11] overflow-hidden border border-primary/12">
        <div className="project-card-bg" />

        {project.previewImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={title}
              className="project-card-img"
            />
            <div className="project-card-overlay" aria-hidden="true" />
          </>
        ) : (
          <CardPlaceholder slug={project.slug} status={project.status} meta={project.meta} />
        )}
      </div>

      {/* Info — bottom, flex column so links sit at bottom regardless of description length */}
      <div className="project-card-info flex flex-col flex-1 border border-t-0 border-primary/12 px-6 py-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11px] text-primary tracking-[0.22em] uppercase">
            {category || t('eyebrow')}
          </span>
          <span className="card-status-badge">
            <span className="ops-pulse" aria-hidden="true" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Title row — icon + title */}
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <span className="project-card-icon text-primary/75" aria-hidden="true">
              <Icon size={18} />
            </span>
          )}
          <h3 className="font-sans text-[22px] md:text-[24px] font-semibold text-slate-100 leading-[1.2] tracking-tight">
            {title}
          </h3>
        </div>

        {/* Description — grows to fill remaining space */}
        <p className="flex-1 text-[15px] leading-[1.6] text-slate-300 mb-5">
          {description}
        </p>

        <p className="font-mono text-[12.5px] leading-[1.85] text-slate-500 mb-5">
          {project.stack.join('  ·  ')}
        </p>

        {/* Link row — always at bottom of card */}
        <div className="flex gap-5 items-center font-mono text-[12.5px] tracking-wider min-h-[18px]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link inline-flex items-center gap-1.5"
            >
              <span aria-hidden="true">↗</span>
              {t('live')}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link inline-flex items-center gap-1.5"
            >
              <GithubGlyph size={13} />
              {t('github')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* Operational placeholder for cards without a screenshot */
function CardPlaceholder({
  slug,
  status,
  meta,
}: {
  slug: string;
  status: string;
  meta?: { key: string; value: string }[];
}) {
  return (
    <div className="absolute inset-0 flex flex-col font-mono text-slate-300">
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-primary/10">
        <span className="text-[10px] text-slate-500 tracking-[0.16em]">
          {`> ${slug}`}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="ops-pulse" aria-hidden="true" />
          <span className="text-[9.5px] text-primary tracking-[0.22em] uppercase">
            {status}
          </span>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-5">
        {meta && meta.length > 0 && (
          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 text-[11px]">
            {meta.map((m) => (
              <Fragment key={m.key}>
                <dt className="text-slate-500 tracking-[0.14em]">{m.key}</dt>
                <dd className="text-slate-300 tracking-[0.14em] text-right">
                  {m.value}
                </dd>
              </Fragment>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}
