import React from 'react';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-fit flex flex-row justify-start">
      <Sidebar />
      <div className="w-full px-10 py-4 text-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;