'use client';

import { Skeleton } from '@/components/ui/skeleton';

const ImageGridSkeleton = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className='card w-full shadow-md rounded-xl p-2 relative flex flex-col items-center gap-2'>
          {/* Image Skeleton */}
          <div className='relative w-[250px] h-60 rounded-xl overflow-hidden'>
            <Skeleton className='w-full h-full object-cover' />
            {/* Download icon placeholder */}
            <div className='absolute top-2 right-2'>
              <Skeleton className='w-6 h-6 rounded-full' />
            </div>
          </div>

          {/* Title Section */}
          <div className='w-full flex justify-between items-center px-2 pb-2 pt-1'>
            <Skeleton className='h-4 w-1/3 rounded' />
            <Skeleton className='h-4 w-5' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridSkeleton;
