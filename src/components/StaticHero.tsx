import React from 'react';
import { AnimatedButton } from './AnimatedButton';

const StaticHero = () => {
  return (
    <section className='relative bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-start ltr:sm:text-left rtl:sm:text-right'>
          <h1 className='text-3xl font-bold tracking-widest sm:text-5xl sm:text-[#FFFDFD] sm:leading-[60px]'>
            Crafting Digital Excellence Together
            {/* <strong className='block font-extrabold text-rose-700'>
              {' '}
              Forever Home.{' '}
            </strong> */}
          </h1>

          <p className='mt-4 font-light max-w-md sm:text-xl/relaxed sm:text-[#FFFDFD]'>
            Transforming your digital landscape for a better tomorrow
          </p>

          <div className='mt-8 flex flex-wrap text-center'>
            <AnimatedButton />
            {/* <a
              href='#'
              className='block w-full rounded bg-[#d86dfc] sm:bg-transparent border-2 border-[#d86dfc] px-12 py-3 text-md font-bold text-white shadow hover:bg-[#d86dfc] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'
            >
              Let&apos;s Talk
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;
