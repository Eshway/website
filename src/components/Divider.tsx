import React from 'react';

const Divider = () => {
  return (
    <span className='md:my-12 my-6 font-karla md:tracking-widest text-sm md:text-xl flex text-[#7C7878] items-center'>
      <span className='h-px flex-1 bg-[#7C7878]'></span>
      <span className='shrink-0 px-1 md:px-6'>
        Unlock your <span className='font-bold '>online potential</span> now
        with <span>ESH</span>
        <span className='text-[#d86dfc]'>WAY</span>
      </span>
      <span className='h-px flex-1 bg-black'></span>
    </span>
  );
};

export default Divider;
