import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ShopCollection from './components/ShopCollection';
import EditorialStory from './components/EditorialStory';
import Bestsellers from './components/Bestsellers';
import InteriorLookbook from './components/InteriorLookbook';
import WhyChooseUs from './components/WhyChooseUs';
import DesignJournal from './components/DesignJournal';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <div className="grain-overlay"></div>
      <CustomCursor />
      
      <CartSidebar />
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedCollections />
        <ShopCollection />
        <EditorialStory />
        <Bestsellers />
        <InteriorLookbook />
        <WhyChooseUs />
        <DesignJournal />
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />
    </CartProvider>
  );
}

export default App;
