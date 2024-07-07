import Banner from "../../../assets/fortBanner.png";
import React from "react";
import { motion } from "framer-motion";
const Section1 = () => {
  return (
    <div>
      <p className="text-center p-2 uppercase text-4xl my-4">
        Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
      </p>
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          src={Banner}
          alt="Banner"
          className="w-fit p-2 my-4 cursor-pointer"
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[90%] my-4 ">
          <p className="text-center p-2 uppercase text-md ">
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and
            Zero Build, experience a concert or live event, or discover over a million creator made games, including
            racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can
            find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <button className="bg-white hover:scale-105 transition-all ease-in-out duration-300 text-black w-[250px]  py-1">
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default Section1;
