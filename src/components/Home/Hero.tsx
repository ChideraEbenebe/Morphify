import React from 'react';
import logo from '@/assets/heroImage.svg';
import Image from 'next/image';
import Button from './button';

const Hero = () => {
  return (
    <header className='flex justify-between items-center gap-20 max-w-[1100px] mx-auto p-6 pt-16'>
      <div className='space-y-4 max-w-[500px]'>
        <h2 className='text-custom-orange text-[32px] font-bold'>
          Say goodbye to complex editing tools
        </h2>
        <p className='text-slate-600'>
          Our AI-powered image editor helps you transform photos in seconds—no
          design skills required.
        </p>

        <div className='mt-10'>
          <Button className='bg-[#B4E3E1]'>Try For Free</Button>
        </div>
      </div>
      <div className='md:block hidden'>
        <Image
          src={logo}
          alt='Morphify Logo'
          height={420}
          width={420}
        />
      </div>
    </header>
  );
};

export default Hero;
