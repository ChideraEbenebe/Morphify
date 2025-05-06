'use client';

import { useImageStore } from '@/lib/store/useFileStore';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Spinner from '../spinner/spinner';
import Image from 'next/image'; // Import the Image component

const Transformations = () => {
  const transformedImage = useImageStore((state) => state.transformedImage);
  const loading = useImageStore((state) => state.loading);
  const pathname = usePathname();
  const reset = useImageStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [pathname, reset]);

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-custom-orange mb-4'>
        Transformation
      </h2>

      {transformedImage ? (
        <div className='w-full max-w-[500px] h-full aspect-square relative rounded-xl overflow-hidden'>
          <Image
            src={transformedImage}
            alt='Transformed image'
            fill
            style={{ objectFit: 'contain' }} // Or 'cover', depending on desired behavior
            className='rounded-lg'
          />
        </div>
      ) : (
        <div className='w-96 h-72 flex items-center justify-center shadow-inner shadow-accent-foreground bg-gray-50 rounded-xl transition-all'>
          {loading ? (
            <Spinner />
          ) : (
            <p className='text-gray-500'>Transformed Image</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Transformations;
