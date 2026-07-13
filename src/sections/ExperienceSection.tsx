import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../data/portfolio';

type ExperienceSectionProps = {
  portfolio: PortfolioData;
};

export function ExperienceSection({ portfolio }: ExperienceSectionProps) {
  return (
    <section id="experience" className="experience-section page-shell" aria-labelledby="experience-title">
      <div className="experience-section__header">
        <SectionHeading eyebrow="02 / Career path" title="Experience" />
        <p className="experience-section__note">From campaigns to products, from execution to leadership.</p>
      </div>
      <div className="experience-list">
        {portfolio.experience.map((item, index) => (
          <motion.article
            className="experience-item"
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.7 }}
          >
            <div className="experience-item__index">0{index + 1}</div>
            <div className="experience-item__period">{item.period}</div>
            <div className="experience-item__main">
              <div className="experience-item__title-row">
                <h3>{item.role}</h3>
                <ArrowUpRight size={22} strokeWidth={1.2} aria-hidden="true" />
              </div>
              <p className="experience-item__company">{item.company}</p>
              <p className="experience-item__summary">{item.summary}</p>
              <div className="experience-item__tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
