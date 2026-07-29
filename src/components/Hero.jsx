import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';
import heroImg from '../assets/hero.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    gsap.to(imgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Slow zoom effect on load
    gsap.fromTo(imgRef.current, 
      { scale: 1.1 },
      { scale: 1, duration: 2.5, ease: "power3.out" }
    );
  }, []);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 20;
    const yPos = (clientY / window.innerHeight - 0.5) * 20;
    
    gsap.to(imgRef.current, {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: "power2.out"
    });
  };

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section ref={heroRef} className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-bg-wrapper">
        <img ref={imgRef} src={heroImg} alt="Luxury Living Room" className="hero-bg" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={lineVariants} className="text-reveal-wrapper">
            <span className="hero-label">CURATED FOR MODERN LIVING</span>
          </motion.div>
          
          <h1 className="hero-title">
            <motion.div variants={lineVariants} className="text-reveal-wrapper">
              <span>Objects of</span>
            </motion.div>
            <motion.div variants={lineVariants} className="text-reveal-wrapper">
              <span className="italic-text">Timeless Living</span>
            </motion.div>
          </h1>
          
          <motion.div variants={lineVariants} className="text-reveal-wrapper">
            <p className="hero-subtitle">
              Beautiful handcrafted furniture designed to bring warmth, comfort and elegance into every home.
            </p>
          </motion.div>
          
          <motion.div variants={lineVariants} className="hero-buttons">
            <a href="#collections" className="btn-primary hover-target">Explore Collection →</a>
            <a href="#lookbook" className="btn-secondary hover-target">View Lookbook</a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
