'use client';

import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}

export default function ServiceCard({ title, description, iconName }: ServiceCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[iconName] || Icons.HelpCircle;

  return (
    <motion.div 
      className={`${styles.card} glass`}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={styles.iconWrapper}>
        <Icon size={32} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
