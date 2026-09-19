'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageSlider({ images, altText }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="img-placeholder" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '350px' }}>
        <span style={{ color: '#aaa' }}>Nessuna immagine</span>
      </div>
    );
  }

  const validImages = images.filter(img => img && img.trim() !== '');

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '350px', overflow: 'hidden' }}>
      <div 
        className="img-placeholder" 
        style={{ 
          backgroundImage: `url('${validImages[currentIndex]}')`,
          height: '100%',
          width: '100%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }}
      ></div>
      
      {validImages.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); goToPrevious(); }}
            style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            &#10094;
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); goToNext(); }}
            style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            &#10095;
          </button>
          <div style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '5px' }}>
            {validImages.map((_, idx) => (
              <span 
                key={idx} 
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: currentIndex === idx ? 'var(--primary-color)' : 'rgba(255,255,255,0.5)' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
