'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} glass`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Care<span className="gradient-text">Pulse</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {t.navigation.map((item) => (
            <Link key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
          <LanguageSelector />
          <ThemeToggle />
          <Link href="#blood-test" className="btn btn-primary">
            {t.hero.cta}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className={styles.mobileActions}>
          <LanguageSelector />
          <ThemeToggle />
          <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`${styles.mobileNav} glass`}>
          {t.navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="#blood-test" 
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            {t.hero.cta}
          </Link>
        </div>
      )}
    </nav>
  );
}
