import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import {WhyBe} from './components/WhyBe/WhyBe'
import Testimonials from './components/Testimonials/Testimonials'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Hero />
        <Tickets />
        <Testimonials />
        <WhyBe />
        <About />
      </main>
      <Footer />
    </div>
  )
}
