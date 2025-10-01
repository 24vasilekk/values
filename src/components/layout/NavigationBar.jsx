import React from 'react';
import { ShoppingBag, Home, ShoppingCart } from 'lucide-react';

const NavigationBar = ({ currentPage, setCurrentPage, cartCount }) => {
  const navItems = [
    { id: 'shop', icon: ShoppingBag, label: 'Shop' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart', badge: cartCount },
    { id: 'profile', icon: Home, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up px-4 w-full max-w-md">
      <div className="glass-effect rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl">
        <div className="flex items-center justify-around md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative transition-all duration-300 ${
                  isActive ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'
                }`}
                aria-label={item.label}
              >
                <Icon 
                  className={`w-5 h-5 md:w-6 md:h-6 ${
                    isActive ? 'text-black' : 'text-gray-600'
                  }`} 
                />
                
                {item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center font-bold animate-scale-in">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;