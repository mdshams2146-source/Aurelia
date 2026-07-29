import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedCollections.css';
import bedroomImg from '../assets/bedroom.png';
import lookbookImg from '../assets/lookbook1.png';

const collections = [
  { id: 1, name: 'Living Room', image: lookbookImg },
  { id: 2, name: 'Bedroom', image: bedroomImg },
  { id: 3, name: 'Dining', image: lookbookImg },
];

const FeaturedCollections = () => {
  return (
    <section className="collections-section section-padding" id="collections">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Collections</span>
          <h2 className="title">Curated Spaces</h2>
        </motion.div>
        
        <div className="collections-grid">
          {collections.map((item, index) => (
            <motion.div 
              key={item.id}
              className="collection-card hover-target"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="collection-img-wrapper">
                <img src={item.image} alt={item.name} />
                <div className="collection-overlay">
                  <span className="explore-text">Explore</span>
                </div>
              </div>
              <h3 className="collection-name">{item.name}</h3>
              <div className="animated-underline"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
