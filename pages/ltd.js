import React from 'react';
import Image from 'next/image';
import { ContainerScroll } from '../components/ContainerScroll';
import Navigation from '../components/Navigation';

const LTD = () => (
  <main className="h-full">
    <Navigation />
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={(
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Unleash the power of <br />
            <span className="text-6xl md:text-[6rem] font-bold mt-1 leading-none">
              Magency
            </span>
          </h1>
        //   <h1 className="text-4xl font-semibold text-black dark:text-white">
        //     Unleash the power of <br />
        //     <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        //       Magency
        //     </span>
        //   </h1>
      )}
      >
        <Image
          src="/bg.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <section className="flex justify-center items-center flex-col gap-4">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
      </section>
    </div>
  </main>
);

export default LTD;
