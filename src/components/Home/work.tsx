import Image from 'next/image';
import React from 'react';
import upload from '@/assets/upload-file-svgrepo-com.svg';
import select from '@/assets/select-svgrepo-com.svg';
import apply from '@/assets/auto-apply-svgrepo-com.svg';
import download from '@/assets/download-minimalistic-svgrepo-com.svg';

export const howItWorksSteps = [
  {
    title: 'Upload',
    description: 'Choose an image from your device to get started.',
    icon: upload,
  },
  {
    title: 'Select Tool',
    description:
      'Pick the editing tool that suits your needs from the toolbar.',
    icon: select,
  },
  {
    title: 'Apply',
    description: 'Let the AI work its magic to transform your image.',
    icon: apply,
  },
  {
    title: 'Download',
    description: 'Save the edited image back to your device.',
    icon: download,
  },
];
// adjust path as needed

const Work = () => {
  return (
    <div
      className='max-w-[800px] mx-auto my-6 flex flex-col gap-10'
      id='how-it-works'>
      <h2 className='font-semibold text-[30px] text-slate-600 text-center'>
        How It Works
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {howItWorksSteps.map((step, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center'>
            <div className='p-6 bg-[#B4E3E1] rounded-full mb-3'>
              <Image
                src={step.icon}
                alt={step.title}
                height={60}
                width={60}
              />
            </div>
            <h3 className='font-semibold text-lg'>{step.title}</h3>
            <p className='text-sm text-gray-600 mt-1'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
