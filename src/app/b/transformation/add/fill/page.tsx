import { auth } from '@/auth';
import InputForm from '@/components/fill/input';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className='mt-10 mx-10 space-y-10'>
      <div className='space-y-3'>
        <h1 className='text-4xl text-slate-600 font-semibold'>
          Generative Fill
        </h1>
        <p className='text-slate-400'>
          Enhance An Images Dimensions With AI Outpainting
        </p>
      </div>
      <InputForm />
    </div>
  );
};

export default page;
