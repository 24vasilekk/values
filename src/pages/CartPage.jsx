import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const CartPage = ({ cart, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-6xl font-light tracking-wider text-white mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          /* Пустая корзина */
          <div className="text-center py-20 animate-slide-up">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-white/20" />
            </div>
            <p className="text-white/40 text-lg mb-2">Your cart is empty</p>
            <p className="text-white/30 text-sm">Add some items to get started</p>
          </div>
        ) : (
          /* Список товаров */
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
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