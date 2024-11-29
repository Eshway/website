import React from 'react';
import { HorizontalScrollCarousel } from './HorizontalScrollCarousel';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='w-full h-full bg-[#232C3C] mt-20'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 pb-0 sm:pb-0 lg:pb-0 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          {/* <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full'> */}
          <Image
            alt=''
            src='/hand.png'
            className='relative h-full w-full object-cover bottom-0 md:bottom-40'
          />
          {/* </div> */}

          <div className=''>
            <h2 className='text-3xl font-extrabold sm:text-4xl tracking-wide text-[#DEDEDE]'>
              Services
            </h2>

            <p className='mt-4 text-white leading-7 tracking-widest'>
              Embark on a journey where imagination meets innovation, and watch
              your digital dreams come to life with our{' '}
              <span className='text-[#d86dfc]'>transformative solutions.</span>
            </p>
          </div>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </section>
  );
};

export default Services;
