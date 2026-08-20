import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Rajiv Gandhi Institute of Petroleum Technology, Amethi",
      location: "Uttar Pradesh, India",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      score: "GPA: 8.81/10",
      duration: "2022 - 2026",
      coursework: "Computer Programming, Data Structures and Algorithms, Artificial Intelligence, Advanced Algorithms, Deep Learning, Generative AI, Computer Vision and Pattern Recognition"
    },
    {
      institution: "Vishwa Bharati Public School, NOIDA",
      location: "Uttar Pradesh, India",
      degree: "Class 12th Grade",
      score: "95.6%",
      duration: "2017 - 2021",
      extra: "Class 10th Grade: 97.6%"
    }
  ];

  return (
    <div className="education-list">
      {educationData.map((edu, idx) => (
        <motion.div 
          key={idx} 
          className="education-card"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="edu-header">
            <h3 className="edu-institution">{edu.institution}</h3>
            <span className="edu-location">{edu.location}</span>
          </div>
          
          <div className="edu-subheader">
            <span className="edu-degree">
              {edu.degree}{edu.score ? `: ${edu.score}` : ''}
            </span>
            <span className="edu-duration">{edu.duration}</span>
          </div>

          {edu.coursework && (
            <p className="edu-coursework">
              <strong>Relevant Coursework:</strong> {edu.coursework}
            </p>
          )}

          {edu.extra && (
            <p className="edu-extra">{edu.extra}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
