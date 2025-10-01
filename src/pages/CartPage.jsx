import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const CartPage = ({ cart, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 md:pt-20 pb-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-wider text-black mb-8 md:mb-12">
          Корзина
        </h1>

        {cart.length === 0 ? (
          /* Пустая корзина */
          <div className="text-center py-12 md:py-20 animate-slide-up">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 md:w-10 md:h-10 text-gray-300" />
            </div>
            <p className="text-gray-500 text-lg mb-2">Ваша корзина пуста</p>
            <p className="text-gray-400 text-sm">Добавьте товары, чтобы начать</p>
          </div>
        ) : (
          /* Список товаров */
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.cartId}
                  item={item}
                  onRemove={onRemoveItem}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </div>

            <div>
              <CartSummary 
                total={total}
                onCheckout={onCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;