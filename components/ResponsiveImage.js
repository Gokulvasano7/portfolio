import React from 'react';

function ResponsiveImage({ src, alt, sizes }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      srcSet={`${src} 300w,
              ${src} 600w,
              ${src} 900w`}
      sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );
}

export default ResponsiveImage; 