'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

// const headingss = `
// text-white font-bold lg:text-[34px] md:text-[100px] sm:text-[60px] text-[44px] uppercase '
// `;
const ShopHero = () => (
  <section className="sm:px-16 flex flex-col lg:flex-row">

    <motion.div
      variants={staggerContainer``}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col flex-1`}
    >
      <div className="border-t border-gray-800">
        {/* <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
          <h2 className="h2 mb-4">Driven by Passion</h2>
          <p className="text-xl text-gray-400">Meet the Driven Minds Behind Formula Ashwariders</p>
        </div> */}
        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
          <Link href="store/productPage">
            <div className="flex flex-col w-full mx-auto h-full p-6 bg-gray-800" data-aos="fade-up" key="POKemon">
              <div className="text-center">
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-[10px]" src="/Front.png" width="500" height="500" alt="Testimonial 01" />
                </div>
              </div>
              <div className="text-gray-700 font-medium text-xl mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Eshway Merchandise </cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">₹ 399</a>
              </div>
            </div>
          </Link>
          {/* <div className="flex flex-col w-full mx-auto h-full p-6 bg-gray-800" data-aos="fade-up" key="POKemon">
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-[10px]" src="/Front.png" width="500" height="500" alt="Testimonial 01" />
              </div>
            </div>
            <div className="text-gray-700 font-medium text-xl mt-6 pt-5 border-t border-gray-700">
              <cite className="text-gray-200 not-italic">Another Eshway Official Merchandise </cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">₹ 350</a>
            </div>
          </div> */}
          {/* <div className="flex flex-col w-full mx-auto h-full p-6 bg-gray-800" data-aos="fade-up" key="POKemon">
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-[10px]" src="/Front.png" width="500" height="500" alt="Testimonial 01" />
              </div>
            </div>
            <div className="text-gray-700 font-medium text-xl mt-6 pt-5 border-t border-gray-700">
              <cite className="text-gray-200 not-italic">Another Eshway Official Merchandise </cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">₹ 350</a>
            </div>
          </div> */}
          {/* <div className="flex flex-col w-full mx-auto h-full p-6 bg-gray-800" data-aos="fade-up" key="POKemon">
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-[10px]" src="/Front.png" width="500" height="500" alt="Testimonial 01" />
              </div>
            </div>
            <div className="text-gray-700 font-medium text-xl mt-6 pt-5 border-t border-gray-700">
              <cite className="text-gray-200 not-italic">Another Eshway Official Merchandise </cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">₹ 350</a>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  </section>
);

export default ShopHero;
