import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FooterInfo.css';

const FooterInfo = () => {
  return (
    <div className="footer-grid">
      <div id="publications" className="footer-col">
        <h4 className="footer-col-title">PUBLICATIONS</h4>
        
        <div className="footer-item">
          <span className="footer-item-num">01</span>
          <div className="footer-item-content">
            <h5 className="footer-item-title">[Publication Title Placeholder]</h5>
            <p className="footer-item-desc">[Conference/Journal Name] 2025 (Under Review)</p>
          </div>
        </div>

        <div className="footer-item">
          <span className="footer-item-num">02</span>
          <div className="footer-item-content">
            <h5 className="footer-item-title">[Publication Title Placeholder]</h5>
            <p className="footer-item-desc">In Progress</p>
          </div>
        </div>
        
        <a href="#publications" className="view-all-link">
          View all publications <ArrowRight size={14} />
        </a>
      </div>



      <div id="achievements" className="footer-col">
        <h4 className="footer-col-title">ACHIEVEMENTS</h4>
        
        <ul className="footer-list">
          <li>
            Selected for Amazon ML Summer School'2025 and '2024 [Acknowledgement Letter: <a href="https://www.linkedin.com/in/sanvishukla/overlay/Position/2699053376/treasury/?profileId=ACoAADzJfm0BV0s-VZ3ZGOZ-BC9v7qCA9DZEAwQ" target="_blank" rel="noreferrer" className="view-all-link" style={{margin: 0}}>2025</a>, <a href="https://www.linkedin.com/in/sanvishukla/overlay/Position/2442612751/treasury/?profileId=ACoAADzJfm0BV0s-VZ3ZGOZ-BC9v7qCA9DZEAwQ" target="_blank" rel="noreferrer" className="view-all-link" style={{margin: 0}}>2024</a>].
          </li>
          <li>
            Recipient of Mitacs Globalink Research Award to conduct funded research in Canada (Sep 2024) [<a href="#" target="_blank" rel="noreferrer" className="view-all-link" style={{margin: 0}}>Award Letter</a>].
          </li>
          <li>Selected as a delegate for Harvard HPAIR 2024 (Feb 2024).</li>
          <li>Secured a rank of 25420 in JEE Advanced 2022 (Aug 2022).</li>
        </ul>

        <h4 className="footer-col-title" style={{ marginTop: '3rem' }}>CURRENTLY EXPLORING</h4>
        <div className="exploring-tags">
          <span>Multimodal Learning</span>
          <span>•</span>
          <span>LLMs</span>
          <span>Human-AI Interaction</span>
          <span>•</span>
          <span>Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
