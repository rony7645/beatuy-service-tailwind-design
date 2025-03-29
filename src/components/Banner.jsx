import React from "react";
import Button from "./ui/Button";

const Banner = () => {
  return (
    <>
      <section className="hero py-8 md:py-16 lg:h-screen bg-[url('public/images/hero-9.jpg')] bg-left md:bg-center bg-no-repeat bg-cover flex flex-col justify-center">
        <div className="container-layout">
          <div className="hero-wrapper flex flex-col gap-5 w-3/4 lg:w-2/3 text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="hero-title lg:text-7xl text-4xl md:text-5xl lg:leading-20">Best Nails For Best Moments</h1>
            <p className="hero-text lg:w-2/3">Feugiat primis and ligula laoreet auctor undo mauris auctor laoreet purus pretium a sapien euismod</p>
            <Button name="Find Out More" className="bg-accent text-light hover:text-accent mt-3"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
