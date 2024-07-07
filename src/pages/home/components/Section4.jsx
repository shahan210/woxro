import React from "react";

const Section4 = () => {
  return (
    <div className="sec4Div">
      <div className="sec4Container">
        <h1 className=" text-3xl sm:text-3xl">Interested in delving deeper into the project?</h1>
        <div className="flex justify-center">
          <p className="max-w-[80%] text-sm sm:text-base">
            If you'd like to explore further details about our initiatives or any of our affiliated brands, don't
            hesitate to connect. You can reach out to us via email at
            <b> hello@abc.com </b>or give us a call at
            <b> +91 480 20802730. </b>
          </p>
        </div>
        <div className="sec4ButtonDiv">
          <button className="buttonBlack w-[220px]">Ring us on Skype</button>
          <button className="buttonWhite w-[220px]">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
