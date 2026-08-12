import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Products from './components/Products';
import Categories from './components/Categories';
import Seminovos from './components/Seminovos';
import Assistencia from './components/Assistencia';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Location from './components/Location';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  // Global intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all reveal elements
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <Categories />
      <Seminovos />
      <Assistencia />
      <Trust />
      <Testimonials />
      <Instagram />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
