import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>My Work</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3>Theatre</h3>
          <ul>
            <li>Lead Role in "The Merchant of Venice" (2023)</li>
            <li>Supporting Role in "A Midsummer Night's Dream" (2022)</li>
            <li>Lead Role in "The Glass Menagerie" (2021)</li>
          </ul>
        </div>
        
        <div className="portfolio-item">
          <h3>Film</h3>
          <ul>
            <li>Lead Role in "The Journey" - Short Film (2023)</li>
            <li>Supporting Role in "Echoes" - Independent Film (2022)</li>
          </ul>
        </div>
        
        <div className="portfolio-item">
          <h3>Training</h3>
          <ul>
            <li>Method Acting Workshop - Lee Strasberg Institute</li>
            <li>Voice & Speech Training - Drama School</li>
            <li>Movement for Actors - Theatre Academy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 