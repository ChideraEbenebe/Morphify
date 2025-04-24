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
  });

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
          value={input.title}
          onChange={(e) => {
            setInput({ ...input, title: e.target.value });
          }}
          placeholder='puppy in a shirt'
          className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
        />
      </div>
      <div className='mt-6'>
        <label
          htmlFor='#remove'
          className='text-gray-400 text-sm font-bold'>
          Object To Remove
        </label>
        <div className='mt-2'>
          <Input
            type='text'
            id='remove'
            value={input.object}
            onChange={(e) => {
              setInput({ ...input, object: e.target.value });
            }}
            placeholder="puppy's shirt"
            className='placeholder:text-slate-300 placeholder:text-md h-12 text-md rounded-2xl border-[1px] border-slate-300 focus-visible:ring-0 focus:border-input'
          />
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
