import Navbar from '../components/Navbar'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
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
<main className="pt-16">
<Hero />
<About />
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
