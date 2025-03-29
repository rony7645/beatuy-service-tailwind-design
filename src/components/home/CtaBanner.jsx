import React from "react";
import Button from "../ui/Button";

const CtaBanner = () => {
  return (
    <>
      <section className="cta-banner spacing bg-dark">
        <div className="container-layout">
          <div className="cta-wrapper text-center w-full lg:w-1/3 flex flex-col gap-5 mx-auto ">
            <h4 className="cta-sub-heading text-2xl">
              We want to make every girl pretty, happy, and loved!
            </h4>{" "}
            <h1 className="cta-heading text-8xl uppercase">20% off</h1>
            <h6 className="cta-text text-3xl">on Manicure + Gel Polish</h6>
            <Button name="Booking Online" className="bg-primary text-light border-primary hover:text-primary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaBanner;
