'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/morphify-logo.png';
import Navlinks from './navlinks';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import clsx from 'clsx';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className='fixed top-4 left-4 z-50 md:hidden p-2 rounded-md hover:bg-gray-100 mt-4'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoIosClose size={40} /> : <CiMenuFries size={40} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className='w-[300px] p-6 fixed overflow-y-auto h-full shadow-lg hide-scrollbar hidden md:block'>
        <div className='pb-4'>
          <Image
            src={logo}
            alt='Morphify Logo'
            width={210}
            height={60}
          />
        </div>
        <div>
          <Navlinks />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={clsx(
          'w-[400px] p-6 fixed overflow-y-auto h-full shadow-lg hide-scrollbar bg-white transition-transform duration-300 ease-in-out z-40',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:hidden'
        )}>
        <div className='mt-24'>
          <Navlinks />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 backdrop-blur-xs bg-opacity-50 z-30 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
