import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pb-32">
        {children}
      </main>
    </div>
  );
};

export default Layout;