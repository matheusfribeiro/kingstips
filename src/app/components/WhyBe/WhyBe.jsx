"use client"
import React from 'react'
import styles from './WhyBe.module.css'
import { AiOutlineFund, AiOutlineSketch } from 'react-icons/ai'

import { ImCoinDollar } from 'react-icons/im'

export const WhyBe = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>Por que fazer parte do canal GRATUITO</h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <AiOutlineFund className={styles.icon} />
          <p>Conheça a metodologia de quem já está há 4 anos ganhando no mercado.</p>
        </div>
        <div className={styles.box}>
          <AiOutlineSketch className={styles.icon} />
          <p>Acompanhe as melhores Tips do Futebol.</p>
        </div>
        <div className={styles.box}>
          <ImCoinDollar className={styles.icon} />
          <p>Um serviço totalmente gratuito com análises de alta assertividade que vão te fazer evoluir como apostador.</p>
        </div>
      </div>
    </div>
  )
}


