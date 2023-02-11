import React, { ReactComponentElement, ReactNode } from 'react'
import Sidebar from './sidebar';

const Layout = ({ children }: React.PropsWithChildren) => {
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
}

export default Layout