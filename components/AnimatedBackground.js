import React from 'react';
import { motion } from 'framer-motion';

function AnimatedBackground({ type }) {
  const colors = {
    home: ['#4FACFE', '#00F2FE', '#43E97B', '#38F9D7', '#4FACFE'], // Added home colors
    portfolio: ['#FF0000', '#FFA500', '#FFD700', '#FF69B4', '#FF0000'],
    gallery: ['#FF69B4', '#800080', '#00FFFF', '#39FF14', '#FF69B4'],
    contact: ['#FFD700', '#32CD32', '#008000', '#FFD700']
  };

  // Add a default type if none is provided
  const backgroundType = type || 'home';
  
  // Use the colors for the specified type, or fall back to home colors
  const backgroundColors = colors[backgroundType] || colors.home;

  return (
    <div className={`background-container ${backgroundType}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="animated-blob"
          initial={{
            scale: 0.5
          }}
          animate={{
            scale: [0.5, 2.5, 0.5],
            rotate: [0, 180, 360],
            borderRadius: ['40% 60% 60% 40%', '60% 40% 40% 60%', '40% 60% 60% 40%'],
            background: backgroundColors.map((color, idx) => 
              `linear-gradient(45deg, ${color}, ${backgroundColors[(idx + 1) % backgroundColors.length]})`
            ),
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            background: {
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }
          }}
          style={{
            opacity: 0.2 + (i * 0.05),
            width: '500px',
            height: '500px',
            position: 'absolute',
            left: 'calc(50% - 300px)',
            top: 'calc(50% - 300px)',
            transformOrigin: 'center center'
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;