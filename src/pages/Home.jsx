import React from "react";
import MainBanner from "../components/MainBanner";
import TopProducts from "../components/TopProducts";
import UniqueSellingPoint from "../components/UniqueSellingPoint/UniqueSellingPoint";
import Benefits from "../components/Benefits/Benefits";
const Home = () => {
  return (
    <>
      <MainBanner />
      <TopProducts />
      <UniqueSellingPoint />
      <Benefits />
    </>
  );
};

export default Home;
