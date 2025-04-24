import { auth } from '@/auth';
import ProfileCard from '@/components/profile/profileCard';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default page;
