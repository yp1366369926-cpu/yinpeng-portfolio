import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../data/portfolio';

type AboutSectionProps = {
  portfolio: PortfolioData;
};

export function AboutSection({ portfolio }: AboutSectionProps) {
  return (
    <section id="about" className="about-section page-shell" aria-labelledby="about-title">
      <div className="about-section__visual" aria-label="Abstract portrait placeholder">
        <div className="about-section__portrait-glow" />
        <div className="about-section__portrait">
          <span>YP</span>
          <small>VISUAL<br />STUDIES</small>
        </div>
        <span className="about-section__orbit about-section__orbit--one" />
        <span className="about-section__orbit about-section__orbit--two" />
      </div>

      <div className="about-section__copy">
        <SectionHeading eyebrow="01 / Profile" title="About me" />
        <motion.p
          className="about-section__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          {portfolio.about}
        </motion.p>
        <div className="about-section__links">
          <a href={`mailto:${portfolio.contact.email}`}>
            <Mail size={16} aria-hidden="true" /> {portfolio.contact.email}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href={`tel:${portfolio.contact.phone}`}>
            <Phone size={16} aria-hidden="true" /> {portfolio.contact.phone}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <motion.div
        className="about-section__details"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <div className="detail-block">
          <span className="detail-block__label">Education</span>
          <strong>{portfolio.education.period}</strong>
          <span>{portfolio.education.degree} · {portfolio.education.subject}</span>
          <span className="detail-block__muted">{portfolio.education.school}</span>
        </div>
        <div className="detail-block">
          <span className="detail-block__label">Recognition</span>
          {portfolio.awards.map((award) => <span key={award}>{award}</span>)}
        </div>
        <div className="detail-block">
          <span className="detail-block__label">Toolkit</span>
          <div className="skill-pills">
            {portfolio.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
