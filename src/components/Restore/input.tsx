'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import ImageUpload from './upload';
import Transformations from '../transform/transformations';
import Button from '../transform/Button';

const InputForm = () => {
  const [input, setInput] = useState('');

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

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
          value={input}
          onChange={onChange}
          placeholder='puppy in a shirt'
          className='placeholder:text-slate-300 placeholder:text-md h-14 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
        />
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <ImageUpload />
          <Transformations />
        </div>
        <Button input={input} />
      </div>
    </div>
  );
};

export default InputForm;
