import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Hero />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
