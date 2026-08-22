import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const GiscusComments = () => {
  const ref = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Giscus configuration
    // Replace these with the user's actual repo details later if needed,
    // but these placeholders will show the widget structure.
    script.setAttribute('data-repo', 'sanvishukla/Sanvi-Shukla');
    script.setAttribute('data-repo-id', 'R_kgDORRlIoQ');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDORRlIoc4DD83a');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme === 'dark' ? 'noborder_dark' : 'noborder_light');
    script.setAttribute('data-lang', 'en');

    ref.current.appendChild(script);
  }, []); // We keep [] here so the script is only injected once

  // Dynamically update theme when it changes
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    
    const giscusTheme = theme === 'dark' ? 'noborder_dark' : 'noborder_light';
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      'https://giscus.app'
    );
  }, [theme]);

  return (
    <div style={{ marginTop: '4rem' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
        Comments & Reactions
      </h2>
      <div ref={ref} />
    </div>
  );
};

export default GiscusComments;
