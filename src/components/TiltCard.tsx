'use client';
import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const Example = () => {
  return (
    <div className='grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900'>
      <TiltCard
        card={{
          title: 'Your Card Title',
          description: 'Your card description goes here.',
        }}
      />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface CardProps {
  card: {
    title: string;
    description: string;
  };
}

export const TiltCard = ({ card }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className='group relative h-96 w-72 sm:h-[450px] sm:w-[950px] overflow-hidden rounded-xl bg-gradient-to-br from-indigo-300 to-[#d86dfc]'
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[url('/hero.png')] p-4 shadow-lg"
      >
        <div className='relative z-10 text-white'>
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
            }}
            className='my-2 block origin-top-left font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2]'
          >
            {card.title}
          </motion.span>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Example;
