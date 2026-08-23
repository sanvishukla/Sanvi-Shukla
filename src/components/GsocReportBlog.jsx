import React from 'react';
import gsocLogo from '../assets/GSoC.png';
import oslLogo from '../assets/OSL.png';
import './GsocReportBlog.css';
import GiscusComments from './GiscusComments';

const GsocReportBlog = () => {
  return (
    <div className="gsoc-report">
      <h1 className="gsoc-title">Google Summer of Code 2026: Data Umbrella Event Board</h1>
      <hr className="gsoc-divider" />
      
      <div className="gsoc-logos">
        <img 
          src={gsocLogo} 
          alt="GSoC Logo" 
          className="gsoc-logo"
        />
        <img 
          src={oslLogo}
          alt="Open Science Labs Logo"
          className="gsoc-logo"
        />
      </div>

      <h2 className="gsoc-subtitle">Contributor Info</h2>
      <ul className="gsoc-info-list">
        <li><strong>Name:</strong> Sanvi Shukla</li>
        <li><strong>Organization:</strong> Open Science Labs</li>
        <li><strong>Project Size:</strong> Large (350hrs)</li>
        <li><strong>Mentors:</strong> Ivan Ogasawara, Yuvi Mittal, Reshama S, Devshree</li>
        <li><strong>Email:</strong> <a href="mailto:sanvishukla@gmail.com">sanvishukla@gmail.com</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/sanvishukla" target="_blank" rel="noreferrer">https://github.com/sanvishukla</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sanvishukla/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/sanvishukla/</a></li>
        <li><strong>Project Repository:</strong> <a href="https://github.com/data-umbrella/du-event-board" target="_blank" rel="noreferrer">Data Umbrella Event Board</a></li>
        <li><strong>Project Deployment:</strong> <a href="https://events.dataumbrella.org/" target="_blank" rel="noreferrer">https://events.dataumbrella.org/</a></li>
      </ul>

      <div className="gsoc-content-body" style={{ marginTop: '3rem' }}>
        <div className="gsoc-content-text">
          <h3 className="gsoc-section-header" style={{ marginTop: 0 }}>Project Overview</h3>
          <p>
            The Data Umbrella (DU) Event Board is a community-driven event discovery platform designed to help users find tech events, meetups, and workshops globally. Built as a statically generated frontend application, it relies on a streamlined "GitOps" architecture: events are sourced from a single YAML file, processed into JSON via Python scripts, and rendered dynamically using React and Vite.
          </p>
          <p>
            During GSoC, the project focused on expanding the event discovery experience, automating event ingestion, strengthening testing, and improving deployment and SEO. To enhance discovery, the frontend was expanded with a robust interactive map using react-leaflet, weighted fuzzy searching via Fuse.js, dedicated event detail pages, and deep-linking capabilities that allow users to serialize and share specific filter states through URLs.
          </p>
          <p>
            On the maintainer side, the manual process of adding events was replaced with a fully automated ingestion pipeline. By leveraging GitHub Actions and custom Python scripts, community members can now submit events via Google Forms or a custom GitHub Issue template, which automatically provisions environments, validates the data, and opens a formatted Pull Request. This automation was supported by rigorous unit testing with Vitest and Pytest, SEO metadata formatting, dead-link validation, and CI/CD enhancements for custom domain deployment. 
          </p>
          <p>
            Ultimately, this GSoC project resulted in a more automated and maintainable platform. The automated workflows reduce the amount of manual work required from maintainers when processing event submissions, while end-users now benefit from a highly responsive and deeply searchable interface that seamlessly connects them with tech events and resources worldwide.
          </p>
        </div>
      </div>
      
      <div className="gsoc-live-preview-section">
        <h3 className="gsoc-section-header">Live Platform Preview</h3>
        <div className="browser-mockup">
          <div className="browser-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <div className="browser-url-bar">events.dataumbrella.org</div>
          </div>
          <div className="iframe-wrapper">
            <iframe 
              src="https://events.dataumbrella.org/" 
              title="Data Umbrella Event Board Live Preview"
              className="gsoc-iframe"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>

      <div className="gsoc-content-body">
        <div className="gsoc-content-text">

          <h3 className="gsoc-section-header">Platform Evolution</h3>
          <p>
            The Data Umbrella Event Board provided an existing foundation for aggregating and displaying community events. My work focused on extending this foundation with features and workflows that support a growing event dataset and community of contributors.
          </p>
          <p>
            Before GSoC officially began, I had already contributed several features to the project, including the interactive map, search, filtering, and deep linking. During GSoC, I built on these contributions by developing dedicated event pages, automated event ingestion workflows, testing infrastructure, and production deployment improvements.
          </p>
          <h3 className="gsoc-section-header">Pre-GSoC Contributions</h3>
          <p>
            Before the official GSoC coding period, I implemented several foundational features for event discovery:
          </p>
          <ul className="gsoc-tech-list">
            <li><strong>Mapping & Geolocation:</strong> Added a map component using react-leaflet to display events geographically (<a href="https://github.com/data-umbrella/du-event-board/pull/43" target="_blank" rel="noreferrer" className="gsoc-link">#43</a>). Reduced the number of external API requests during map rendering to optimize the geocoding process (<a href="https://github.com/data-umbrella/du-event-board/pull/87" target="_blank" rel="noreferrer" className="gsoc-link">#87</a>). Added logic to automatically adjust the map zoom and center to fit all visible event markers (<a href="https://github.com/data-umbrella/du-event-board/pull/89" target="_blank" rel="noreferrer" className="gsoc-link">#89</a>).</li>
            <li><strong>State Management & URL Linking:</strong> Synced the application's search queries and active filters with URL query parameters, allowing users to share direct links to specific search results (<a href="https://github.com/data-umbrella/du-event-board/pull/48" target="_blank" rel="noreferrer" className="gsoc-link">#48</a>).</li>
            <li><strong>Search & Data Filtering:</strong> Added custom date range filtering (<a href="https://github.com/data-umbrella/du-event-board/pull/60" target="_blank" rel="noreferrer" className="gsoc-link">#60</a>) and added validation to prevent the start date from being after the end date (<a href="https://github.com/data-umbrella/du-event-board/pull/112" target="_blank" rel="noreferrer" className="gsoc-link">#112</a>). Implemented a hybrid search using Fuse.js that combines exact matching with typo-tolerant fuzzy searching for event titles and tags (<a href="https://github.com/data-umbrella/du-event-board/pull/91" target="_blank" rel="noreferrer" className="gsoc-link">#91</a>).</li>
            <li><strong>UI & Layouts:</strong> Built a horizontal List View component as an alternative to the standard Grid layout (<a href="https://github.com/data-umbrella/du-event-board/pull/113" target="_blank" rel="noreferrer" className="gsoc-link">#113</a>). Created the static About Us and Sponsors pages (<a href="https://github.com/data-umbrella/du-event-board/pull/52" target="_blank" rel="noreferrer" className="gsoc-link">#52</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/88" target="_blank" rel="noreferrer" className="gsoc-link">#88</a>). Fixed CSS alignment and responsive layout issues within the footer and event cards (<a href="https://github.com/data-umbrella/du-event-board/pull/151" target="_blank" rel="noreferrer" className="gsoc-link">#151</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/161" target="_blank" rel="noreferrer" className="gsoc-link">#161</a>).</li>
            <li><strong>Automation:</strong> Added a GitHub Actions workflow to check external event URLs and ensure they return a 200 OK HTTP status, preventing broken links from being merged (<a href="https://github.com/data-umbrella/du-event-board/pull/106" target="_blank" rel="noreferrer" className="gsoc-link">#106</a>).</li>
          </ul>

          <h3 className="gsoc-section-header">GSoC Coding Period & Subsequent Deliverables</h3>
          <p>
            During GSoC, I focused on adding new pages, automating the event submission process, and setting up tests and CI/CD pipelines.
          </p>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-text)' }}>UI Additions and Layout Updates</h4>
          <ul className="gsoc-tech-list">
            <li><strong>Event Details Pages (<a href="https://github.com/data-umbrella/du-event-board/pull/177" target="_blank" rel="noreferrer" className="gsoc-link">#177</a>):</strong> Added React routing to create individual pages for each event, allowing users to navigate from the main map or list views to a dedicated page with full event details.</li>
            <li><strong>UI Updates (<a href="https://github.com/data-umbrella/du-event-board/pull/187" target="_blank" rel="noreferrer" className="gsoc-link">#187</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/192" target="_blank" rel="noreferrer" className="gsoc-link">#192</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/102" target="_blank" rel="noreferrer" className="gsoc-link">#102</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/27" target="_blank" rel="noreferrer" className="gsoc-link">#27</a>):</strong> Fixed CSS flexbox and grid layouts for better mobile responsiveness. Added an FAQ section alongside other supplementary pages. Also updated the map's zoom behavior to handle overlapping markers more cleanly.</li>
          </ul>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-text)' }}>Event Submission Workflows</h4>
          <p>
            To reduce the manual work required by maintainers to add events, I built two automated pipelines:
          </p>
          <ul className="gsoc-tech-list">
            <li><strong>GitHub Issue-to-PR Workflow (<a href="https://github.com/data-umbrella/du-event-board/pull/184" target="_blank" rel="noreferrer" className="gsoc-link">#184</a>):</strong> Created a GitHub Issue template for submitting events. A GitHub Actions workflow listens for issues labeled <code>add-event</code>. When triggered, it runs a Python script (<code>scripts/add_event.py</code>) that extracts the data from the issue, validates it, adds it to <code>data/events.yaml</code>, and generates the frontend <code>events.json</code> file. The action then automatically opens a Pull Request with these changes.</li>
            <li><strong>Google Forms/Sheets Sync Workflow (<a href="https://github.com/data-umbrella/du-event-board/pull/182" target="_blank" rel="noreferrer" className="gsoc-link">#182</a>):</strong> Created an alternative method for managing events via Google Forms and Sheets. A Python script fetches the data from the connected Google Sheet, compares it against the repository's existing YAML file, and automatically syncs the changes. This includes adding new events, editing existing ones, and deleting removed events. A GitHub Action then runs this script and automatically creates a Pull Request containing the precise updates.</li>
          </ul>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-text)' }}>Testing Infrastructure</h4>
          <ul className="gsoc-tech-list">
            <li><strong>Automated Testing (<a href="https://github.com/data-umbrella/du-event-board/pull/189" target="_blank" rel="noreferrer" className="gsoc-link">#189</a>):</strong> Set up frontend unit tests using Vitest and React Testing Library, and backend tests using Pytest for the Python scripts. Integrated both into GitHub Actions to run on every Pull Request and generate code coverage reports.</li>
          </ul>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-text)' }}>Deployment and SEO</h4>
          <ul className="gsoc-tech-list">
            <li><strong>Custom Domain Deployment (<a href="https://github.com/data-umbrella/du-event-board/pull/172" target="_blank" rel="noreferrer" className="gsoc-link">#172</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/175" target="_blank" rel="noreferrer" className="gsoc-link">#175</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/176" target="_blank" rel="noreferrer" className="gsoc-link">#176</a>):</strong> Fixed Vite base-path routing and added CNAME configuration so the static site properly resolves on the custom domain <code>events.dataumbrella.org</code>.</li>
            <li><strong>SEO and Analytics (<a href="https://github.com/data-umbrella/du-event-board/pull/186" target="_blank" rel="noreferrer" className="gsoc-link">#186</a>, <a href="https://github.com/data-umbrella/du-event-board/pull/203" target="_blank" rel="noreferrer" className="gsoc-link">#203</a>):</strong> Integrated <code>react-helmet-async</code> to dynamically inject <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> description tags based on the active React route, automatically generating Open Graph meta tags for individual event pages to ensure accurate social media preview cards. Additionally, added <code>sitemap.xml</code> and <code>robots.txt</code> files to guide search engine crawlers, configured <code>netlify.toml</code> with redirect rules to prevent 404 errors on direct SPA links, and set up Google Analytics via <code>vite-plugin-radar</code> to track user engagement.</li>
          </ul>


          <h3 className="gsoc-section-header">Technologies Utilized</h3>
          <ul className="gsoc-tech-list">
            <li><strong>Frontend Core:</strong> React, Vite, Framer Motion, Lucide-React</li>
            <li><strong>Data & Interactions:</strong> Leaflet (Mapping), Fuse.js (Search)</li>
            <li><strong>Backend & Automation:</strong> Python 3.10+, Conda, Custom Data Ingestion Scripts</li>
            <li><strong>Testing & QA:</strong> Vitest, React Testing Library, Pytest</li>
            <li><strong>Code Quality & Deployment:</strong> ESLint, Ruff, Pre-commit, Netlify</li>
          </ul>
        </div>

        <h2 className="gsoc-subtitle" style={{ marginTop: '4rem' }}>PRs Summary</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          The table below highlights the pull requests I worked on during the GSoC period. For a complete history of my work, including pre-GSoC contributions, you can <strong><a href="https://github.com/data-umbrella/du-event-board/issues?q=is%3Apr%20author%3Asanvishukla" target="_blank" rel="noreferrer" className="gsoc-link">view all my pull requests here</a></strong>.
        </p>
        
        <div className="table-responsive">
          <table className="gsoc-table">
            <thead>
              <tr>
                <th>PR</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Add CNAME for custom domain <a href="https://github.com/data-umbrella/du-event-board/pull/172" target="_blank" rel="noreferrer" className="gsoc-link">#172</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>fix: support custom domain deployment for events dataumbrella.org <a href="https://github.com/data-umbrella/du-event-board/pull/175" target="_blank" rel="noreferrer" className="gsoc-link">#175</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>Fix vite base root <a href="https://github.com/data-umbrella/du-event-board/pull/176" target="_blank" rel="noreferrer" className="gsoc-link">#176</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>Event Details Page <a href="https://github.com/data-umbrella/du-event-board/pull/177" target="_blank" rel="noreferrer" className="gsoc-link">#177</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>Event submission via Google Forms/Google sheet <a href="https://github.com/data-umbrella/du-event-board/pull/182" target="_blank" rel="noreferrer" className="gsoc-link">#182</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>feat: add Submit an event issue template and automated PR workflow <a href="https://github.com/data-umbrella/du-event-board/pull/184" target="_blank" rel="noreferrer" className="gsoc-link">#184</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>Add dynamic SPA document titles and GA page view tracking <a href="https://github.com/data-umbrella/du-event-board/pull/186" target="_blank" rel="noreferrer" className="gsoc-link">#186</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>feat: UI updates, search, and map improvements <a href="https://github.com/data-umbrella/du-event-board/pull/187" target="_blank" rel="noreferrer" className="gsoc-link">#187</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>add frontend and backend unit tests with CI coverage reporting <a href="https://github.com/data-umbrella/du-event-board/pull/189" target="_blank" rel="noreferrer" className="gsoc-link">#189</a></td>
                <td><span className="status-badge merged">Merged</span></td>
              </tr>
              <tr>
                <td>UI refactor: add FAQ, fix responsive layouts and map zooming <a href="https://github.com/data-umbrella/du-event-board/pull/192" target="_blank" rel="noreferrer" className="gsoc-link">#192</a></td>
                <td><span className="status-badge under-review">Under-Review</span></td>
              </tr>
              <tr>
                <td>SEO improvements <a href="https://github.com/data-umbrella/du-event-board/pull/203" target="_blank" rel="noreferrer" className="gsoc-link">#203</a></td>
                <td><span className="status-badge under-review">Under-Review</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="gsoc-subtitle" style={{ marginTop: '4rem', fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Impact & Learnings</h3>
        <div className="gsoc-content-text" style={{ marginBottom: '3rem' }}>
          <p>
            This project taught me that open-source engineering involves more than implementing individual features. Each change needs to work within an existing architecture, development workflow, and community process.
          </p>
          <p>
            Working on the Event Board gave me experience across frontend development, geospatial interfaces, search, automation, testing, CI, and deployment while contributing to a project used by an open-source community. I also gained a deeper understanding of designing contribution workflows that allow automation while retaining review and maintainability.
          </p>
          <p>
            One of my key takeaways was that automation and reliability need to be developed together. Automating a workflow is only part of the solution; testing, validation, and review processes are equally important for keeping automated changes dependable.
          </p>
          <p>
            While GSoC has concluded, development of the Data Umbrella Event Board continues, with further improvements to the user interface, SEO, analytics, and event discovery experience.
          </p>
        </div>

        <h2 className="gsoc-subtitle">Acknowledgement</h2>
        <p style={{ marginBottom: '2rem' }}>
          I am deeply thankful to Google Summer of Code and Open Science Labs for making this experience possible and for creating such a welcoming environment for open-source contribution. I would like to extend my special thanks to all my mentors for their constant guidance, thoughtful feedback, and encouragement throughout the project. Their mentorship helped me not only make meaningful contributions to the Data Umbrella Event Board but also better understand the collaborative nature of open-source development. I am grateful to everyone in the OSL and Data Umbrella communities who made this journey such a valuable learning experience.
        </p>
      </div>
      
      <div className="gsoc-content-body">
        <GiscusComments />
      </div>
    </div>
  );
};

export default GsocReportBlog;
