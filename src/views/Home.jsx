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
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

const Home = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
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
    </Web3ReactProvider>
  );
};

export default Home;
