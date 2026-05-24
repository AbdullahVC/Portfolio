import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import ArchiveCard from './ArchiveCard';
import { featuredProjects, archiveProjects } from '@/data/projects';

export default function Work() {
  const t = useTranslations('work');
  const tNav = useTranslations('nav');

  return (
    <section id="work" className="work-snap-container">
      {/* Featured projects — first inner snap stop */}
      <div className="work-snap-child flex flex-col justify-center">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <SectionHeading num="03." title={tNav('work')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Archive — second inner snap stop */}
      <div className="work-snap-child flex flex-col justify-center">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="mb-12 text-center">
            <p className="font-mono text-[11px] text-primary tracking-[0.22em] uppercase mb-3">
              {t('archive_eyebrow')}
            </p>
            <h3 className="font-sans text-[22px] md:text-[24px] font-semibold text-slate-100 tracking-tight">
              {t('archive_heading')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {archiveProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 70}>
                <ArchiveCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
