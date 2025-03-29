import React from "react";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";
import Choose from "../components/home/Choose";
import CtaBanner from "../components/home/CtaBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Choose />
      <CtaBanner />
    </>
  );
};

export default Home;
