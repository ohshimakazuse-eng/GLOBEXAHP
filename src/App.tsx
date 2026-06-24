import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {
  Marquee,
  Philosophy,
  Services,
  Approach,
  Stats,
  Company,
  Contact,
} from './components/Sections'

export default function App() {
  return (
    <div className="font-inter">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Approach />
        <Stats />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
