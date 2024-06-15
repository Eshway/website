import React from 'react';

const About = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full'>
            <img
              alt=''
              src='/techrnd.JPG'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold sm:text-4xl tracking-wide'>
              <span className='text-[#4C4A4A]'>About</span>{' '}
              <span className='text-[#d86dfc]'>Us</span>
            </h2>

            <p className='mt-4 text-gray-600 leading-7 tracking-widest'>
              With a team of skilled developers, designers, and marketers, the
              company offers digital marketing services such as website
              development, mobile application development and SEO.
            </p>

            <a
              href='#'
              className='mt-8 inline-block rounded bg-transparent text-black px-10 py-3 text-lg font-medium transition border-4 border-[#d86dfc] hover:bg-[#d86dfc] hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
