import { portfolio } from './data/portfolio';
import { AboutSection } from './sections/AboutSection';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';

function App() {
  return (
    <main id="top" className="site-main">
      <HeroSection portfolio={portfolio} />
      <AboutSection portfolio={portfolio} />
      <ExperienceSection portfolio={portfolio} />
      <ProjectsSection projects={portfolio.projects} />
      <CapabilitiesSection capabilities={portfolio.capabilities} />
      <ContactSection contact={portfolio.contact} />
    </main>
  );
}

export default App;
