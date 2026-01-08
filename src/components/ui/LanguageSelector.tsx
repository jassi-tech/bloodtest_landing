'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/hospitalData';
import styles from './LanguageSelector.module.css';
import { Languages } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  ];

  return (
    <div className={styles.selector}>
      <Languages size={18} className={styles.icon} />
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as Language)}
        className={styles.select}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
