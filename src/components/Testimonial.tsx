'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export function Testimonial() {
  return (
    <div className='h-full py-8 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      'Great work so far, loved the fact that Eshu personally took it up! Looking forward to the final product.',
    name: 'Eknoor Singh',
    title: 'Speezy',
  },
  {
    quote:
      'Great work. They could exactly replicate the design into website and the speed was super quick. Eshu personally solved all the issue I had in quickest of time. Would definitely work with them again!',
    name: 'Abhishek Pai Angle',
    title: 'Ribin',
  },
  {
    quote: 'Work execution was smooth and task was done on time!',
    name: 'Sujas Jain',
    title: 'Abhyuday IIT Bombay',
  },
  {
    quote:
      'Exceptional work! The website is fantastic, and we appreciate your team&apos;s expertise and professionalism.',
    name: 'Mandar',
    title: 'Formula AshwaRiders',
  },
  {
    quote:
      'It was very personalised and they did multiple iterations according to my requirements.',
    name: 'Aryan Goyal',
    title: 'Thirtyml',
  },
];
