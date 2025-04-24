'use client';

import React from 'react';
import { Input } from '../ui/input';

import Transformations from '../transform/transformations';
import Button from '../transform/Button';

const InputForm = () => {
  return (
    <div className='flex flex-col gap-2 mb-6'>
      <label
        htmlFor='#title'
        className='text-gray-400 text-sm font-bold'>
        Image Title
      </label>
      <div className=''>
        <Input
          type='text'
          id='title'
          placeholder='puppy in a shirt'
          className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
        />
      </div>
      <div className='mt-6'>
        <label
          htmlFor='#remove'
          className='text-gray-400 text-sm font-bold'>
          Prompt
        </label>
        <div className='mt-2'>
          <Input
            type='text'
            id='remove'
            placeholder="Puppy' walking into walmart with a green shirt"
            className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
          />
        </div>
      </div>
      <div className='grid place-items-center gap-4 mt-8 '>
        <Transformations />
      </div>
      <Button />
    </div>
  );
};

export default InputForm;
