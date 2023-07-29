'use client';

import { motion } from 'framer-motion';

import { Button } from '@mui/material';
import Link from 'next/link';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Merch = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Official Merchandise
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Eshway
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          {/* “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 3.0. by using
          metaverse you can use it as anything” */}
          {/* "Embark on a transformative journey with Eshway's groundbreaking free freelancer training program, EshVision, and unlock your full potential in the digital realm." */}
          Embrace the Digital Vibe! 🚀 Elevate your style with our exclusive Eshway official T-shirt. Showcasing a sleek design and unbeatable comfort, this limited edition tee stands out. Get yours now!<br />
          <Link href="/store/productPage"><Button className="d-block w-[100%] bg-[#323f5d]" variant="contained">Buy Now</Button></Link>
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/Front.webp"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          {/* <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Merch;
