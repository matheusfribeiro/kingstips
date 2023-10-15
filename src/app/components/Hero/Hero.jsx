import { NeonButton } from '../NeonButton/NeonButton';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBox}>
        <h2>Kings Tips Bets</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis obcaecati magnam itaque adipisci sequi ea, veritatis tempora modi earum incidunt quam quo, eligendi iusto temporibus consequatur mollitia? Obcaecati, ipsum!</h4>
        <NeonButton />
      </div>
      <img className={styles.heroImage} src="/ktheronobgalternate.png" alt="" />
    </section>
  );
};

export default Hero;
