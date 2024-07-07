import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Section3 = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-[90%]  sm:max-w-[70%] text-center">
        <h1 className="text-3xl p-2 mb-5">Our Contribution</h1>
        <p className=" text-sm sm:text-md mb-14">
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our
          user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication
          to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
        <div className="sm:grid sm:grid-cols-3 flex flex-col justify-center gap-10">
          <div className="flex flex-col lg:w-[150px] lg:mx-10 gap-2">
            <div className="text-5xl">
              <CountUp start={0} end={5} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} viewport={{ once: true }} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              M
            </div>
            <p>Daily User Engagements</p>
          </div>
          <div className="flex flex-col lg:w-[150px] lg:mx-10 gap-2">
            <div className="text-5xl">
              $
              <CountUp start={0} end={500} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} viewport={{ once: true }} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              K
            </div>
            <p>Revenue Surge for an Platform</p>
          </div>
          <div className="flex flex-col lg:w-[150px] lg:mx-10 gap-2">
            <div className="text-5xl">
              <CountUp start={0} end={10} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} viewport={{ once: true }} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              X
            </div>
            <p>ROAS on all our marketing campaigns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
