import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 flex items-center gap-6 animate-slide-up">
      {/* Изображение товара */}
      <img
        src={item.images[item.selectedColor][0]}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-xl"
      />

      {/* Информация о товаре */}
      <div className="flex-1">
        <h3 className="text-white font-light text-lg mb-1">
          {item.name}
        </h3>
        <p className="text-white/60 text-sm mb-2">
          Color: {item.selectedColor === 'black' ? 'Black' : 'Brown'} • Size: {item.size}
        </p>
        
        {/* Количество */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
            className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4 text-white" />
          </button>
          
          <span className="text-white font-medium min-w-[2rem] text-center">
            {item.quantity}
          </span>
          
          <button
            onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
            className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Цена */}
      <div className="text-right">
        <p className="text-white text-lg font-light mb-2">
          {((item.price * item.quantity) / 100).toLocaleString('ru-RU')} ₽
        </p>
        
        {/* Кнопка удаления */}
        <button
          onClick={() => onRemove(item.cartId)}
          className="text-white/40 hover:text-white transition-colors"
          aria-label="Remove item"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;