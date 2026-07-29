import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  { id: 1, text: "Aurelia has completely transformed my living room. The craftsmanship is evident in every detail, and the aesthetic is just breathtaking.", author: "Eleanor Vance", location: "London" },
  { id: 2, text: "I've never experienced furniture quite like this. It perfectly balances minimalist design with incredible warmth and comfort.", author: "James Sterling", location: "New York" },
  { id: 3, text: "The delivery was flawless and the dining table is a true work of art. It has become the centerpiece of our home.", author: "Sophia Rossi", location: "Milan" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="testimonial-container">
          <div className="stars-large">★★★★★</div>
          
          <div className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="testimonial-content"
              >
                <p className="testimonial-text">"{testimonials[current].text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonials[current].author}</h4>
                  <span>{testimonials[current].location}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                className={`dot ${idx === current ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
