import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import type { PortfolioData } from '../data/portfolio';

type HeroSectionProps = {
  portfolio: PortfolioData;
};

export function HeroSection({ portfolio }: HeroSectionProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__grid" aria-hidden="true" />
      <div className="hero-section__orb hero-section__orb--one" aria-hidden="true" />
      <div className="hero-section__orb hero-section__orb--two" aria-hidden="true" />
      <div className="hero-section__orb hero-section__orb--three" aria-hidden="true" />

      <div className="page-shell hero-section__inner">
        <motion.nav
          className="site-nav"
          aria-label="Primary navigation"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a className="site-nav__brand" href="#top" aria-label="Back to top">YP<span>/</span>26</a>
          <div className="site-nav__links">
            {portfolio.navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
          <a className="site-nav__availability" href={`mailto:${portfolio.contact.email}`}>
            <span className="status-dot" aria-hidden="true" /> Available for select projects
          </a>
        </motion.nav>

        <div className="hero-section__content">
          <motion.p
            className="hero-section__kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Visual / UI / Brand Designer
          </motion.p>
          <div className="hero-heading-wrap">
            <motion.h1
              id="hero-title"
              className="hero-heading hero-heading--hero"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Hi, I&apos;m<br />{portfolio.identity.displayName}
            </motion.h1>
          </div>
          <div className="hero-section__bottom">
            <motion.p
              className="hero-section__statement"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {portfolio.identity.statement}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              <ContactButton href="#contact" />
            </motion.div>
          </div>
        </div>

        <a className="hero-section__scroll" href="#about">
          <span>Scroll to explore</span>
          <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
