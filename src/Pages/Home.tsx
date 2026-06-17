import Navbar from '../components/Navbar'
import SocialSidebar from '../components/SocialSidebar'
import BackToTop from '../components/BackToTop'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import Experience from '../Sections/Experience'
import Skills from '../Sections/Skills'
import Projects from '../Sections/Projects'
import Features from '../Sections/Features'
import Approach from '../Sections/Approach'
import Certificates from '../Sections/Certificates'
import Contact from '../Sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <BackToTop />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Features />
        <Projects />
        <Approach />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}
