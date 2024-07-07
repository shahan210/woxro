import React from "react";
import Fort1 from "../../../assets/Fort1.png";
import Fort2 from "../../../assets/Fort 2.png";
import Fort3 from "../../../assets/Fort 3.png";
import { motion } from "framer-motion";
const Section2 = () => {
  return (
    <div className="flex justify-center my-28">
      <div className="max-w-[70%] lg:grid lg:grid-cols-3 flex flex-col gap-8">
        <div className="flex gap-3 flex-col cursor-pointer  items-center overflow-hidden">
          <motion.img
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            src={Fort1}
            alt="Game Image"
            className="lg:w-full w-[300px]"
          />
          <p className="text-center text-lg">
            Explore large, destructible environments where no two games are ever the same.
          </p>
        </div>
        <div className="flex gap-3 flex-col cursor-pointer items-center overflow-hidden">
          <motion.img
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            src={Fort2}
            alt="Game Image"
            className="lg:w-full w-[300px]"
          />
          <p className="text-center text-lg">
            Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
          </p>
        </div>
        <div className="flex gap-3 flex-col cursor-pointer items-center overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={Fort3}
            alt="Game Image"
            className="lg:w-full w-[300px]"
          />
          <p className="text-center text-lg">
            Discover even more ways to play across thousands of creator-made game genres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
