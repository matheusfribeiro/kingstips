"use client"
import React from 'react'
import styles from './WhyBe.module.css'
import { AiOutlineFund, AiOutlineSketch } from 'react-icons/ai'
import { BsTelegram } from "react-icons/bs";
import { ImCoinDollar } from 'react-icons/im'

export const WhyBe = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.headline}>Por que fazer parte do canal GRATUITO</h2>
      <div className={styles.boxes}>
        <div data-aos="zoom-in-right" className={styles.box}>
          <AiOutlineFund className={styles.icon} />
          <p>Conheça a metodologia de quem já está há 8 anos ganhando no mercado.</p>
        </div>
        <div data-aos="zoom-in-down" className={styles.box}>
          <AiOutlineSketch className={styles.icon} />
          <p>Acompanhe as melhores Tips do Futebol.</p>
        </div>
        <div data-aos="zoom-in-left" className={styles.box}>
          <ImCoinDollar className={styles.icon} />
          <p>Um serviço totalmente gratuito com análises de alta assertividade que vão te fazer evoluir como apostador.</p>
        </div>
      </div>
      <div data-aos="zoom-in-up" className={styles.buttonBox}>
        <a href="https://t.me/+DCah_awo2zo3Y2Ux" target='_blank'>
          <div className={styles.buttonWrapper}>
            <BsTelegram className={styles.iconTlg} />
            <span>Entre no grupo agora!</span>
          </div>
        </a>
      </div>
    </section>
  )
}


