import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  // faTheaterMasks, faFilm, faClock, 
  faPlay, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import AnimatedBackground from './AnimatedBackground';
import '../styles/Home.css';

// Import your images
import heroImage from '../images/gimage1.jpg';

function Home() {


  return (
    <div className="home-section">
      <AnimatedBackground type="home" />
      
      {/* Hero Section */}
      <motion.div 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroImage})`
        }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Gokulvasan
          </motion.h1>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Actor & Performer
          </motion.h2>
          <motion.div 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>Bringing characters to life through passion and dedication</p>
          </motion.div>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/gallery" className="primary-btn">
              View Gallery <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/showreel" className="secondary-btn">
              <FontAwesomeIcon icon={faPlay} /> Watch Showreel
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Collaborate?</h2>
        <p>Let's create something amazing together</p>
        <Link to="/contact" className="cta-button">
          Get in Touch <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;