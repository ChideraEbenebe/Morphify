import Image from 'next/image';
import React from 'react';
import logo from '@/assets/morphify-logo.png';
import Navlinks from './navlinks';

const Sidebar = () => {
  return (
    <aside className=' p-6 fixed overflow-y-auto h-full shadow-lg hide-scrollbar '>
      <div className='pb-4'>
        <Image
          src={logo}
          alt='Morphify Logo'
          width={210}
          height={60}
        />
      </div>
      <div className=' '>
        <Navlinks />
      </div>
    </aside>
  );
};

export default Sidebar;
