import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-6 animate-slide-up">
      {/* Изображение товара */}
      <img
        src={item.images[item.selectedColor][0]}
        alt={item.name}
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl flex-shrink-0"
      />

      {/* Информация о товаре */}
      <div className="flex-1 min-w-0">
        <h3 className="text-black font-light text-base md:text-lg mb-1 truncate">
          {item.name}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm mb-2">
          Цвет: {item.selectedColor === 'black' ? 'Черный' : 'Коричневый'} • Размер: {item.size}
        </p>
        
        {/* Количество */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
            className="w-7 h-7 md:w-8 md:h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-3 h-3 md:w-4 md:h-4 text-black" />
          </button>
          
          <span className="text-black font-medium min-w-[2rem] text-center text-sm md:text-base">
            {item.quantity}
          </span>
          
          <button
            onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
            className="w-7 h-7 md:w-8 md:h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors"
          >
            <Plus className="w-3 h-3 md:w-4 md:h-4 text-black" />
          </button>
        </div>
      </div>

      {/* Цена */}
      <div className="text-right flex-shrink-0">
        <p className="text-black text-base md:text-lg font-light mb-2">
          {((item.price * item.quantity) / 100).toLocaleString('ru-RU')} ₽
        </p>
        
        {/* Кнопка удаления */}
        <button
          onClick={() => onRemove(item.cartId)}
          className="text-gray-400 hover:text-black transition-colors"
          aria-label="Удалить товар"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;