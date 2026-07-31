import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ShopCollection.css';

import prodSofa from '../assets/prod_sofa.jpg';
import prodChair from '../assets/prod_chair.jpg';
import prodAccentChair from '../assets/prod_accent_chair.jpg';
import prodWingback from '../assets/prod_wingback.jpg';
import lookbook1 from '../assets/lookbook1.png';
import lookbook2 from '../assets/lookbook2.png';
import bedroomImg from '../assets/bedroom.png';
import heroImg from '../assets/hero.png';

const allShopItems = [
  { id: 101, name: 'The Koti Linen Sofa', price: '£3,200', oldPrice: '£3,800', rating: 5,   reviews: 128, image: prodSofa,   tag: 'Bestseller', category: 'Living Room' },
  { id: 102, name: 'Japandi Boucle Chair', price: '£1,450', oldPrice: null,     rating: 4.8, reviews: 84,  image: prodChair,  tag: 'New',        category: 'Living Room' },
  { id: 103, name: 'Solid Oak Dining Table', price: '£2,800', oldPrice: null,   rating: 4.9, reviews: 210, image: lookbook1,  tag: null,         category: 'Dining' },
  { id: 104, name: 'Aurelia Reading Chair', price: '£1,150', oldPrice: '£1,400', rating: 5,  reviews: 65,  image: lookbook2,  tag: 'Sale',       category: 'Living Room' },
  { id: 105, name: 'Nordic Platform Bed', price: '£3,800', oldPrice: null,       rating: 4.9, reviews: 92,  image: bedroomImg, tag: null,         category: 'Bedroom' },
  { id: 106, name: 'The Siena Grand Sofa', price: '£4,200', oldPrice: null,      rating: 5,   reviews: 47,  image: heroImg,    tag: 'New',        category: 'Living Room' },
  { id: 107, name: 'Minimalist Side Table', price: '£620', oldPrice: '£740',     rating: 4.7, reviews: 155, image: lookbook1,  tag: 'Sale',       category: 'Living Room' },
  { id: 108, name: 'Walnut Bookshelf Unit', price: '£1,900', oldPrice: null,     rating: 4.8, reviews: 38,  image: lookbook2,  tag: null,         category: 'Office' },
  { id: 109, name: 'Bouclé Accent Chair', price: '£980', oldPrice: null,         rating: 4.9, reviews: 73,  image: prodAccentChair, tag: 'New',   category: 'Bedroom' },
  { id: 110, name: 'Travertine Coffee Table', price: '£1,650', oldPrice: null,   rating: 5,   reviews: 29,  image: lookbook1,       tag: null,    category: 'Living Room' },
  { id: 111, name: 'Woven Rattan Daybed', price: '£2,100', oldPrice: '£2,500',   rating: 4.7, reviews: 61,  image: bedroomImg,      tag: 'Sale',  category: 'Outdoor' },
  { id: 112, name: 'Linen Wingback Chair', price: '£1,350', oldPrice: null,      rating: 4.9, reviews: 44,  image: prodWingback,    tag: null,    category: 'Living Room' },
];

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
};

const ShopCollection = () => {
  const { addToCart } = useCart();
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? allShopItems : allShopItems.slice(0, 4);

  return (
    <section className="shop-section section-padding" id="shop">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">The Boutique</span>
          <h2 className="title">Shop The Collection</h2>
        </div>

        <div className="shop-grid">
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="shop-card hover-target"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index < 4 ? index * 0.1 : 0 }}
              >
                <div className="shop-img-wrapper">
                  {item.tag && <span className={`shop-tag tag-${item.tag.toLowerCase()}`}>{item.tag}</span>}
                  <img src={item.image} alt={item.name} />

                  <div className="shop-actions">
                    <button className="shop-btn-circle hover-target" aria-label="Add to Wishlist">
                      <Heart size={20} strokeWidth={1.5} />
                    </button>
                    <button
                      className="shop-btn-pill hover-target"
                      onClick={() => addToCart(item)}
                    >
                      <span>Add to Cart</span>
                      <ShoppingBag size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                <div className="shop-info">
                  <span className="shop-category">{item.category}</span>
                  <h3 className="shop-item-name">{item.name}</h3>
                  <div className="shop-price-row">
                    <p className="shop-item-price">{item.price}</p>
                    {item.oldPrice && <p className="shop-item-old-price">{item.oldPrice}</p>}
                  </div>
                  <div className="shop-reviews">
                    {renderStars(item.rating)}
                    <span className="review-count">({item.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="shop-footer">
          <motion.button
            className="btn-secondary hover-target"
            onClick={() => setShowAll(prev => !prev)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showAll ? 'Show Less ↑' : `View All Furniture (${allShopItems.length}) →`}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;
