import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faGraduationCap, faLocationDot, faLanguage, 
  faRulerVertical, faTheaterMasks, faPalette, faEye, 
  faBrush, faCakeCandles, faStar, faAward, faFilm
} from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  const personalInfo = [
    { icon: faUser, label: "Name", value: "Gokul Vasan" },
    { icon: faCakeCandles, label: "Age", value: "22" },
    { icon: faGraduationCap, label: "Qualification", value: "B.E - ECE" },
    { icon: faLocationDot, label: "Native", value: "Palani, Tamil Nadu" },
    { icon: faTheaterMasks, label: "Skills", value: "Acting" },
    { icon: faLanguage, label: "Languages", value: "Tamil and Telugu" },
    { icon: faRulerVertical, label: "Height", value: "164.5cm (5.48 feet)" },
    { icon: faBrush, label: "Hair Color", value: "Black" },
    { icon: faEye, label: "Eye Color", value: "Black" },
    { icon: faPalette, label: "Skin Tone", value: "Sandal Brown" }
  ];

  const workExperience = [
    {
      type: "Film",
      title: "Chithha",
      role: "Supporting Role - Ponni's Lover",
      year: "2023",
      description: "A compelling drama that showcases complex relationships and emotional depth.",
      highlights: ["Featured in key scenes", "Worked with renowned director"]
    },
    {
      type: "Short Film",
      title: "Kadhal Solla Bayamen",
      role: "Lead Role",
      year: "2022",
      description: "A romantic tale following a dreamer's journey through love and imagination.",
      highlights: ["Lead performance", "Audience favorite", "Festival selection"]
    },
    // Add more work experiences here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="portfolio-section">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="portfolio-header"
      >
        <h1>About Me</h1>
        <p className="portfolio-tagline">
          Passionate Actor & Performer with a Creative Vision
        </p>
      </motion.div>

      <motion.div 
        className="personal-info-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {personalInfo.map((info, index) => (
          <motion.div
            key={index}
            className="info-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={info.icon} className="info-icon" />
            <div className="info-content">
              <h3>{info.label}</h3>
              <p>{info.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="work-section"
      >
        <h2>Featured Work</h2>
        <div className="work-timeline">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              className="work-card"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="work-icon">
                <FontAwesomeIcon icon={work.type === "Film" ? faFilm : faStar} />
              </div>
              <div className="work-content">
                <div className="work-header">
                  <h3>{work.title}</h3>
                  <span className="work-year">{work.year}</span>
                </div>
                <h4>{work.role}</h4>
                <p>{work.description}</p>
                <div className="work-highlights">
                  {work.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      <FontAwesomeIcon icon={faAward} /> {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
