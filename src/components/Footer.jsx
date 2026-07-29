import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">AURELIA</a>
            <p>Objects of timeless living. Handcrafted for the modern home.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about" className="hover-target">About Us</a></li>
                <li><a href="#sustainability" className="hover-target">Sustainability</a></li>
                <li><a href="#careers" className="hover-target">Careers</a></li>
                <li><a href="#stores" className="hover-target">Store Locator</a></li>
              </ul>
            </div>
            
            <div className="link-col">
              <h4>Collections</h4>
              <ul>
                <li><a href="#living" className="hover-target">Living Room</a></li>
                <li><a href="#bedroom" className="hover-target">Bedroom</a></li>
                <li><a href="#dining" className="hover-target">Dining</a></li>
                <li><a href="#decor" className="hover-target">Decor</a></li>
              </ul>
            </div>
            
            <div className="link-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact" className="hover-target">Contact Us</a></li>
                <li><a href="#shipping" className="hover-target">Shipping & Returns</a></li>
                <li><a href="#faq" className="hover-target">FAQ</a></li>
                <li><a href="#care" className="hover-target">Product Care</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aurelia. All rights reserved.</p>
          <div className="social-links">
            <a href="#instagram" className="hover-target">Instagram</a>
            <a href="#pinterest" className="hover-target">Pinterest</a>
            <a href="#facebook" className="hover-target">Facebook</a>
            <a href="#youtube" className="hover-target">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
