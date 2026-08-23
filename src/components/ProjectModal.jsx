import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import './ProjectCard.css'; // Reuse styles

const ProjectModal = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  const isVideo = project.media && project.media.endsWith('.mp4');

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
          
          <div className="modal-media">
            {isVideo ? (
              <video src={project.media} autoPlay loop muted playsInline className="modal-video" />
            ) : project.media ? (
              <img src={project.media} alt={project.title} className="modal-img" />
            ) : (
              <div className="modal-img-placeholder">
                <span>{project.title}</span>
              </div>
            )}
          </div>
          
          <div className="modal-body">
            <h2 className="modal-title">{project.title}</h2>
            {project.subtitle && <p className="modal-subtitle">{project.subtitle}</p>}
            
            <div className="modal-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            
            <p className="modal-desc">{project.description}</p>
            
            <div className="modal-links">
              {project.links.map((link, idx) => (
                <a key={idx} href={link.url} className="modal-link-btn" target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
