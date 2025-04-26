import Sidebar from '@/components/Sidebar/sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 ml-[100px] md:ml-[280px]'>{children}</main>
    </div>
  );
};

export default layout;
