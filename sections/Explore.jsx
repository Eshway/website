'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { ExploreCard, TitleText, TypingText } from '../components';
import { team } from '../constants';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Explore = () => {
  const [active, setActive] = useState('world-1');

  return (
    <section className={`${styles.paddings}`} id="team">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Team" textStyles="text-center" />
        <TitleText
          title={<>Meet our <br className="md:block hidden" />Founding Team</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {team.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
