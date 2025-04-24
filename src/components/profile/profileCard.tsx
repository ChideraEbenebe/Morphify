import { auth } from '@/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import user from '@/assets/user.png';
import UserImage from './images';

export default async function ProfileCard() {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className='relative max-w-[1150px] mx-auto p-8 space-y-5'>
      <Image
        src={session.user?.image || user}
        alt='users image'
        height={120}
        width={120}
        className='rounded-full  '
      />
      <div className='space-y-1'>
        <h2 className='text-3xl text-custom-orange font-semibold '>
          {session.user?.name}
        </h2>
        <p className='text-sm text-slate-400'>{session.user?.email}</p>
      </div>

      <hr className='bg-gray-400 w-full' />

      <h3 className='text-2xl text-slate-600'>Recent Edits</h3>

      <UserImage />
    </div>
  );
}
