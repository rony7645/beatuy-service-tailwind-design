import React from "react";
import ImgBox from "../ui/ImgBox";

const Services = () => {
  return (
    <>
      <section className="services spacing">
        <div className="container-layout">
          <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-20">
            <ImgBox
              imgSrc="/public/images/pedicure.png"
              heading="Nail Care"
              text="Ligula risus auctor tempus and dolor vitae undo purus semper sodales"
              linkName="find out more"
              linkUrl="#"
            />
            <ImgBox
              imgSrc="/public/images/nail-polish.png"
              heading="Nail Art"
              text="Ligula risus auctor tempus and dolor vitae undo purus semper sodales"
              linkName="find out more"
              linkUrl="#"
            />
            <ImgBox
              imgSrc="/public/images/soak.png"
              heading="Add-Ons"
              text="Ligula risus auctor tempus and dolor vitae undo purus semper sodales"
              linkName="find out more"
              linkUrl="#"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
