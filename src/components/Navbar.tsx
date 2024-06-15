'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatedHamburgerButton } from './AnimatedHamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='bg-[#232C3C] font-karla dark:bg-gray-800 shadow'>
        <div className='px-8 mx-auto max-w-7xl'>
          <div className='flex items-center justify-between h-[4.5rem]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex'>
                <a className='flex-shrink-0 align-middle' href='/'>
                  <img
                    className='w-14 h-14'
                    src='https://eshway.com/logo.png'
                    alt='Workflow'
                  />
                </a>
                <a
                  className='flex-shrink-0 self-center text-xl text-white p-2'
                  href='/'
                >
                  <span className='font-bold tracking-widest'>ESH</span>
                  <span className='font-bold tracking-widest text-[#d86dfc]'>
                    WAY
                  </span>
                </a>
              </div>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10 space-x-4'>
                  <a
                    className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'
                    href='/#'
                  >
                    Home
                  </a>
                  <a
                    className='text-gray-300 dark:text-white hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'
                    href='/#'
                  >
                    About us
                  </a>
                  <a
                    className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'
                    href='/#'
                  >
                    Our Work
                  </a>
                  <a
                    className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'
                    href='/#'
                  >
                    Services
                  </a>
                  <a
                    className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'
                    href='/#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='block md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
              >
                <AnimatedHamburgerButton />
                {/* <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='w-8 h-8'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                </svg> */}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <a
                className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Home
              </a>
              <a
                className='text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                About Us
              </a>
              <a
                className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Content
              </a>
              <a
                className='text-gray-300 hover:text-gray-100 hover:scale-[1.1] transition-all dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
