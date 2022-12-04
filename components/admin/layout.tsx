import React, { ReactNode } from 'react'
import Sidebar from './sidebar';

const Layout = ({ children }: any) => {
    return (
        <div className="h-screen flex flex-row justify-start">
          <Sidebar />
          <div className="bg-primary flex-1 p-4 text-white">
              {children}
          </div>
        </div>
      );
}

export default Layout