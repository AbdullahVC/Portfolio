import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '@/data/projects';

export default function Work() {
  const tNav = useTranslations('nav');

  return (
    <section id="work" className="work-snap-container">
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
    </section>
  );
}
