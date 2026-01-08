'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './BloodTestForm.module.css';
import { Send } from 'lucide-react';
import SuccessModal from '../ui/SuccessModal';

export default function BloodTestForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      // Reset form if needed or just handle via modal close
    }, 1500);
  };

  return (
    <>
      <section id="blood-test" className={styles.section}>
        <div className={`container`}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.title}>
                {t.bloodTest.title.split(' ').map((word, i) => (
                  i >= 2 ? <span key={i} className="gradient-text">{word} </span> : word + ' '
                ))}
              </h2>
              <p className={styles.description}>
                {t.bloodTest.description}
              </p>
              <ul className={styles.features}>
                {t.bloodTest.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <motion.form 
              className={`${styles.form} glass`}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.inputGroup}>
                <label htmlFor="name">{t.bloodTest.form.name}</label>
                <input type="text" id="name" required placeholder={t.bloodTest.form.placeholderName} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">{t.bloodTest.form.phone}</label>
                <input type="tel" id="phone" required placeholder={t.bloodTest.form.placeholderPhone} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">{t.bloodTest.form.email}</label>
                <input type="email" id="email" placeholder={t.bloodTest.form.placeholderEmail} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="test">{t.bloodTest.form.testType}</label>
                <select id="test" required>
                  <option value="">{t.bloodTest.form.placeholderSelect}</option>
                  {t.bloodTestTypes.map(test => (
                    <option key={test.id} value={test.id}>{test.name}</option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="date">{t.bloodTest.form.date}</label>
                <input type="date" id="date" required />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
                {loading ? t.bloodTest.form.processing : (
                  <>
                    {t.bloodTest.form.submit} <Send size={18} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <SuccessModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title={t.bloodTest.form.successTitle}
        subtitle={t.bloodTest.form.successSubtitle}
      />
    </>
  );
}
