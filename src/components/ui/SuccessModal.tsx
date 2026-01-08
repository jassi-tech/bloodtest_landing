'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import styles from './SuccessModal.module.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
}

export default function SuccessModal({ isOpen, onClose, title, subtitle }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className={styles.wrapper}>
            <motion.div 
              className={`${styles.modal} glass`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
            >
              <button className={styles.closeBtn} onClick={onClose}>
                <X size={24} />
              </button>
              
              <div className={styles.content}>
                <div className={styles.iconWrapper}>
                  <CheckCircle size={60} className={styles.icon} />
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                <button className="btn btn-primary" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
                  Got it!
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
