import React from 'react';

const GlassCard = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`glass-effect rounded-2xl p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;