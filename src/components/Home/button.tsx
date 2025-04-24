'use client';

import { signIn } from 'next-auth/react';
import React, { useEffect } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  useEffect(() => {
    console.log({
      name: process.env.AUTH_GOOGLE_ID,
      uri: process.env.NEXT_PUBLIC_MONGODB_URI,
    });
  }, []);

  return (
    <button
      onClick={async () => await signIn('google', { callbackUrl: '/b' })}
      className={` text-white ${className} px-6 hover:brightness-125 py-3 rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
