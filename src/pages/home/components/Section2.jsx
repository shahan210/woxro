import React from "react";
import Fort1 from "../../../assets/Fort1.png";
import Fort2 from "../../../assets/Fort 2.png";
import Fort3 from "../../../assets/Fort 3.png";
const Section2 = () => {
  return (
    <div className="flex justify-center my-28">
      <div className="max-w-[70%] grid grid-cols-3 gap-8">
        <div className="flex gap-3 flex-col">
          <img src={Fort1} alt="Game Image" />
          <p className="text-center text-lg">
            Explore large, destructible environments where no two games are ever the same.
          </p>
        </div>
        <div className="flex gap-3 flex-col">
          <img src={Fort2} alt="Game Image" />
          <p className="text-center text-lg">
            Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
          </p>
        </div>
        <div className="flex gap-3 flex-col">
          <img src={Fort3} alt="Game Image" />
          <p className="text-center text-lg">
            Discover even more ways to play across thousands of creator-made game genres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
