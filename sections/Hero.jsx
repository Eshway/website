'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

// const headingss = `
// text-white font-bold lg:text-[34px] md:text-[100px] sm:text-[60px] text-[44px] uppercase '
// `;
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 flex flex-col lg:flex-row`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col flex-1`}
    >
      <div className="flex justify-center flex-col relative z-10 ">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Eshway
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center my-4"
        >
          <h1 className="text-transparent bg-clip-text font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono bg-gradient-to-tl from-[#1a232e] to-blue-300">
            Transforming your digital landscape for a better tomorrow.
          </h1>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col flex-1`}
    >

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-[full] h-[100%] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/ill.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
    <Link href="/contact">
      <motion.button
        variants={textVariant(1.3)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: '1.1' }}
        viewport={{ once: false, amount: 0.25 }}
        className="absolute bottom-[20px] right-[600px] button rounded-full bg-[#d96dfd] w-[120px] h-[50px] hover:bg-blue-200 hover:text-white hover:scale-110 hover:ease-linear hover:duration-300 ease-out duration-300 font-mono" type="button"
      >
        Let's Talk
      </motion.button>
    </Link>
  </section>
);

export default Hero;
