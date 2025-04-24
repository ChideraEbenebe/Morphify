import InputForm from '@/components/text-to-image/input';
import React from 'react';

const page = () => {
  return (
    <div className='mt-10 mx-10 space-y-10'>
      <div className='space-y-3'>
        <h1 className='text-4xl text-slate-600 font-semibold'>Text To Image</h1>
        <p className='text-slate-400'>
          Go Creative And Let the AI Do Its Thing
        </p>
      </div>
      <InputForm />
    </div>
  );
};

export default page;
