import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [hoveredColor, setHoveredColor] = useState(product.colors[0]);

  return (
    <div className="group relative">
      {/* Главное изображение */}
      <div 
        className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-50 border border-gray-200 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-gray-300 hover:shadow-xl"
        onClick={() => onViewDetails(product)}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={product.images[hoveredColor][0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        {/* Градиент при ховере */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Информация о товаре */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-light text-base md:text-lg tracking-wider mb-1 md:mb-2">
            {product.name}
          </h3>
          <p className="text-white/90 text-sm md:text-base">
            {(product.price / 100).toLocaleString('ru-RU')} ₽
          </p>
        </div>
      </div>

      {/* Выбор цвета и кнопка добавления */}
      <div className="mt-3 md:mt-4 flex items-center justify-between gap-2">
        {/* Переключатель цветов */}
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onMouseEnter={() => setHoveredColor(color)}
              onMouseLeave={() => setHoveredColor(product.colors[0])}
              className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 transition-all duration-300 ${
                color === 'black' ? 'bg-black' : 'bg-amber-900'
              } ${
                hoveredColor === color 
                  ? 'border-black scale-110 shadow-lg' 
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              aria-label={`Color: ${color}`}
            />
          ))}
        </div>

        {/* Кнопка добавления в корзину */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product, hoveredColor);
          }}
          className="bg-black text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;