import React from "react";
import Faq from "../components/Faq";
import Header from "../components/Header";
import BackToTop from "../components/common/BackToTop";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import HowToBuy from "../components/HowToBuy";
import MintNft from "../components/MintNft";
import Lap from "../components/Lap";
import Footer from "../components/Footer";
import SnailSlider from "../components/SnailSlider";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <SnailSlider />
      <About />
      <Roadmap />
      <Lap />
      <HowToBuy />
      <MintNft />
      <Team />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
