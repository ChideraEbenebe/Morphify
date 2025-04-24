import Sidebar from '@/components/Sidebar/sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex  '>
      <div className='w-[23%]'>
        <Sidebar />
      </div>
      <div className='w-[77%]'>{children}</div>
    </div>
  );
};

export default layout;
