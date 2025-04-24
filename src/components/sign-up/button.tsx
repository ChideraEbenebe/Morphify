'use client';

import { signIn } from '@/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSession } from 'next-auth/react';

const Button = () => {
  const { data: session } = useSession();

  return (
    <div>
      <button
        onClick={() => {
          signIn('google');
        }}
        className='shadow-md flex gap-4 px-8 py-3 bg-gradient-to-br from-orange-200 to-custom-orange brightness-105 text-white font-semibold'>
        <FcGoogle size={24} /> <span>Sign In With Google</span>
      </button>
    </div>
  );
};

export default Button;
