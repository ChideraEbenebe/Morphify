import Link from 'next/link';
import React from 'react';
import Button from './button';

const homeLinks = [
  { id: 2, href: '#features', text: 'Features' },
  { id: 3, href: '#how-it-works', text: 'How it works' },
  { id: 1, href: '#about', text: 'About' },
];

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full p-6 backdrop-blur-lg'>
      <div className='flex items-center justify-between gap-4 max-w-[1150px] mx-auto'>
        <div className='font-bold text-slate-800 text-3xl font-sans'>
          <Link href={'/'}>Morphify</Link>
        </div>
        <div>
          <ul className='flex justify-between items-center gap-6'>
            {homeLinks.map((link) => (
              <li
                key={link.id}
                className='text-bold  hover:text-custom-orange duration-150 text-slate-600'>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button className='bg-custom-orange'>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
