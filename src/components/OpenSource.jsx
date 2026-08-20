import React from 'react';
import { motion } from 'framer-motion';
import oslImage from '../assets/OSL.png';
// We can reuse Experience CSS classes for consistent layout since the design is identical
import './Experience.css';

const OpenSource = () => {
  const contributions = [
    {
      company: "Open Science Labs",
      location: "",
      role: "",
      duration: "May 2026 - ongoing",
      image: oslImage,
      details: [
        "Project: Hiperhealth [Project Repository; Issue/PR Links]; Mentor: Ivan Ogasawara",
        "Engineered stateful pipeline recovery utilising Parquet checkpointing and resume-on-failure logic to prevent data loss during workflow interruptions.",
        "Developed a multi-agent protocol and prompt compiler using LiteLLM and Pydantic to enforce strictly typed LLM outputs.",
        "Resolved API leakage vulnerabilities by implementing recursive data scrubbing and credential masking middleware via Microsoft Presidio.",
        "Tools: Python, Pydantic, pytest, Pandas, Parquet, LiteLLM, GitHub Actions"
      ]
    }
  ];

  return (
    <div className="experience-list">
      {contributions.map((exp, idx) => (
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

          <ul className="exp-details" style={{ marginTop: '0.5rem' }}>
            {exp.details.map((detail, i) => {
              if (detail.includes("Project: Hiperhealth [Project Repository; Issue/PR Links]")) {
                return (
                  <li key={i}>
                    Project: Hiperhealth [
                    <a href="https://github.com/hiperhealth/hiperhealth" target="_blank" rel="noreferrer" className="exp-link">Project Repository</a>;{' '}
                    <a href="https://github.com/hiperhealth/hiperhealth/issues?q=author%3Asanvishukla" target="_blank" rel="noreferrer" className="exp-link">Issue/PR Links</a>
                    ]
                  </li>
                );
              }
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

export default OpenSource;
