import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css'; // Let's use a scoped CSS file for Hero specifics if needed, or just standard CSS

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-top">
        <span className="hero-name">SANVI SHUKLA</span>
        <span className="hero-year">2026</span>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="title-serif">
            Computer Science <i>graduate</i><br/>
            & aspiring <i>researcher.</i>
          </h1>
          
          <p className="subtitle" style={{ maxWidth: '750px', lineHeight: '1.6' }}>
            I am a recent Computer Science graduate from RGIPT, Amethi, driven by a deep curiosity for Artificial Intelligence and Deep Learning. I am a Mitacs Globalink Research Award recipient and a former research intern at IIT Gandhinagar.
            <br/><br/>
            I am also passionate about open-source development and actively contributing as a Google Summer of Code (GSoC) 2026 contributor. My goal is to build intelligent, accessible, and highly impactful AI systems.
          </p>
          

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
