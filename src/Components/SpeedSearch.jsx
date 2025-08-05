import React from 'react';
import './SpeedSearch.css';
import icon1 from '../assets/icon_1.webp'; // Replace with actual icons
import icon2 from '../assets/icon_2.webp';
import icon3 from '../assets/icon_3.webp';
import vennDiagram from '../assets/venn_diagram.webp'; // Replace with the actual venn diagram image

function SpeedSearch() {
  return (
    <section className="speed-search-container">
      <h2 className="speed-search-heading">
        But is your company prepared to <br></br>adapt to the speed of AI search?
      </h2>

      <div className="speed-search-cards">
        <div className="speed-search-card">
          <img src={icon1} alt="Icon 1" />
          <p>Outrank Your <br />Competitors on AI</p>
        </div>
        <div className="speed-search-card">
          <img src={icon2} alt="Icon 2" />
          <p>Drive 100% Untapped <br />AI-SEO Traffic</p>
        </div>
        <div className="speed-search-card">
          <img src={icon3} alt="Icon 3" />
          <p>Maximize Revenue <br />from AI Search</p>
        </div>
      </div>

      <h2 className="unified-heading">
        We empower your brand with a unified search strategy
      </h2>

      <div className="venn-diagram">
        <img src={vennDiagram} alt="GEO vs SEO Venn Diagram" />
      </div>
    </section>
  );
}

export default SpeedSearch;
