import { auth } from '@/auth';
import connectDB from '@/db/mongodb';
import { imageModel } from '@/db/schema';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
  params: { id: string };
}

type Image = {
  url: string;
  prompt?: string | null;
  title: string;
  original: string;
  transformation: string;
};

const getImageById = async (id: string) => {
  await connectDB();
  const image = await imageModel.findById(id);

  return {
    url: image.imageUrl,
    prompt: image.prompt,
    title: image.title,
    original: image.original,
    transformation: image.edit,
  };
};

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  const image: Image = await getImageById(id);

  return (
    <main className='p-4 md:p-8'>
      {' '}
      {/* Added responsive padding */}
      <h2 className='text-2xl md:text-4xl text-custom-orange font-semibold mb-4 md:mb-6'>
        {' '}
        {/* Responsive font size and margin */}
        {image.title}
      </h2>
      <div className='flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8'>
        {' '}
        {/* Responsive gap and margin */}
        <p className='text-sm md:text-base'>
          {' '}
          {/* Responsive text size */}
          <span className='text-gray-600'>Transformation: </span>
          <span className='text-gray-400'>{image.transformation}</span>
        </p>
        {image.prompt && image.prompt !== '' && (
          <p className='text-sm md:text-base'>
            {' '}
            {/* Responsive text size */}
            <span className='text-gray-600'>Prompt: </span>
            <span className='text-gray-400'>{image.prompt}</span>
          </p>
        )}
      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-8 items-start'>
        {' '}
        {/* Responsive gap */}
        <div className='w-full md:w-1/2'>
          <h3 className='text-lg md:text-2xl font-semibold mb-2 md:mb-3 text-gray-600'>
            Original Image
          </h3>{' '}
          {/* Responsive font size and margin */}
          <div className='relative aspect-square w-full'>
            <Image
              src={image.original}
              alt='Original'
              fill
              sizes='(max-width: 768px) 100vw, (min-width: 769px) 500px'
              className='object-contain rounded-lg border border-gray-700'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <h3 className='text-lg md:text-2xl font-semibold mb-2 md:mb-3 text-gray-600'>
            Morphed Image
          </h3>{' '}
          {/* Responsive font size and margin */}
          <div className='relative aspect-square w-full'>
            <Image
              src={image.url}
              alt='Morphed'
              fill
              sizes='(max-width: 768px) 100vw, (min-width: 769px) 500px'
              className='object-contain rounded-lg border border-gray-700'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
