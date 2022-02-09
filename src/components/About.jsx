import React from "react";
import abooutImage from "../assets/img/about-img.png";
import rightshade from "../assets/img/right-shadow.png";
import leftshade from "../assets/img/left-shadow.png";

const About = () => {
  return (
    <>
      <section
        className="position-relative py-5"
        id="about"
        data-aos="flip-down"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <img className="right-shade" src={rightshade} alt="" />
        <img className="left-shade d-none d-lg-block" src={leftshade} alt="" />
        <img className="about-img" src={abooutImage} alt="abooutImage" />
        <div className="container py-sm-5 pb-5 my-5">
          <div className="about-card">
            <h2 className="about-heading mb-sm-4">About Project</h2>
            <p className="para-normal ff-gilory">
              Cheeky Snails will be a truly community governed nft collection.
              The basic idea of crypto is decentralization and we will implement
              that core principle into this project. So the team will take
              minimum of the profits and majority of them will be for the
              development of the project. Also team will take 0% royalties. 100
              nfts will be held in the treasury of which 50 will be used for
              giveaways and 50 will be awarded to the members that lost their
              snail in a proven scam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
