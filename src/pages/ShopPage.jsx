import React from 'react';
import ProductCard from '../components/product/ProductCard';

const ShopPage = ({ products, onAddToCart, onViewProduct }) => {
  return (
    <div className="min-h-screen">
      {/* Hero секция с логотипом */}
      <div className="text-center py-12 md:py-20 animate-slide-up px-4">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-black mb-4"
          style={{ fontFamily: 'acne-studios, system-ui, -apple-system' }}
        >
          VALUES
        </h1>
        <div className="w-16 md:w-24 h-px bg-gray-300 mx-auto" />
      </div>

      {/* Каталог товаров */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;