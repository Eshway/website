'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { TiltCard } from './TiltCard';

const Example = () => {
  return (
    <div className='bg-neutral-800'>
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll up
        </span>
      </div>
    </div>
  );
};

interface CardType {
  url: string;
  title: string;
  description: string;
  id: number;
}

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-70%']);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-[#232C3C]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-4'>
          {cards.map((card) => {
            return <TiltCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className='group relative h-[450px] w-[950px] overflow-hidden bg-neutral-200'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl md:text-4xl lg:text-6xl font-black uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards: CardType[] = [
  {
    url: '/imgs/abstract/1.jpg',
    title: 'Website Development',
    description:
      'Web development is the process of creating websites and web applications for the internet.',
    id: 1,
  },
  {
    url: '/imgs/abstract/2.jpg',
    title: 'Application Development',
    description:
      'Web development is the process of creating websites and web applications for the internet.',
    id: 2,
  },
  {
    url: '/imgs/abstract/3.jpg',
    title: 'UI/UX',
    description:
      'Web development is the process of creating websites and web applications for the internet.',
    id: 3,
  },
  {
    url: '/imgs/abstract/4.jpg',
    title: 'Video Editing',
    description:
      'Web development is the process of creating websites and web applications for the internet.',
    id: 4,
  },
];
