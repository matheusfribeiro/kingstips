import React from 'react'
import CarouselTestimonial from '../CarouselTestimonial/CarouselTestimonial'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.headline}>Depoimentos dos nossos VIP's</h2>
      <CarouselTestimonial />
    </section>
  )
}

export default Testimonials