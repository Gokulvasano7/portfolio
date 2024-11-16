import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/gimage1.jpg';
// import floatImage from '../images/float.png';

function Home() {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector('.home-section');
    
    const createRipple = (event) => {
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      
      const x = event.clientX;
      const y = event.clientY;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      homeSection.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 3000);
    };
    
    homeSection.addEventListener('click', createRipple);
    
    return () => {
      homeSection.removeEventListener('click', createRipple);
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = (e) => {
      // Store touch start position
      const touch = e.touches[0];
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const touch = e.touches[0];
      const deltaX = touchStartX.current - touch.clientX;
      const deltaY = touchStartY.current - touch.clientY;

      // Prevent vertical scrolling when swiping horizontally
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const previewImages = [
    {
      src: 'https://via.placeholder.com/400x300',
      title: 'Photo 1',
      year: '2023'
    },
    {
      src: 'https://via.placeholder.com/400x300',
      title: 'Photo 2',
      year: '2022'
    },
    {
      src: 'https://via.placeholder.com/400x300',
      title: 'Photo 3',
      year: '2023'
    }
  ];

  const heroStyle = {
    height: '100vh',
    background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
                url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '10%',
    overflow: 'hidden',
    marginTop: '0',
    position: 'relative'
  };

  const videoUrl = "https://www.youtube.com/embed/FYj4iZc1rD0";

  return (
    <div className="home-section">
      <div className="hero" style={heroStyle}>
        {/* <img src={floatImage} alt="Profile" className="floating-image" /> */}
        <div className="hero-content">
          <h1>Gokulvasan</h1>
          <h2>Actor & Performer</h2>
        </div>
      </div>
      
      <div className="highlights">
        <div className="highlight-item">
          <h3>15+</h3>
          <p>Theatre Productions</p>
        </div>
        <div className="highlight-item">
          <h3>8+</h3>
          <p>Short Films</p>
        </div>
        <div className="highlight-item">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
      </div>

      <div className="gallery-preview">
        <h2>Featured Works</h2>
        <div className="preview-grid">
          {previewImages.map((image, index) => (
            <div key={index} className="preview-item">
              <img src={image.src} alt={image.title} />
              <div className="preview-info">
                <h4>{image.title}</h4>
                <p>{image.year}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/gallery" className="view-more-btn">
          View Full Gallery
        </Link>
      </div>
      
      <div className="showreel">
        <h2>Featured Showreel</h2>
        <div className="showreel-content">
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src={videoUrl}
              title="Featured Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="showreel-text">
            <h1>My Acting Journey</h1>
            <p>A glimpse into my theatrical performances and on-screen presence. This showreel highlights my versatility as an actor and my passion for bringing characters to life.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;