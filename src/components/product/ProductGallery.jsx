import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      {/* Главное изображение */}
      <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-white/5">
        <img
          src={images[currentIndex]}
          alt={`${productName} - ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Миниатюры */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              currentIndex === idx 
                ? 'border-white scale-95' 
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <img 
              src={img} 
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;