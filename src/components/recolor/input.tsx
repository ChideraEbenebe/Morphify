'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import ImageUpload from './upload';
import Transformations from '../transform/transformations';
import Button from './Button';

const InputForm = () => {
  const [input, setInput] = useState({
    title: '',
    object: '',
    newColor: '',
  });
  return (
    <div className='flex flex-col gap-2 mb-6'>
      <label
        htmlFor='title'
        className='text-gray-400 text-sm font-bold'>
        Image Title
      </label>
      <div>
        <Input
          type='text'
          id='title'
          onChange={(e) => {
            setInput({ ...input, title: e.target.value });
          }}
          value={input.title}
          placeholder='puppy in a shirt'
          className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
        />
      </div>

      {/* Updated Flex Layout for Inputs */}
      <div className='mt-6 flex w-full gap-4'>
        {/* Object To Recolor */}
        <div className='flex-1'>
          <label
            htmlFor='recolor'
            className='text-gray-400 text-sm font-bold'>
            Object To Recolor
          </label>
          <div className='mt-2'>
            <Input
              type='text'
              id='recolor'
              onChange={(e) => {
                setInput({ ...input, object: e.target.value });
              }}
              value={input.object}
              placeholder="puppy's shirt"
              className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input w-full'
            />
          </div>
        </div>

        {/* New Color */}
        <div className='flex-1'>
          <label
            htmlFor='newcolor'
            className='text-gray-400 text-sm font-bold'>
            New Color
          </label>
          <div className='mt-2'>
            <Input
              type='text'
              id='newcolor'
              onChange={(e) => {
                setInput({ ...input, newColor: e.target.value });
              }}
              value={input.newColor}
              placeholder='Blue'
              className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input w-full'
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-8'>
        <ImageUpload />
        <Transformations />
      </div>
      <Button input={input} />
    </div>
  );
};

export default InputForm;
