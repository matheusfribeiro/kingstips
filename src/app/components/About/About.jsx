import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <div data-aos="flip-right" className={styles.aboutHero}></div>
      <div
        data-aos="fade-left"
        
        className={styles.info}
      >
        <h3>Luciano Pacheco Analista/Suporte/CEO da Kingstips</h3>
        <p>
          Entrou no mercado buscando lucros através de grupos de tipsters
          charlatões que prometeram e não cumpriram, frustrando muito suas
          expectativas, além de se endividar e entrar no poço mais fundo que sua
          vida poderia chegar.
        </p>

        <p>
          Mas foi com o desejo de mudar esse cenário nas apostas esportivas que
          ele a volta por cima, focou e estudou mais a fundo o mercado, e hoje a
          sua vida são as apostas esportivas que já rendeu conquistas materiais
          que eram os seus sonhos e também o benefício de proporcionar o melhor
          para sua família!
        </p>
      </div>
    </section>
  );
}

export default About