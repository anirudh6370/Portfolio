import AuroraBackground from './components/AuroraBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import TeamSection from './components/TeamSection'
import DomainsSection from './components/DomainsSection'
import ProjectsSection from './components/ProjectsSection'
import WhyUsSection from './components/WhyUsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <TeamSection />
        <DomainsSection />
        <ProjectsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
