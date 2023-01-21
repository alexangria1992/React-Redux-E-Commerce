import React from "react";
import MainBanner from "../components/MainBanner";
import TopProducts from "../TopProducts";
import SecondaryBanner from "../components/SecondaryBanner/SecondaryBanner";
const Home = () => {
  return (
    <>
      <MainBanner />
      <TopProducts />
      <SecondaryBanner />
    </>
  );
};

export default Home;
