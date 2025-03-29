import React from "react";
import style from "./Button.module.css";

const Button = ({ link, name, className }) => {
  return (
    <>
      <div className="btn">
        <a className={`${style.btn} ${className}`} href={link}>
          {name}
        </a>
      </div>
    </>
  );
};

export default Button;
