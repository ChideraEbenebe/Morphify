'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import ImageUpload from './upload';
import Transformations from '../transform/transformations';
import Button from './Button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const InputForm = () => {
  const [input, setInput] = useState('');

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState<string>('1:1');

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

        <div className='mt-8 '>
          <Select
            onValueChange={(value) => {
              setSelectedOption(value);
            }}>
            <SelectTrigger className='w-full data-[size=default]:h-12 rounded-2xl border-gray-300'>
              <SelectValue placeholder='Aspect Ratio' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sizes</SelectLabel>
                <SelectItem value='1:1'>Square 1:1</SelectItem>
                <SelectItem value='3:4'>Standard Portrait 3:4</SelectItem>
                <SelectItem value='9:16'>Phone Portrait 9:16</SelectItem>
                <SelectItem value='16:9'>Landscape 16:9</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='grid md:grid-cols-2 gap-4 mt-8'>
          <ImageUpload />
          <Transformations />
        </div>
        <Button
          input={input}
          option={selectedOption}
        />
      </div>
    </div>
  );
};

export default InputForm;
