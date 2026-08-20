import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Experience.css';

const Publications = () => {
  return (
    <div className="experience-list">
      <motion.div
        className="experience-card"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        style={{ paddingBottom: '1rem' }}
      >
        <h3 className="exp-company" style={{ fontSize: '1.2rem', lineHeight: '1.4', marginBottom: '0.5rem' }}>
          Adaptive Text Inputs: Contextual Hint-Text Generation for Enhancing Mobile Apps Accessibility using Text-to-Text Transformer Language Models and Q-learning
        </h3>

        <div className="exp-subheader" style={{ marginBottom: '1rem', alignItems: 'center' }}>
          <span className="exp-role" style={{ fontWeight: 'normal', color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            <strong style={{ color: 'var(--color-text)' }}>Sanvi Shukla</strong>, Dr. Yogesh Kumar Meena
          </span>
          <span className="exp-duration" style={{ fontWeight: '600', color: 'var(--color-accent)', padding: '0.2rem 0.6rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '4px', fontSize: '0.85rem' }}>
            IndiaHCI 2025
          </span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a
            href="https://dl.acm.org/doi/10.1145/3768633.3770136"
            target="_blank"
            rel="noreferrer"
            className="exp-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontWeight: '500',
              fontSize: '0.9rem'
            }}
          >
            Read Publication <ExternalLink size={14} />
          </a>
          <a
            href="https://github.com/HAIx-Lab/HintQT5"
            target="_blank"
            rel="noreferrer"
            className="exp-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontWeight: '500',
              fontSize: '0.9rem'
            }}
          >
            GitHub Repository <Code size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Publications;
