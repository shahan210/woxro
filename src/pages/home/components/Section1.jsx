import Banner from "../../../assets/fortBanner.png";
import React from "react";

const Section1 = () => {
  return (
    <div>
      <p className="text-center p-2 uppercase text-4xl my-4">
        Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
      </p>
      <img src={Banner} alt="Banner" className="w-fit p-2 my-4" />
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
        <button className="bg-white text-black w-[250px]  py-1">Visit Website</button>
      </div>
    </div>
  );
};

export default Section1;
