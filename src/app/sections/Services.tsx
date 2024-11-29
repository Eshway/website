'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/components';
import { feedback } from '../constants';

import styles from '../styles';
import { fadeIn, staggerContainer } from '@/utils/motion';
import FeedbackCard from '@/components/FeedbackCard';

const About = () => (
    <section className={`${styles.paddings} relative z-10`} id="services">
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
        >
            <TypingText title="| Services" textStyles="text-center" />

            {/* <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p> */}
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] place-content-center"
                style={{ justifyContent: 'center !important' }}
            >
                {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
                {/* <FeedbackCard name="Web Development" title="Card" /> */}
                {/* <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-red-200">
          <img src="/planet-01.png" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">content
          </p>

          <div className="flex flex-row">
            <img src="/people-01.png" alt=" " className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Name
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Title
              </p>
            </div>
          </div>
        </div> */}
            </motion.div>
            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
        </motion.div>
    </section>
);

export default About;