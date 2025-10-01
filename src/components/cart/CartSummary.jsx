import React from 'react';

const CartSummary = ({ total, onCheckout }) => {
  const shipping = 0; // Бесплатная доставка
  const finalTotal = total + shipping;

  return (
    <div className="glass-effect rounded-xl md:rounded-2xl p-6 md:p-8 animate-slide-up sticky top-4">
      {/* Расчеты */}
      <div className="space-y-3 md:space-y-4 mb-6">
        <div className="flex justify-between text-gray-600 text-sm md:text-base">
          <span>Сумма</span>
          <span>{(total / 100).toLocaleString('ru-RU')} ₽</span>
        </div>
        
        <div className="flex justify-between text-gray-600 text-sm md:text-base">
          <span>Доставка</span>
          <span className="text-green-600">Бесплатно</span>
        </div>
        
        <div className="h-px bg-gray-200" />
        
        <div className="flex justify-between items-center">
          <span className="text-black text-base md:text-lg">Итого</span>
          <span className="text-black text-2xl md:text-3xl font-light">
            {(finalTotal / 100).toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>

      {/* Кнопка оформления */}
      <button 
        onClick={onCheckout}
        className="w-full bg-black text-white py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95"
      >
        Оформить заказ
      </button>

      {/* Дополнительная информация */}
      <p className="text-gray-400 text-xs text-center mt-4">
        Безопасная оплата через Stripe
      </p>
    </div>
  );
};

export default CartSummary;