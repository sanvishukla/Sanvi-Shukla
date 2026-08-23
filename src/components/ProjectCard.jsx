import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const isVideo = project.media && project.media.endsWith('.mp4');

  return (
    <motion.div 
      className="project-card-wrapper"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
    >
      <div className="project-box">
        <div className="project-box-media">
          {isVideo ? (
            <video src={project.media} autoPlay loop muted playsInline className="project-box-video" />
          ) : project.media ? (
            <img src={project.media} alt={project.title} className="project-box-img" />
          ) : (
            <div className="project-box-placeholder">
              <span>No Preview Available</span>
            </div>
          )}
          <div className="project-box-overlay">
            <span className="project-box-hint">Click to view details</span>
          </div>
        </div>
      </div>
      <div className="project-card-info">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-date">{project.subtitle}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
