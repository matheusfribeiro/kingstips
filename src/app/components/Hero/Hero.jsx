import { NeonButton } from '../NeonButton/NeonButton';
import styles from './Hero.module.css'
import localFont from "next/font/local"

const heroFont = localFont({src: "../../../../fonts/devinne-swash.regular.ttf"})

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 style={heroFont.style}>Kings Tips Bets</h1>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBox}>
          <h4>
            se você quer lucrar todos os dias com futebol ao vivo, você está no
            lugar certo!
          </h4>
          <p>
            Me chamo Luciano Pacheco, mais conhecido como KingsTips e vou te
            ajudar com isso de forma <span>100% GRATUITA</span>.
          </p>
          <NeonButton />
        </div>
        <img
          className={styles.heroImage}
          src="/images/ktheronobgalternate.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
