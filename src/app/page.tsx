import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import BloodTestForm from '@/components/home/BloodTestForm';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <ServicesSection />
      <BloodTestForm />
      <Footer />
    </main>
  );
}
