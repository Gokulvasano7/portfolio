import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ImageViewer({ images, currentIndex, onClose, onNext, onPrevious }) {
  const [touchStart, setTouchStart] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrevious();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 5) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const currentTouch = e.changedTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) < 5 && !isSwiping) {
      // Treat as a tap if there was minimal movement
      onNext();
    } else if (Math.abs(diff) > 50) {
      // Treat as a swipe if movement was significant
      if (diff > 0) onNext();
      else onPrevious();
    }

    setTouchStart(null);
    setIsSwiping(false);
  };

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <button className="nav-button prev" onClick={onPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <div 
          className="image-container" 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img 
            src={images[currentIndex].image} 
            alt={images[currentIndex].title} 
          />
        </div>
        
        <button className="nav-button next" onClick={onNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default ImageViewer; 