import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faGraduationCap, 
  faLocationDot, 
  faLanguage, 
  faRulerVertical, 
  faTheaterMasks,
  faPalette,  // for skin tone
  faEye,      // for eye color
  faBrush,
  faCakeCandles
} from '@fortawesome/free-solid-svg-icons';
import AnimatedBackground from './AnimatedBackground';

function Portfolio() {
  const personalInfo = [
    { icon: faUser, label: "Name", value: "Gokul Vasan" },
    { icon: faCakeCandles, label: "Age", value: "22" },
    { icon: faGraduationCap, label: "Qualification", value: "B.E - ECE" },
    { icon: faLocationDot, label: "Native", value: "Palani, Tamil Nadu" },
    { icon: faTheaterMasks, label: "Skills", value: "Acting" },
    { icon: faLanguage, label: "Languages", value: "Tamil and Telugu" },
    { icon: faRulerVertical, label: "Height", value: "163cm (5.4 feet)" },
    { icon: faBrush, label: "Hair Color", value: "Black" },
    { icon: faEye, label: "Eye Color", value: "Black" },
    { icon: faPalette, label: "Skin Tone", value: "Sandal Brown" }
  ];

  return (
    <div className="portfolio-section">
      <AnimatedBackground type="portfolio" />
      <h1>About Me</h1>
      
      <div className="personal-info-container">
        {personalInfo.map((info, index) => (
          <div key={index} className="info-card">
            <FontAwesomeIcon icon={info.icon} className="info-icon" />
            <div className="info-content">
              <h3>{info.label}</h3>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>

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