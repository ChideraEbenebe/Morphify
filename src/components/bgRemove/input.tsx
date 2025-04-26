'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import ImageUpload from './upload';
import Transformations from '../transform/transformations';
import Button from './Button';

const InputForm = () => {
  const [title, setTitle] = useState('');
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder='puppy in a shirt'
          className='placeholder:text-slate-300 placeholder:text-md h-14 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
        />
        <div className='grid md:grid-cols-2  gap-4 mt-8'>
          <ImageUpload />
          <Transformations />
        </div>
        <Button title={title} />
      </div>
    </div>
  );
};

export default InputForm;
