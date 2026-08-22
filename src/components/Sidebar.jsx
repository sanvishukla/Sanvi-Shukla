import React from 'react';
import { Download, Sun, Moon } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGraduationCap, FaDiscord } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ isOpen, activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { num: '01', label: 'Home', id: 'home' },
    { num: '02', label: 'Education', id: 'education' },
    { num: '03', label: 'Experience', id: 'experience' },
    { num: '04', label: 'Open Source', id: 'opensource' },
    { num: '05', label: 'Publications', id: 'publications' },
    { num: '06', label: 'Projects', id: 'projects' },
    { num: '07', label: 'Blog', id: 'blog' },
    { num: '08', label: 'Achievements', id: 'achievements' },
    { num: '09', label: 'Contact', id: 'contact' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div>
        <div className="logo">
          SS<span>.</span>
        </div>

        <nav className="nav-menu">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.id}`}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="nav-number">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="social-links">
          <a href="https://github.com/sanvishukla" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/sanvishukla/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="https://scholar.google.com/citations?user=91nsgvIAAAAJ&hl=en" target="_blank" rel="noreferrer" className="social-icon" aria-label="Google Scholar"><FaGraduationCap size={20} /></a>
          <a href="https://discord.com/users/_sanvishukla_" target="_blank" rel="noreferrer" className="social-icon" aria-label="Discord" title="Discord: _sanvishukla_"><FaDiscord size={20} /></a>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="download-btn" style={{ flex: 1 }}>
            <Download size={16} />
            CV
          </button>
          
          <button 
            className="download-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            style={{ padding: '0.75rem', flex: '0 0 auto' }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
