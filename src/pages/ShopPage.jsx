import React from 'react';
import ProductCard from '../components/product/ProductCard';

const ShopPage = ({ products, onAddToCart, onViewProduct }) => {
  return (
    <div className="min-h-screen">
      {/* Hero секция с логотипом */}
      <div className="text-center py-20 animate-slide-up">
        <h1 
          className="text-8xl md:text-9xl font-light tracking-tighter text-white mb-4"
          style={{ fontFamily: 'acne-studios, system-ui, -apple-system' }}
        >
          VALUES
        </h1>
        <div className="w-24 h-px bg-white/30 mx-auto" />
      </div>

      {/* Каталог товаров */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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