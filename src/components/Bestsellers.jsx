import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Bestsellers.css';

import bedroomImg from '../assets/bedroom.png';
import lookbookImg from '../assets/lookbook1.png';
import lookbook2Img from '../assets/lookbook2.png';
import heroImg from '../assets/hero.png';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: 'The OSLO Lounge Chair', price: '£1,250', rating: 5, image: lookbook2Img },
  { id: 2, name: 'The NORDIC Dining Table', price: '£2,800', rating: 5, image: lookbookImg },
  { id: 3, name: 'The AURELIA Bed Frame', price: '£3,400', rating: 5, image: bedroomImg },
  { id: 4, name: 'The SIENA Sofa', price: '£4,200', rating: 5, image: heroImg },
];

const Bestsellers = () => {
  const { addToCart } = useCart();
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Horizontal scroll effect
    const totalWidth = sliderRef.current.scrollWidth - window.innerWidth + (window.innerWidth * 0.1);
    
    gsap.to(sliderRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
      }
    });
  }, []);

  return (
    <section className="bestsellers-section section-padding" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Signature Pieces</span>
          <h2 className="title">Bestsellers</h2>
        </div>
      </div>
      
      <div className="slider-container">
        <div className="slider-track" ref={sliderRef}>
          {products.map((product, index) => (
            <div key={product.id} className="product-card hover-target">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="product-actions">
                  <button className="action-btn" aria-label="Add to Wishlist"><Heart size={18} /></button>
                  <button 
                    className="action-btn add-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <span>Add to Cart</span> <Plus size={18} />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-meta">
                  <div className="stars">★★★★★</div>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
