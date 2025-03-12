'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const LTD = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| LTD - Live Tracking Dashboard" textStyles="text-center" />
      <TitleText
        title={(
          <>Our Product</>
        )}
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="text-center mt-4 text-gray-400 text-xl"
      >
        LTD is a live tracking dashboard that helps you track your projects in real-time.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] max-w-5xl mx-auto"
      >
        {/* <img src="/map.png" alt="map" className="w-full h-full object-cover" /> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/F--RFYqevsQ?si=uJGCZqEdhBXAnYs5" title="LTD - Live Tracking Dashboard" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full object-cover"></iframe>

        {/* <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div> */}
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-md mx-auto"
      >
        <div className="w-full justify-center flex p-4">
          <a
            href="https://ltd-app.vercel.app/signup"
            className="w-full"
          >
            <button
              className="hover:scale-105 transition-all relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-150 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Beta is FREE! &nbsp;
                <span className="animate-pulse">
                  🎉
                </span>
              </span>
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default LTD;
