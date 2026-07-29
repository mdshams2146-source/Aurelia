import React from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section section-padding">
      <div className="container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="newsletter-title">
            Design Inspiration, <br /> Delivered Monthly
          </h2>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="hover-target">Subscribe</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
