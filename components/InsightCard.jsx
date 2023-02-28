"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <div
        class="bg-white/25 flex max-w-5x1 gap-8 group"
        onClick={() => setClicked(!clicked)}
      >
        <div class="group-hover:scale-[0.95] p-8 rounded-x1 cursor-pointer">
          {clicked ? (
            <></>
          ) : (
            <>
              <img
                src={imgUrl}
                alt="planet-01"
                className="md:w-[270px] w-full h-[250px] rounded object-cover"
              />
              <h4 className="font-normal lg:text-[30px] text-center text-ellipsis text-[26px] text-black">
                {title}
              </h4>
            </>
          )}
          {clicked ? (
            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-blue">
              {subtitle}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
