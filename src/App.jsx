import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import NavigationBar from './components/layout/NavigationBar';
import LoadingScreen from './components/ui/LoadingScreen';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import ProductDetail from './components/product/ProductDetail';
import { CartProvider, useCart } from './context/CartContext';
import { products } from './data/products';
import './styles/globals.css';
import './styles/animations.css';

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('shop');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
  } = useCart();

  // Загрузочный экран на 5 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const user = {
    id: '12345',
    name: 'Values User',
    username: 'values_user',
  };

  const handleAddToCart = (product, color, size) => {
    addToCart(product, color, size);
  };

  const handleCheckout = () => {
    console.log('Оформление заказа...', cart);
    alert('Функция оформления заказа скоро появится!');
  };

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      
      <Layout>
        {currentPage === 'shop' && (
          <ShopPage
            products={products}
            onAddToCart={handleAddToCart}
            onViewProduct={setSelectedProduct}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage
            cart={cart}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onCheckout={handleCheckout}
          />
        )}

        {currentPage === 'profile' && (
          <ProfilePage
            user={user}
            orders={[]}
            bonuses={250}
          />
        )}

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}

        <NavigationBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          cartCount={getCartCount()}
        />
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;