'use client'; // Required for useState

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Make sure to install lucide-react
import Button from './button';

const homeLinks = [
  { id: 2, href: '#features', text: 'Features' },
  { id: 3, href: '#how-it-works', text: 'How it works' },
  { id: 1, href: '#about', text: 'About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Added z-50 to ensure nav stays on top of content
    <nav className='sticky top-0 w-full p-6 backdrop-blur-lg z-50'>
      <div className='flex items-center justify-between gap-4 max-w-[1150px] mx-auto'>
        {/* Logo - Always Visible */}
        <div className='font-bold text-slate-800 text-3xl font-sans z-50 relative'>
          <Link
            href={'/'}
            onClick={() => setIsOpen(false)}>
            Morphify
          </Link>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className='hidden md:block'>
          <ul className='flex justify-between items-center gap-6'>
            {homeLinks.map((link) => (
              <li
                key={link.id}
                className='font-bold hover:text-custom-orange duration-150 text-slate-600'>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button - Hidden on Mobile */}
        <div className='hidden md:block'>
          <Button className='bg-custom-orange'>Get Started</Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className='md:hidden text-slate-800 z-50 relative'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - "Curtain" Animation */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-40 overflow-hidden transition-[height] duration-500 ease-in-out flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'h-screen' : 'h-0'
        }`}>
        <ul className='flex flex-col items-center gap-8 text-xl'>
          {homeLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='font-bold text-slate-600 hover:text-custom-orange duration-150'>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setIsOpen(false)}>
          <Button className='bg-custom-orange text-lg px-8 py-3'>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
