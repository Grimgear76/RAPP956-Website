import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import About from './components/About'
import ProgramComponents from './components/ProgramComponents'
import WhyItWorks from './components/WhyItWorks'
import KeyTopics from './components/KeyTopics'
import Speakers from './components/Speakers'
import ForTheDistrict from './components/ForTheDistrict'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <About />
        <ProgramComponents />
        <WhyItWorks />
        <KeyTopics />
        <Speakers />
        <ForTheDistrict />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
