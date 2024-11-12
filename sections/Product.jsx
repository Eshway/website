'use client';

import { motion } from 'framer-motion';

import { Button } from '@mui/material';
import Link from 'next/link';
import styles from '../styles';
import { productDesc } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import Carousel from './Caraousel';

const Product = (props) => {
  const { price } = props;
  return (
    <section className={`${styles.paddings} relative z-10`} id="works">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Carousel />
          {/* <img
          src="/tshirtmockup.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        /> */}
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col md:items-start items-center"
        >
          <TypingText title="| Official" />
          <TitleText title={<>Eshway Merchandise</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {productDesc.map((feature) => (
              <StartSteps
                key={feature}
            //   number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
                img="/check.png"
              />
            ))}
            {/* className="btn btn-primary bg-[#323f5d] text-blue-200 hover:text-secondary-white" */}
            <Link href="https://forms.gle/wUXdw4nRxo41mYDe7" target="_blank" rel="noopener noreferrer"><Button className="w-[100%] bg-[#323f5d]" variant="contained">Buy Now ₹{price}</Button></Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Product;
