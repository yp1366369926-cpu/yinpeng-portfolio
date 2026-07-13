import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import type { ProjectItem } from '../data/portfolio';

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="page-shell">
        <div className="projects-section__header">
          <SectionHeading eyebrow="03 / Selected work" title="Selected Projects" />
          <p>Scroll through a selection of directions, systems, and visual experiments.</p>
        </div>
        <motion.div
          className="project-marquee"
          aria-hidden="true"
          initial={{ x: 0 }}
          whileInView={{ x: '-8%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {[...projects, ...projects].map((project, index) => <span key={`${project.number}-${index}`}>{project.category}</span>)}
        </motion.div>
        <div className="projects-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
