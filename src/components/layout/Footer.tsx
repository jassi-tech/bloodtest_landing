'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  const { address, phone, email, socials, tagline, quickLinks, contactUs, followUs, rights } = t.footer;

  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            Care<span className="gradient-text">Pulse</span>
          </Link>
          <p className={styles.tagline}>{tagline}</p>
        </div>

        <div className={styles.links}>
          <h4>{quickLinks}</h4>
          {t.navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.contact}>
          <h4>{contactUs}</h4>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>

        <div className={styles.social}>
          <h4>{followUs}</h4>
          <div className={styles.socialIcons}>
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} {rights}</p>
      </div>
    </footer>
  );
}
