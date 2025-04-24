import React from 'react';
import { BsFileImage, BsStars } from 'react-icons/bs';
import { AiOutlineScan } from 'react-icons/ai';
import { BiSolidLayerPlus } from 'react-icons/bi';
import { PiSelectionBackgroundBold } from 'react-icons/pi';

const featureDescriptions = [
  {
    icon: (
      <BsFileImage
        size={30}
        className='m-[14px]'
      />
    ),
    title: 'Restore Images',
    text: 'Bring your old, blurry, or damaged photos back to life with powerful AI enhancement tools designed to recover fine details and improve image clarity.',
    color: '#B4E3E1',
  },
  {
    icon: (
      <BsStars
        size={30}
        className='m-[14px]'
      />
    ),
    title: 'AI Gen Fill',
    text: 'Effortlessly expand your images beyond their original borders or fill missing areas using intelligent AI that blends new content seamlessly with your photo.',
    color: '#F9CFC5',
  },
];

const features2 = [
  {
    icon: (
      <AiOutlineScan
        size={30}
        className='m-[14px]'
      />
    ),
    title: 'Object Remove',
    text: 'Automatically detect and remove unwanted objects from photos.',
    color: '#F9CFC5',
  },
  {
    icon: (
      <BiSolidLayerPlus
        size={30}
        className='m-[14px]'
      />
    ),
    title: 'Recolor Images',
    text: 'Change the colors of objects within an image using smart detection.',
    color: '#F1D27C',
  },
  {
    icon: (
      <PiSelectionBackgroundBold
        size={30}
        className='m-[14px]'
      />
    ),
    title: 'Remove Backgrounds',
    text: 'Easily remove or replace image backgrounds in just one click.',
    color: '#B4E3E1',
  },
];

const Features = () => {
  return (
    <main
      className='p-6 max-w-[1150px] mx-auto gap-6 flex flex-col items-center justify-center'
      id='features'>
      <h2 className='text-[30px] text-gray-700 font-semibold mb-4'>
        What Does <span className='text-custom-orange'>Morphify</span> Offer
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        {featureDescriptions.map((feature, index) => (
          <div
            className={`space-y-4 p-8 border-[1px] border-slate-600 rounded-md`}
            style={{ backgroundColor: feature.color }}
            key={index}>
            <div className='bg-light-orange text-custom-orange rounded-full w-[60px] flex items-center justify-center '>
              {feature.icon}
            </div>
            <div
              className={` text-[${feature.color}] brightness-95 space-y-4 `}>
              <p className={`text-2xl text-[${feature.color}] brightness-200`}>
                {feature.title}
              </p>
              <p className='text-sm'>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        {features2.map((features, index) => (
          <div
            className={`space-y-4 p-8 border-[1px] border-slate-600 rounded-md`}
            style={{ backgroundColor: features.color }}
            key={index}>
            <div className='bg-light-orange text-custom-orange rounded-full w-[60px] flex items-center justify-center '>
              {features.icon}
            </div>
            <div
              className={` text-[${features.color}] brightness-95 space-y-4`}>
              <p className={`text-2xl text-[${features.color}] brightness-200`}>
                {features.title}
              </p>
              <p className='text-sm'>{features.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Features;
