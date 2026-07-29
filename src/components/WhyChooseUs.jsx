import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, PenTool, Truck } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  { id: 1, icon: <PenTool size={32} strokeWidth={1} />, title: 'Handcrafted Furniture', desc: 'Every piece is meticulously crafted by master artisans using traditional techniques.' },
  { id: 2, icon: <Leaf size={32} strokeWidth={1} />, title: 'Sustainably Sourced Wood', desc: 'We only use FSC-certified timber from responsibly managed European forests.' },
  { id: 3, icon: <ShieldCheck size={32} strokeWidth={1} />, title: 'Lifetime Craftsmanship', desc: 'Built to last generations with an unconditional lifetime guarantee on structural integrity.' },
  { id: 4, icon: <Truck size={32} strokeWidth={1} />, title: 'Free White-Glove Delivery', desc: 'Complimentary premium delivery, assembly, and packaging removal on all orders.' },
];

const WhyChooseUs = () => {
  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Promise</span>
          <h2 className="title">Why Choose Aurelia</h2>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
