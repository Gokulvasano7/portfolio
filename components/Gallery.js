import React, { useState, useEffect, useCallback, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';  // Add this import
// Import your images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import image13 from '../images/image13.jpg';
import image14 from '../images/image14.jpg';
import image15 from '../images/image15.jpg';
import image16 from '../images/image16.jpg';
import image17 from '../images/image17.jpg';
import image18 from '../images/image18.jpg';
import image19 from '../images/image19.jpg';
import image20 from '../images/image20.jpg';
import image21 from '../images/image21.jpg';
import image22 from '../images/image22.jpg';
import image23 from '../images/image23.jpg';
import image24 from '../images/image24.jpg';
import image25 from '../images/image25.jpg';
import image26 from '../images/image26.jpg';
import image27 from '../images/image27.jpg';
import image28 from '../images/image28.jpg';
import ImageViewer from './ImageViewer';

const LazyImage = React.lazy(() => import('./ResponsiveImage'));

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Move galleryItems into useMemo to fix the dependency warning
  const galleryItems = useMemo(() => [
    {
      image: image1,
      category: 'photoshoot',
      description: 'Professional photoshoot highlighting dramatic expressions'
    },
    {
      image: image2,
      category: 'photoshoot'
    },
    {
      image: image3,
      category: 'behindscenes',
    },
    {
      image: image4,
      category: 'photoshoot',
    },
    {
      image: image5,
      category: 'photoshoot'
    },
    {
      image: image6,
      category: 'photoshoot'
    },
    {
      image: image7,
      category: 'photoshoot'
    },
    {
      image: image8,
      category: 'photoshoot'
    },
    {
      image: image9,
      category: 'photoshoot'
    },
    {
      image: image10,
      category: 'photoshoot'
    },
    {
      image: image11,
      category: 'photoshoot'
    },
    {
      image: image12,
      category: 'behindscenes'
    },
    {
      image: image13,
      category: 'photoshoot'
    },
    {
      image: image14,
      category: 'photoshoot'
    },
    {
      image: image15,
      category: 'photoshoot'
    },
    {
      image: image16,
      category: 'photoshoot'
    },
    {
      image: image17,
      category: 'photoshoot'
    },
    {
      image: image18,
      category: 'events'
    },
    {
      image: image19,
      category: 'events'
    },
    {
      image: image20,
      category: 'events'
    },
    {
      image: image21,
      category: 'events'
    },
    {
      image: image22,
      category: 'events'
    },
    {
      image: image23,
      category: 'photoshoot'
    },
    {
      image: image24,
      category: 'photoshoot'
    },
    {
      image: image25,
      category: 'photoshoot'
    },
    {
      image: image26,
      category: 'photoshoot'
    },
    {
      image: image27,
      category: 'photoshoot'
    },
    {
      image: image28,
      category: 'photoshoot'
    }
  ], []); // Empty dependency array since images are static

  // Loading indicator component
  const LoadingIndicator = () => (
    <div className="loading-overlay" style={{ display: isLoading ? 'flex' : 'none' }}>
      <div className="loading-spinner"></div>
    </div>
  );

  useEffect(() => {
    const updateFilteredItems = () => {
      setIsLoading(true);
      
      const items = filter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);
      
      setFilteredItems(items);
      
      // Use RAF for smoother transitions
      requestAnimationFrame(() => {
        setTimeout(() => setIsLoading(false), 300);
      });
    };

    updateFilteredItems();
  }, [filter, galleryItems]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handlePrevious = useCallback(() => {
    setSelectedIndex((prev) => 
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  }, [galleryItems.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => 
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  }, [galleryItems.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleImageClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  // Masonry layout animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="gallery-section">
      {isLoading && <LoadingIndicator />}
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Photo Gallery
      </motion.h1>

      <motion.div 
        className="gallery-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {[].map(category => (
          <motion.button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={index}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleImageClick(index)}
            >
              <Suspense fallback={
                <div className="image-skeleton-loading">
                  <motion.div 
                    className="loading-shimmer"
                    animate={{ 
                      x: ["0%", "100%"],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              }>
                <LazyImage 
                  src={item.image} 
                  alt={item.title || `Gallery item ${index + 1}`}
                  onLoad={handleImageLoad}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div 
                  className="gallery-item-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="category-tag">{item.category}</span>
                </motion.div>
              </Suspense>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {selectedIndex !== null && (
        <ImageViewer
          images={galleryItems}
          currentIndex={selectedIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}

export default Gallery;
