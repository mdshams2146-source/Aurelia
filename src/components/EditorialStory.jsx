import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EditorialStory.css';
import lookbookImg from '../assets/lookbook2.png';

gsap.registerPlugin(ScrollTrigger);

const EditorialStory = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section className="editorial-section section-padding" ref={containerRef}>
      <div className="container">
        <div className="editorial-split">
          <div className="editorial-content">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="editorial-title">
                Crafted with Nature. <br />
                <span className="italic-text">Designed for Life.</span>
              </h2>
              <p className="editorial-text">
                Every piece in our collection is born from a deep respect for natural materials and traditional craftsmanship. We believe that furniture should not just occupy space, but elevate the way you live. Our designs marry Scandinavian minimalism with warm Mediterranean soul, creating objects of quiet luxury that stand the test of time.
              </p>
              <a href="#about" className="btn-secondary hover-target">Our Philosophy</a>
            </motion.div>
          </div>
          
          <div className="editorial-image-col">
            <div className="editorial-img-wrapper">
              <img ref={imgRef} src={lookbookImg} alt="Craftsmanship" />
            </div>
            <div className="editorial-badge">
              <span>Est. 2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="editorial-texture"></div>
    </section>
  );
};

export default EditorialStory;
