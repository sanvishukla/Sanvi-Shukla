import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, image, links, subtitle }) => {
  return (
    <motion.div 
      className={`project-card ${!image ? 'no-image' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
        <p className="project-desc">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      
      {image && (
        <div className="project-media">
          <img src={image} alt={title} className="project-img" />
        </div>
      )}
      
      <div className="project-links">
        {links.map((link, idx) => (
          <a key={idx} href={link.url} className="project-link" target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
