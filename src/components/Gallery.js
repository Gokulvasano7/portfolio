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


function Gallery() {
  const galleryItems = [
    {
      image: image1,
      title: "Performance at National Theatre",
      description: "Lead role in Hamlet, 2023"
    },
    {
      image: image2,
      title: "Behind the Scenes",
      description: "Film shoot for 'The Journey'"
    },
    {
      image: image3,
      title: "Stage Performance",
      description: "A Midsummer Night's Dream"
    },
    {
      image: image4,
      title: "Theatre Workshop",
      description: "Method Acting Session, 2023"
    },
    {
      image: image5,
      title: "Film Premiere",
      description: "Red Carpet Event, 2023"
    },
    {
      image: image6,
      title: "Rehearsal Session",
      description: "Preparing for Romeo & Juliet"
    },
    {
      image: image7,
      title: "Voice Training",
      description: "Vocal Workshop, 2023"
    },
    {
      image: image8,
      title: "Stage Combat",
      description: "Fight Choreography Session"
    },
    {
      image: image9,
      title: "Character Study",
      description: "Preparing for Macbeth"
    },
    {
      image: image10,
      title: "Film Set",
      description: "On Location Shoot, 2023"
    },
    {
      image: image11,
      title: "Drama Workshop",
      description: "Group Performance Session"
    },
    {
      image: image12,
      title: "Costume Fitting",
      description: "Period Drama Preparation"
    },
    {
      image: image13,
      title: "Script Reading",
      description: "New Project Development"
    },
    {
      image: image14,
      title: "Dance Practice",
      description: "Movement Workshop"
    },
    {
      image: image15,
      title: "Backstage Moments",
      description: "Theatre Life, 2023"
    }
  ];

  return (
    <div className="gallery-section">
      <h1>Photo Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} />
            </a>
            <div className="gallery-item-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;