import Hero from "../components/hero"
import Services from "../components/services"
import Process from "../components/process"
import Stats from "../components/stats"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
