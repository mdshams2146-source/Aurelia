import React from 'react';
import { motion } from 'framer-motion';
import './InteriorLookbook.css';
import lookbookImg from '../assets/lookbook1.png';
import lookbook2Img from '../assets/lookbook2.png';
import bedroomImg from '../assets/bedroom.png';

const lookbookImages = [
  { id: 1, img: lookbookImg, height: '600px' },
  { id: 2, img: bedroomImg, height: '400px' },
  { id: 3, img: lookbook2Img, height: '700px' },
  { id: 4, img: lookbookImg, height: '450px' },
];

const InteriorLookbook = () => {
  return (
    <section className="lookbook-section section-padding" id="lookbook">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Inspiration</span>
          <h2 className="title">Interior Lookbook</h2>
        </div>
        
        <div className="masonry-grid">
          {lookbookImages.map((item, index) => (
            <motion.div 
              key={item.id}
              className="masonry-item hover-target"
              style={{ height: item.height }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
            >
              <img src={item.img} alt={`Lookbook ${item.id}`} />
              <div className="masonry-overlay">
                <span className="explore-text">Explore Space</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="lookbook-btn-wrapper">
          <a href="#more" className="btn-secondary hover-target">View Full Gallery</a>
        </div>
      </div>
    </section>
  );
};

export default InteriorLookbook;
