'use client';

import { useState } from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import { images } from '../constants/index';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative w-[100%]">
      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Button
          onClick={handleNextSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image}
                  fill="fill"
                  style={{ objectFit: 'contain' }}
                  className="animate-fadeIn"
                />
              );
            }
            return null;
          })}
        </Button>
      </div>
      <Button
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => (
          <div
            className={
                index === currentSlide
                  ? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
                  : 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
              }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
