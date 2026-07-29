import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { toggleCart, cartCount } = useCart();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > lastYPos && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastYPos(latest);
  });

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      animate={{ y: isHidden ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">AURELIA</a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#collections">Collections</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#lookbook">Lookbook</a></li>
          <li><a href="#journal">Journal</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        
        <div className="nav-icons">
          <button aria-label="Search"><Search size={20} strokeWidth={1.5} /></button>
          <button aria-label="Wishlist"><Heart size={20} strokeWidth={1.5} /></button>
          <button 
            aria-label="Cart" 
            className="cart-btn" 
            onClick={toggleCart}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
