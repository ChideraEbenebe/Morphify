'use client';

import React from 'react';

const About = () => {
  return (
    <section
      className='bg-[#fff6ee] py-16 px-6 md:px-24'
      id='about'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-[30px]  font-bold text-slate-600 mb-6'>
          Why Morphify Exists
        </h2>
        <p className='text-lg md:text-xl text-[#444] leading-relaxed mb-8'>
          Morphify started as a side project to make photo editing a little less
          painful. It’s powered by AI and designed to be super simple — no
          downloads, no clutter, no fluff. Just upload, tweak, and go.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-left text-[#444]'>
          <div className='bg-white rounded-xl shadow p-6 w-full md:w-1/3'>
            <p>
              🧑‍💻 Built by someone who got tired of opening Photoshop for tiny
              edits.
            </p>
          </div>
          <div className='bg-white rounded-xl shadow p-6 w-full md:w-1/3'>
            <p>🚀 Made with love using Next.js and open-source tools.</p>
          </div>
          <div className='bg-white rounded-xl shadow p-6 w-full md:w-1/3'>
            <p>✨ Completely free, because good tools should be accessible.</p>
          </div>
        </div>

        <div className='mt-10'>
          <a
            href='mailto:ebenebechidera3@gmail.com'
            className='inline-block bg-[#92e0e0] text-[#2c2c2c] font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition'>
            Got feedback? Reach out
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
