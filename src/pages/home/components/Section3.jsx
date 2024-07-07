import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Section3 = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="sec3Container">
        <h1 className="text-3xl p-2 mb-5">Our Contribution</h1>
        <p className=" text-sm sm:text-base mb-14">
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our
          user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication
          to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
        <div className="sec3CountHead">
          <div className="sec3Count">
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
          <div className="sec3Count">
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
          <div className="sec3Count">
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
