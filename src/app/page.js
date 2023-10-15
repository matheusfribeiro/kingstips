import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Testimonials />
    </main>
  )
}
