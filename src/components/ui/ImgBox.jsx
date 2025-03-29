import React from "react";

const ImgBox = ({ imgSrc, heading, text, linkName, linkUrl }) => {
  return (
    <>
      <div className="img-box text-center">
        <img src={imgSrc} alt="" className="img-box-img w-25 mx-auto mb-5" />
        <div className="img-box-body">
          <h4 className="img-box-title lg:text-2xl mb-3">{heading}</h4>
          <p className="img-box-text">{text}</p>
          <div className="img-box-btn mt-5">
            <a
              className="border-b-2 py-2 uppercase hover:text-primary hover:border-primary"
              href={linkUrl}
            >
              {linkName}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgBox;
