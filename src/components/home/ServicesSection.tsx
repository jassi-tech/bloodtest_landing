'use client';

import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t.services.title.split(' ').map((word, i) => (
              i === 0 ? <span key={i}>{word} </span> : <span key={i} className="gradient-text">{word} </span>
            ))}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.services.subtitle}
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {t.services.items.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
