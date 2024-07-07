import React from "react";

const Section4 = () => {
  return (
    <div className="flex justify-center  items-center text-center  my-40">
      <div className="container max-w-[50%] text-center flex gap-10 flex-col">
        <h1 className="text-3xl">Interested in delving deeper into the project?</h1>
        <div className="flex justify-center">
          <p className="max-w-[80%]">
            If you'd like to explore further details about our initiatives or any of our affiliated brands, don't
            hesitate to connect. You can reach out to us via email at
            <b> hello@abc.com </b>or give us a call at
            <b> +91 480 20802730. </b>
          </p>
        </div>
        <div className="flex gap-10 justify-center">
          <button className="py-1 border border-white w-[220px]">Ring us on Skype</button>
          <button className="py-1 border bg-white border-white text-black w-[220px]">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
