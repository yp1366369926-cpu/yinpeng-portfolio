import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import type { PortfolioData } from '../data/portfolio';

type ContactSectionProps = {
  contact: PortfolioData['contact'];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-section__halo" aria-hidden="true" />
      <div className="page-shell contact-section__inner">
        <motion.p
          className="contact-section__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          05 / Start a conversation
        </motion.p>
        <motion.h2
          id="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.8 }}
        >
          Have a project<br /><span>in mind?</span>
        </motion.h2>
        <motion.p
          className="contact-section__lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: 0.7 }}
        >
          Let&apos;s create something clear, distinctive, and useful.
        </motion.p>
        <div className="contact-section__actions">
          <ContactButton href={`mailto:${contact.email}`} />
          <a className="contact-section__direct-link" href={`mailto:${contact.email}`}><Mail size={17} aria-hidden="true" /> {contact.email}</a>
          <a className="contact-section__direct-link" href={`tel:${contact.phone}`}><Phone size={17} aria-hidden="true" /> {contact.phone}</a>
        </div>
        <div className="contact-section__footer">
          <span>YIN PENG / DESIGN PORTFOLIO</span>
          <a href="#top"><ArrowUp size={16} aria-hidden="true" /> Back to top</a>
        </div>
      </div>
    </section>
  );
}
