'use client';

import { signOut } from 'next-auth/react';
import React from 'react';
import { BiExit, BiSolidExit } from 'react-icons/bi';

const SignOut = () => {
  return (
    <button
      className='flex gap-4 items-center py-4 rounded-full px-5 text-slate-600 hover:text-red-600  font-bold'
      onClick={async () => {
        await signOut();
      }}>
      <BiSolidExit /> Sign Out
    </button>
  );
};

export default SignOut;
