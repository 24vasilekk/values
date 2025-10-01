import React from 'react';

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  const colorMap = {
    black: { bg: 'bg-black', label: 'Black' },
    brown: { bg: 'bg-amber-900', label: 'Brown' },
    white: { bg: 'bg-white', label: 'White' },
    gray: { bg: 'bg-gray-500', label: 'Gray' },
  };

  return (
    <div className="mb-8">
      <p className="text-white/60 text-sm mb-3 tracking-wide uppercase">
        Select Color
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
                ? 'border-white scale-110 shadow-lg'
                : 'border-white/30 hover:border-white/60'
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