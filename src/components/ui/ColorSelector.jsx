import React from 'react';

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  const colorMap = {
    black: { bg: 'bg-black', label: 'Черный' },
    brown: { bg: 'bg-amber-900', label: 'Коричневый' },
    white: { bg: 'bg-white', label: 'Белый' },
    gray: { bg: 'bg-gray-500', label: 'Серый' },
  };

  return (
    <div className="mb-8">
      <p className="text-gray-600 text-sm mb-3 tracking-wide uppercase">
        Выберите цвет
      </p>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
              colorMap[color].bg
            } ${
              selectedColor === color
                ? 'border-black scale-110 shadow-lg'
                : 'border-gray-300 hover:border-gray-500'
            }`}
            aria-label={colorMap[color].label}
            title={colorMap[color].label}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;