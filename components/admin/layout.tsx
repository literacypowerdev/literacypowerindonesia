import React from 'react';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=''>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="bg-primary flex-1 p-4 text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;