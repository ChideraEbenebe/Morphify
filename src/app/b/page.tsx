import { auth } from '@/auth';
import GlobalImage from '@/components/b/images';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AiOutlineScan } from 'react-icons/ai';
import { BiSolidLayerPlus } from 'react-icons/bi';
import { BsFileImage, BsStars } from 'react-icons/bs';

const navLinks = [
  {
    id: 2,
    href: '/b/transformation/add/restore',
    icon: <BsFileImage size={24} />,
    text: 'Restore Image',
  },
  {
    id: 3,
    href: '/b/transformation/add/fill',
    icon: <BsStars size={24} />,
    text: 'Generative Fill',
  },
  {
    id: 4,
    href: '/b/transformation/add/remove',
    icon: <AiOutlineScan size={24} />,
    text: 'Object Remove',
  },
  {
    id: 5,
    href: '/b/transformation/add/recolor',
    icon: <BiSolidLayerPlus size={24} />,
    text: 'Object Recolor',
  },
];

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className='sm:mt-8 mb-8 mt-24'>
      <section className='bg-gradient-to-br text-white from-orange-300 to-custom-orange  mx-10 rounded-3xl shadow-2xl p-8 flex-col sm:flex gap-4 justify-center hidden '>
        <div className='w-full flex justify-center items-center text-center'>
          <h1 className='text-[44px] font-semibold  max-w-[550px]'>
            Unleash Your Creative Vision With Morphify
          </h1>
        </div>
        <ul className='flex items-center w-full gap-10 justify-evenly'>
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className='flex-col flex items-center gap-2 '>
              <div className='flex w-fit bg-white p-4 rounded-full'>
                <li className='text-slate-500'>{link.icon}</li>
              </div>
              <p>{link.text}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className='mx-10 mt-12'>
        <h2 className='text-[32px] text-center mb-4'>
          Recent Edits On{' '}
          <span className='text-custom-orange font-semibold'>Morphify</span>
        </h2>

        <hr className='py-6' />

        <GlobalImage />
      </section>
    </div>
  );
}
