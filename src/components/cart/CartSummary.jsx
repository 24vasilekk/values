import React from 'react';

const CartSummary = ({ total, onCheckout }) => {
  const shipping = 0; // Бесплатная доставка
  const finalTotal = total + shipping;

  return (
    <div className="glass-effect rounded-2xl p-8 animate-slide-up">
      {/* Расчеты */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-white/60">
          <span>Subtotal</span>
          <span>{(total / 100).toLocaleString('ru-RU')} ₽</span>
        </div>
        
        <div className="flex justify-between text-white/60">
          <span>Shipping</span>
          <span className="text-green-400">Free</span>
        </div>
        
        <div className="h-px bg-white/10" />
        
        <div className="flex justify-between items-center">
          <span className="text-white/80 text-lg">Total</span>
          <span className="text-white text-3xl font-light">
            {(finalTotal / 100).toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>

      {/* Кнопка оформления */}
      <button 
        onClick={onCheckout}
        className="w-full bg-white text-black py-4 rounded-2xl text-lg font-medium hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-95"
      >
        Proceed to Checkout
      </button>

      {/* Дополнительная информация */}
      <p className="text-white/40 text-xs text-center mt-4">
        Secure checkout powered by Stripe
      </p>
    </div>
  );
};

export default CartSummary;