import React from 'react';

const LoadingScreen = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center animate-fade-in">
      <div className="text-center">
        {/* GIF загрузки */}
        <img
          src="/images/loading.gif"
          alt="Загрузка..."
          className="w-64 h-64 md:w-96 md:h-96 object-contain mx-auto"
        />
        
        {/* Опциональный текст загрузки */}
        <p className="text-black text-lg md:text-xl font-light tracking-wider mt-8 animate-pulse">
          VALUES
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;