import React from 'react';
import { motion } from 'framer-motion';
import './DesignJournal.css';
import lookbookImg from '../assets/lookbook1.png';
import lookbook2Img from '../assets/lookbook2.png';
import bedroomImg from '../assets/bedroom.png';

const articles = [
  { id: 1, category: 'Interior Styling', title: 'The Art of Minimalist Living Spaces', image: lookbookImg, date: 'Oct 12, 2026' },
  { id: 2, category: 'Materials', title: 'Why Sustainable Wood Matters', image: bedroomImg, date: 'Sep 28, 2026' },
  { id: 3, category: 'Trends', title: 'Bringing Warmth to Modern Architecture', image: lookbook2Img, date: 'Sep 15, 2026' },
];

const DesignJournal = () => {
  return (
    <section className="journal-section section-padding" id="journal">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Stories</span>
          <h2 className="title">Design Journal</h2>
        </div>
        
        <div className="journal-grid">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              className="journal-card hover-target"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="journal-img-wrapper">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="journal-content">
                <div className="journal-meta">
                  <span className="journal-category">{article.category}</span>
                  <span className="journal-date">{article.date}</span>
                </div>
                <h3 className="journal-title">{article.title}</h3>
                <div className="animated-underline"></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignJournal;
