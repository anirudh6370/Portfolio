import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProcessMarquee from './components/ProcessMarquee'
import ApproachSection from './components/ApproachSection'
import DomainsSection from './components/DomainsSection'
import TechMarquee from './components/TechMarquee'
import TeamSection from './components/TeamSection'
import ProjectsSection from './components/ProjectsSection'
import WhyUsSection from './components/WhyUsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <ProcessMarquee />
        <ApproachSection />
        <DomainsSection />
        <TechMarquee />
        <TeamSection />
        <ProjectsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
