import { NeonButton } from '../NeonButton/NeonButton';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBox}>
        <h1>Kings Tips Bets</h1>
        <h4>se você quer lucrar todos os dias com futebol ao vivo, você está no lugar certo!</h4>
        <p>Me chamo Luciano Pacheco, mais conhecido como KingsTips e vou te ajudar com isso de forma <span>100% GRATUITA</span>.</p>
        <NeonButton />
      </div>
      <img className={styles.heroImage} src="/ktheronobgalternate.png" alt="" />
    </section>
  );
};

export default Hero;
