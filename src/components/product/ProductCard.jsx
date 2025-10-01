import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [hoveredColor, setHoveredColor] = useState(product.colors[0]);

  return (
    <div className="group relative">
      {/* Главное изображение */}
      <div 
        className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Информация о товаре */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-light text-lg tracking-wider mb-2">
            {product.name}
          </h3>
          <p className="text-white/80 text-sm">
            {(product.price / 100).toLocaleString('ru-RU')} ₽
          </p>
        </div>
      </div>

      {/* Выбор цвета и кнопка добавления */}
      <div className="mt-4 flex items-center justify-between">
        {/* Переключатель цветов */}
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onMouseEnter={() => setHoveredColor(color)}
              onMouseLeave={() => setHoveredColor(product.colors[0])}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                color === 'black' ? 'bg-black' : 'bg-amber-900'
              } ${
                hoveredColor === color 
                  ? 'border-white scale-110 shadow-lg' 
                  : 'border-white/30 hover:border-white/60'
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
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;