'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {/* <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        /> */}
        <div>
          { ' ' }
        </div>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          <a href="/">
            <img src="/logo.png" className="w-[80px]" alt="" />
          </a>
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={handleMenu}
        />
        {menu ? (
          <div className="absolute right-5 top-[60px] text-secondary-white z-[5]">
            <ul>
              <li className="pl-[70px] sm:px-[50px] m-auto"><a href="/#services">Services</a></li>
              <li className="pl-[70px] sm:px-[50px]"><a href="/#about">About Eshway</a></li>
              <li className="pl-[70px] sm:px-[50px]"><a href="/#team">The Team</a></li>
              <li className="pl-[70px] sm:px-[50px]"><a href="/#works">How it Works?</a></li>
              <li className="pl-[70px] sm:px-[50px]"><a href="/#new">What's New?</a></li>
              <li className="pl-[70px] sm:px-[50px]"><a href="/#contact">Contact Us</a></li>
              <li className="pl-[70px] sm:px-[50px]"><a href="/store">Store</a></li>
            </ul>
          </div>
        ) : ' '}
      </div>
    </motion.nav>
  );
};

export default Navbar;
