'use client';

import { useImageStore } from '@/lib/store/useFileStore';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Spinner from '../spinner/spinner';
// import Spinner from '@/components/Spinner' // make sure you have this

const Transformations = () => {
  const transformedImage = useImageStore((state) => state.transformedImage);
  const loading = useImageStore((state) => state.loading);
  const pathname = usePathname();
  const reset = useImageStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [pathname]);

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-custom-orange mb-4'>
        Transformation
      </h2>

      <div className='w-96 h-72 flex items-center justify-center shadow-inner shadow-accent-foreground bg-gray-50 rounded-xl transition-all'>
        {loading ? (
          <Spinner />
        ) : transformedImage ? (
          <img
            src={transformedImage}
            alt='Transformed'
            className='w-full h-full object-cover rounded-lg'
          />
        ) : (
          <p className='text-gray-500'>Transformed Image</p>
        )}
      </div>
    </div>
  );
};

export default Transformations;
