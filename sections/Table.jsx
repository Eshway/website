'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const Table = () => (
//   <section className={`${styles.paddings}`}>
  // <table className="border-collapse border border-slate-500">
  //   <thead>
  //     <tr>
  //       <th className="border border-slate-600">State</th>
  //       <th className="border border-slate-600">City</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td className="border border-slate-700">Indiana</td>
  //       <td className="border border-slate-700">Indianapolis</td>
  //     </tr>
  //     <tr>
  //       <td className="border border-slate-700">Ohio</td>
  //       <td className="border border-slate-700">Columbus</td>
  //     </tr>
  //     <tr>
  //       <td className="border border-slate-700">Michigan</td>
  //       <td className="border border-slate-700">Detroit</td>
  //     </tr>
  //   </tbody>
  // </table>
//   </section>
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Course Outline" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <table className="border-collapse border border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600 p-5">S.No</th>
              <th className="border border-slate-600 p-5">Topic</th>
              <th className="border border-slate-600 p-5">Complete By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 p-5">1.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Before-we-start-dffc29d9110d4603b175c5bab851025d" target="_blank" className="btn btn-primary" rel="noreferrer">Before we start</a></td>
              <td className="border border-slate-700 p-5">30th June 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">2.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Basic-Requirements-4a6d848ab5de4a8e9c9256393b857be0" target="_blank" className="btn btn-primary" rel="noreferrer">Basic Requirements</a></td>
              <td className="border border-slate-700 p-5">30th June 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">3.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Introduction-to-HTML-f2cb285d295b40c8beb7d605cf52389d" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
              <td className="border border-slate-700 p-5">30th June 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">4.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Advanced-HTML-f5997f3e62ed4d51b6351e28fd489ffb?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Advanced HTML</a></td>
              <td className="border border-slate-700 p-5">2nd July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">5.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Task-1-db9e419d7b884fd680077775e6fc841f?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Task - 1</a></td>
              <td className="border border-slate-700 p-5">2nd July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">6.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/CSS-8dc63612b48f4e4a8aa2c4e673fe5b46?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">CSS</a></td>
              <td className="border border-slate-700 p-5">3rd July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">7.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Bootstrap-f2b2976455b748ce8a97fbf7bec7c23a?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Bootstrap</a></td>
              <td className="border border-slate-700 p-5">4th July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">8.</td>
              <td className="border border-slate-700 p-5"><a href="https://www.notion.so/eshller/Task-2-0b3b266483f14d39b4ca07919f3c3dc5?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Task - 2</a></td>
              <td className="border border-slate-700 p-5">6th July 2023</td>
            </tr>
          </tbody>
        </table>
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

export default Table;
