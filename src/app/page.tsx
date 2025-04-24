import { auth } from '@/auth';
import About from '@/components/Home/about';
import Features from '@/components/Home/features';
import Footer from '@/components/Home/footer';
import Hero from '@/components/Home/Hero';
import Navbar from '@/components/Home/Navbar';
import Work from '@/components/Home/work';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (session) {
    console.log(session);
    redirect('/b');
  }

  return (
    <div className='bg-light-orange  '>
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <About />
      <Footer />
    </div>
  );
}
