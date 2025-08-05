  import React from 'react';
  import './Geo.css';

  const Geo = () => {
    return (
      <div className="geo-seo-container">
        <div className="venn-diagram">
          {/* Left Circle - GEO */}
          <div className="circle geo-circle">
            <div className="content-block" style={{ textAlign: 'center' }}>
              <h2>GEO</h2>
              <ul>
                <li><span className="checkmark">✓</span> Prompt Monitoring</li>
                <li><span className="checkmark">✓</span> Segment in AI response</li>
                <li><span className="checkmark">✓</span> Contextual content structuring</li>
                <li><span className="checkmark">✓</span> Source Influence on Input</li>
                <li><span className="checkmark">✓</span> AI hallucination monitoring</li>
              </ul>
            </div>
          </div>

          {/* Right Circle - SEO */}
          <div className="circle seo-circle">
            <div className="content-block" style={{ color: 'black' }}>
              <h2>SEO</h2>
              <ul>
                <li><span className="checkmark dark">✓</span> SERP rankings</li>
                <li><span className="checkmark dark">✓</span> Backlinks & Keywords</li>
                <li><span className="checkmark dark">✓</span> Technical Optimization</li>
                <li><span className="checkmark dark">✓</span> Page Speed & Crawlability</li>
                <li><span className="checkmark dark">✓</span> Sitemaps & Schema</li>
              </ul>
            </div>
          </div>

          {/* Overlapping Content */}
          <div className="overlap-content">
            <div className="content-block1" style={{ textAlign: 'center' }}>
              <ul>
                <li> Brand Visibility</li>
                <li>Consistent Messaging</li>
                <li>Content Quality & Accuracy</li>
                <li>Competitive Benchmarking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Geo;
