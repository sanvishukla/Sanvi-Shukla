import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, num, title, children }) => {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-top"
    >
      <div className="section-header">
        <span className="section-bg-number"><i>{num}</i></span>
        <span className="section-title-text">
          <i>{typeof title === 'string' ? title.charAt(0) : ''}</i>
          {typeof title === 'string' ? title.slice(1) : title}
        </span>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
