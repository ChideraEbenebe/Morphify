import Sidebar from '@/components/Sidebar/sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-[400px]'>
        <Sidebar />
      </div>
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default layout;
