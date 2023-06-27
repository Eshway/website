'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TitleText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const EshVision = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-[-1]" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <Link href="/eshvision">

        <TitleText
          title={<>EshVision</>}
          textStyles="text-center"
        />
      </Link>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white">EshVision</span> */}
        {' '}Empowering developers with comprehensive <span className="font-extrabold text-white">free</span> training,
        hands-on projects, and <span className="font-extrabold text-white">paid freelancing</span> opportunities for a successful
        career in development. Join us to gain valuable skills, build your portfolio,
        and earn while learning. Take the leap into a thriving development career with
        EshVision. Register now : <Link href="/eshvision" className="font-extrabold text-blue-200">Registration Link.</Link>
        {/* <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down */}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default EshVision;
