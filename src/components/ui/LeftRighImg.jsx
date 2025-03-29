import React from "react";

const LeftRighImg = ({ imgSrc, heading, text, subHeading, reverse }) => {

  return (
    <>
      <div
        className={`wrapper flex flex-col lg:flex-row gap-10 items-center ${reverse && "lg:flex-row-reverse"}`}
      >
        <div className="w-full lg:w-1/2">
          <img className="rounded-lg" src={imgSrc} alt="" />
        </div>
        <div className="w-full lg:w-1/2  flex flex-col gap-5">
          <h6 className="subheading uppercase text-base text-text">
            {subHeading}
          </h6>
          <h2 className="heading">{heading}</h2>
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default LeftRighImg;
