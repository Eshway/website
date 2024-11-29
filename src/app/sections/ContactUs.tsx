'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { fadeIn, staggerContainer, zoomIn } from '@/utils/motion';
import Form from '@/components/Form';
import Image from 'next/image';

const ContactUs = () => (
    <section className={`${styles.paddings}`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 justify-center`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-1 lg:max-w-[500px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative items-center"
            >
                <div className="feedback-gradient" />
                <div>
                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                        Contact Us
                    </h4>
                    <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                        Get Quotation for free!!
                    </p>
                </div>

                {/* <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </p> */}
                <div className="z-[2] py-0">
                    {/* <form action="">
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Enter Your Name:
              <input type="text" name="" id="" /> <br />
            </label>
          </form> */}
                    <Form />
                </div>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-[0.5] flex justify-center items-center"
            >
                <Image
                    src="/contact.png"
                    alt="contact US"
                    className="w-full lg:h-[610px] h-[100%] min-h-[210px] object-cover rounded-[40px]"
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

export default ContactUs;