import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../data/portfolio';

type CapabilitiesSectionProps = {
  capabilities: PortfolioData['capabilities'];
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="page-shell">
        <SectionHeading eyebrow="04 / What I do" title="Capabilities" theme="light" />
        <div className="capabilities-list">
          {capabilities.map((capability, index) => (
            <motion.article
              className="capability-item"
              key={capability.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.07, duration: 0.65 }}
            >
              <span className="capability-item__number">{capability.number}</span>
              <div className="capability-item__main">
                <div className="capability-item__title-row">
                  <h3>{capability.title}</h3>
                  <ArrowUpRight size={23} strokeWidth={1.3} aria-hidden="true" />
                </div>
                <p>{capability.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
