import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import Logo from '@/assets/footer-removebg-preview.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
// import { Dancing_Script } from 'next/font/google';

// const dScript = Dancing_Script({
//   weight: '400',
//   display: 'swap',
// });

const Footer = () => {
  return (
    <footer className='footer footer-horizontal footer-center bg-[#B4E3E1] text-slate-600 p-10'>
      <aside>
        <Image
          src={Logo}
          alt='logo'
          height={80}
          width={80}
        />
        <p className='font-bold'>
          <span className={` antialiased text-xl`}>Emmanuel Chidera</span>
          <br />
          Providing reliable tech since 2022
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <Link
            href={'https://github.com/ChideraEbenebe/'}
            target='_blank'>
            <FaGithub
              size={24}
              className='hover:text-slate-600'
            />
          </Link>

          <Link
            href={'https://www.facebook.com/profile.php?id=100083008727885'}
            target='_blank'>
            <FaFacebook
              size={24}
              className='hover:text-blue-400'
            />
          </Link>

          <Link
            href={'https://x.com/ChideraEbenebe'}
            target='_blank'>
            <BsTwitterX
              size={24}
              className='hover:text-slate-600'
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
