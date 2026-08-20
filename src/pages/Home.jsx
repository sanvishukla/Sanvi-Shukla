import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ProjectCard from '../components/ProjectCard';
import OpenSource from '../components/OpenSource';
import Publications from '../components/Publications';
import Achievements from '../components/Achievements';
import BlogSection from '../components/BlogSection';
import { Menu, X } from 'lucide-react';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'opensource', 'publications', 'projects', 'blog', 'achievements', 'contact'];
      
      let currentSection = 'home';
      let maxTop = -Infinity;
      const threshold = window.innerHeight * 0.4; // Trigger when section is 40% from the top
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Find the section whose top is closest to the threshold, but not below it
          if (rect.top <= threshold && rect.top > maxTop) {
            maxTop = rect.top;
            currentSection = section;
          }
        }
      }

      // Check if we're at the very bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        // If at the bottom, try to find the last section that actually exists in the DOM
        for (let i = sections.length - 1; i >= 0; i--) {
          if (document.getElementById(sections[i])) {
            currentSection = sections[i];
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on navigation on mobile
  useEffect(() => {
    const handleHashChange = () => setSidebarOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const projectsData = [];

  return (
    <div className="app-container">
      {/* Mobile menu toggle */}
      <button 
        className="mobile-menu-toggle" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1000,
          background: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          padding: '0.5rem',
          display: 'none', // Hidden on desktop, shown via CSS on mobile
          cursor: 'pointer'
        }}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Adding mobile toggle logic to CSS would be better, but inline style for now to keep it simple, will add global css later */}
      <style>{`
        @media (max-width: 900px) {
          .mobile-menu-toggle { display: block !important; }
        }
      `}</style>

      <Sidebar isOpen={sidebarOpen} activeSection={activeSection} />

      <main className="main-content">
        <Hero />
        
        <Section id="education" num="01" title="EDUCATION">
          <Education />
        </Section>

        <Section id="experience" num="02" title="EXPERIENCE">
          <Experience />
        </Section>

        <Section id="opensource" num="03" title="OPEN SOURCE EXPERIENCE">
          <OpenSource />
        </Section>

        <Section id="publications" num="05" title="PUBLICATIONS">
          <Publications />
        </Section>

        <Section id="projects" num="06" title="PROJECTS">
          {projectsData.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </Section>

        <Section id="blog" num="07" title="BLOG">
          <BlogSection />
        </Section>

        <Section id="achievements" num="08" title="ACHIEVEMENTS">
          <Achievements />
        </Section>

        <Section id="contact" num="09" title="CONTACT">
          <div style={{ textAlign: 'center', margin: '4rem 0' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Let's Connect</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>I'm currently exploring new opportunities and open to exciting collaborations.</p>
            <a href="mailto:sanvishukla@gmail.com" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'var(--color-accent)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '500' }}>
              Say Hello
            </a>
          </div>
        </Section>
        
        <footer style={{ marginTop: '4rem', paddingBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
          <div style={{ flex: '1 1 auto' }}><a href="mailto:sanvishukla@gmail.com">sanvishukla@gmail.com</a></div>
          <div style={{ flex: '1 1 auto' }}>Made with curiosity and a lot of coffee.</div>
          <div style={{ flex: '1 1 auto' }}>&copy; 2026 Sanvi Shukla</div>
        </footer>
      </main>
    </div>
  );
}

export default Home;
