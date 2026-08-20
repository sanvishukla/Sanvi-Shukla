import React from 'react';
import { motion } from 'framer-motion';
import gsocImage from '../assets/GSoC.png';
import mitacsImage from '../assets/MITACS.png';
import haixImage from '../assets/HAIx-Final-2.png';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "GSoC 2026 - Open Science Labs",
      location: "Remote",
      role: "GSoC 2026 Contributor",
      duration: "May 2026 - Aug 2026",
      image: gsocImage,
      details: [
        "Project: DU Event Board [Project Repository; Issue/PR Links]",
        "Automated zero-touch data ingestion by architecting a Python ETL pipeline in GitHub Actions that extracts, validates, and syncs Google Sheets via programmatic pull requests.",
        "Established full-stack testing infrastructure by integrating frontend and backend unit tests into the CI/CD pipeline to block regressions and automate coverage reporting.",
        "Developed core platform features, UI enhancements and optimised SEO.",
        "Tools: React, JavaScript, Python, Vite, Pytest, GitHub Actions, CI/CD pipeline"
      ]
    },
    {
      company: "Mitacs- University of New Brunswick, Fredericton",
      location: "New Brunswick, Canada",
      role: "Research Intern",
      duration: "July 2025 - Mar 2026",
      image: mitacsImage,
      details: [
        "Combined AlphaEarth 64-band embeddings, LiDAR canopy height data, and forest inventory data to predict canopy height and basal area across New Brunswick.",
        "Trained LightGBM and PyTorch models for canopy height and developed an attention-based MIL model to handle multiple satellite pixels within each forest plot.",
        "Reached R² of 0.85 for canopy height and 0.90 for basal area, with RMSE of 3.08 m and 3.85 m.",
        "Tools: Python, Google Earth Engine, Compute Canada HPC"
      ]
    },
    {
      company: "HAIx Lab, Indian Institute of Technology, Gandhinagar",
      location: "Gujarat, India",
      role: "Research Intern",
      duration: "May 2024 - Jul 2024",
      image: haixImage,
      details: [
        "Developed HintQT5, a source-code-agnostic framework for real-time contextual hint generation.",
        "Extracted UI hierarchies and spatial-semantic context to construct prompts, then applied fine-tuned Transformers with Q-learning for feedback-driven refinement.",
        "Achieved 88.99, 88.27, 87.81, 87.21, 93.48, and 91.16 across BLEU 1-4, ROUGE-L and METEOR metrics.",
        "Tools: Python, Hugging Face Transformers, Q-learning, Flutter"
      ]
    }
  ];

  return (
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="experience-card"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="exp-header-wrapper">
            {exp.image && (
              <div className="exp-logo-container">
                <img src={exp.image} alt={`${exp.company} logo`} className="exp-logo" />
              </div>
            )}
            <div className="exp-header-content">
              <div className="exp-header">
                <h3 className="exp-company">{exp.company}</h3>
                <span className="exp-location">{exp.location}</span>
              </div>

              <div className="exp-subheader">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-duration">{exp.duration}</span>
              </div>
            </div>
          </div>

          <ul className="exp-details">
            {exp.details.map((detail, i) => {
              // Parse out the [Links] part if it exists in the first bullet to make them look like text or actual links
              if (detail.includes("[Project Repository; Issue/PR Links]")) {
                return (
                  <li key={i}>
                    Project: DU Event Board [
                    <a href="https://github.com/data-umbrella/du-event-board" target="_blank" rel="noreferrer" className="exp-link">Project Repository</a>;{' '}
                    <a href="https://github.com/data-umbrella/du-event-board/issues?q=author%3Asanvishukla" target="_blank" rel="noreferrer" className="exp-link">Issue/PR Links</a>]
                  </li>
                );
              }
              // Bold the "Tools:" prefix
              if (detail.startsWith("Tools:")) {
                return (
                  <li key={i}>
                    <strong>Tools:</strong> {detail.substring(6).trim()}
                  </li>
                );
              }
              return <li key={i}>{detail}</li>;
            })}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
