import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black">
      <main className="pb-24 md:pb-32">
        {children}
      </main>
    </div>
  );
};

export default Layout;