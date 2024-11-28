import React from 'react';
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
import ImageViewer from './ImageViewer';
import AnimatedBackground from './AnimatedBackground';


function Gallery() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => 
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => 
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const galleryItems = [
    {
      image: image1,

    },
    {
      image: image2,

    },
    {
      image: image3,

    },
    {
      image: image4,

    },
    {
      image: image5,

    },
    {
      image: image6,

    },
    {
      image: image7,

    },
    {
      image: image8,

    },
    {
      image: image9,
   
    },
    {
      image: image10,

    },
    {
      image: image11,

    },
    {
      image: image12,

    },
    {
      image: image13,

    },
    {
      image: image14,

    },
    {
      image: image15,

    },
    {
      image: image16
    },
    {
      image: image17
    },
    {
      image: image18
    },
    {
      image: image19
    },
    {
      image: image20
    },
    {
      image: image21
    },
    {
      image: image22
    },
    {
      image: image23
    },
    {
      image: image24
    },
    {
      image: image25
    }
  ];

  return (
    <div className="gallery-section">
      <AnimatedBackground type="gallery" />
      <h1>Photo Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            className="gallery-item" 
            onClick={() => handleImageClick(index)}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>

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
