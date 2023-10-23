import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaTelegram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href='#' className={styles.footerLogo}>
          <img src="kingstipslogo.png" alt="Company Logo" />
          <h3>Kings Tips</h3>
        </a>
        <div className={styles.footerSocial}>
          <a href="https://www.instagram.com/kingstips_oficial/" target='_blank' className="social-icon">
            <FaInstagram />
            <h6>Nos siga no Instagram</h6>
          </a>
          <a href="https://t.me/+DCah_awo2zo3Y2Ux" target='_blank' className="social-icon">
            <FaTelegram />
            <h6>Canal Gratuito do Telegram</h6>
          </a>
          <a href="https://wa.me/5587996797913" target='_blank' className="social-icon">
            <FaWhatsapp />
            <h6>Nos mande uma mensagem no WhatsApp</h6>
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} Kings Tips. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer