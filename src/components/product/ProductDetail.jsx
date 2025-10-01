import React, { useState } from 'react';
import { X } from 'lucide-react';
import ProductGallery from './ProductGallery';
import ColorSelector from '../ui/ColorSelector';

const ProductDetail = ({ product, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-scale-in">
      <div className="glass-effect rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Заголовок и кнопка закрытия */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-black">
              {product.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black transition-colors hover:rotate-90 duration-300"
              aria-label="Закрыть"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Основной контент */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Галерея изображений */}
            <ProductGallery 
              images={product.images[selectedColor]} 
              productName={product.name}
            />

            {/* Информация о товаре */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-4 tracking-wide uppercase">
                  Премиум коллекция
                </p>
                
                <p className="text-black leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Детали товара */}
                <ul className="text-gray-600 text-sm space-y-2 mb-8">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Выбор цвета */}
                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />

                {/* Выбор размера */}
                <div className="mb-8">
                  <p className="text-gray-600 text-sm mb-3 tracking-wide uppercase">
                    Выберите размер
                  </p>
                  <div className="flex gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-xl border-2 transition-all ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 text-black hover:border-gray-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Цена */}
                <p className="text-3xl md:text-4xl font-light text-black mb-8">
                  {(product.price / 100).toLocaleString('ru-RU')} ₽
                </p>
              </div>

              {/* Кнопка добавления */}
              <button
                onClick={() => {
                  onAddToCart(product, selectedColor, selectedSize);
                  onClose();
                }}
                className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;