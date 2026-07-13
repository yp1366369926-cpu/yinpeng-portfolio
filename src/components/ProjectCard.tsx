import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef, type CSSProperties } from 'react';
import type { ProjectItem } from '../data/portfolio';

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.03]);

  return (
    <div className="project-stack-item" style={{ top: `${index * 28}px` }}>
      <motion.article
        ref={cardRef}
        className="project-card"
        data-testid="project-card"
        style={{ scale, '--project-accent': project.accent } as unknown as CSSProperties}
        aria-labelledby={`project-title-${project.number}`}
      >
        <div className="project-card__topline">
          <div className="project-card__meta">
            <span className="project-card__number">{project.number}</span>
            <span className="project-card__category">{project.category}</span>
          </div>
          <a className="project-card__action" href="#contact">
            View Project <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="project-card__heading">
          <h3 id={`project-title-${project.number}`}>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-card__visuals">
          <div className="project-card__column">
            <div className="project-card__visual project-card__visual--small" style={{ background: project.images[0] }}>
              <span>Interface / 01</span>
            </div>
            <div className="project-card__visual project-card__visual--large" style={{ background: project.images[1] }}>
              <span>Details / 02</span>
            </div>
          </div>
          <div className="project-card__visual project-card__visual--tall" style={{ background: project.images[2] }}>
            <span>System / 03</span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
