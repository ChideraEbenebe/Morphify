'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { BiSolidLayerPlus } from 'react-icons/bi';
import { BsFileImage, BsStars } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { PiSelectionBackgroundBold } from 'react-icons/pi';
import SignOut from './signOut';

const navLinks = [
  {
    id: 1,
    href: '/b/',
    icon: <GoHomeFill size={24} />,
    text: 'Home',
  },
  {
    id: 2,
    href: '/b/transformation/add/restore',
    icon: <BsFileImage size={24} />,
    text: 'Restore Image',
  },
  {
    id: 3,
    href: '/b/transformation/add/fill',
    icon: <BsStars size={24} />,
    text: 'Generative Fill',
  },
  {
    id: 4,
    href: '/b/transformation/add/remove',
    icon: <AiOutlineScan size={24} />,
    text: 'Object Remove',
  },
  {
    id: 5,
    href: '/b/transformation/add/recolor',
    icon: <BiSolidLayerPlus size={24} />,
    text: 'Object Recolor',
  },
  {
    id: 6,
    href: '/b/transformation/add/bgremove',
    icon: <PiSelectionBackgroundBold size={24} />,
    text: 'Background Remove',
  },
  {
    id: 7,
    href: '/b/profile',
    icon: <FaUser size={24} />,
    text: 'Profile',
  },
];

const Navlinks = () => {
  const pathname = usePathname();
  const mainLinks = navLinks.slice(0, -1);
  const profileLink = navLinks[navLinks.length - 1];

  return (
    <nav className='overflow-hidden w-64 h-full flex flex-col justify-between gap-22'>
      <ul className='flex flex-1 flex-col flex-grow gap-4'>
        {mainLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={clsx(
              'flex gap-4 items-center py-4 rounded-full px-5 text-slate-500 font-bold',
              pathname === link.href
                ? 'bg-gradient-to-br from-orange-300 to-custom-orange text-white'
                : 'hover:bg-slate-100'
            )}>
            <span>{link.icon}</span>
            <span>{link.text}</span>
          </Link>
        ))}
      </ul>

      <ul className='flex flex-col justify-end gap-4'>
        <Link
          href={profileLink.href}
          key={profileLink.id}
          className={clsx(
            'flex gap-4 items-center py-4 rounded-full px-5 text-slate-500 font-bold',
            pathname === profileLink.href
              ? 'bg-gradient-to-br from-orange-300 to-custom-orange text-white'
              : 'hover:bg-slate-100'
          )}>
          <span>{profileLink.icon}</span>
          <span>{profileLink.text}</span>
        </Link>
        <SignOut />
      </ul>
    </nav>
  );
};

export default Navlinks;
