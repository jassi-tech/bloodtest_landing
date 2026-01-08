'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  const { title, subtitle, cta, secondaryCta } = t.hero;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            {title.split(' ').map((word, i) => (
              i === 1 ? <span key={i} className="gradient-text">{word} </span> : word + ' '
            ))}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <a href="#blood-test" className="btn btn-primary">{cta}</a>
            <a href="#services" className="btn btn-secondary">{secondaryCta}</a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageDecoration}></div>
          <Image 
            src="/hero.png" 
            alt="Hospital Hero" 
            width={600} 
            height={500} 
            className={styles.image}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
