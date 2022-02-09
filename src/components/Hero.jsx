import React from "react";
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import heroSnailImage from "../assets/img/hero-snail-img.png";
const Hero = () => {
  return (
    <>
      <section className="hero-section position-relative">
        <Snowfall snowflakeCount={30} />
        <div className="container custom-height">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-sm-10 col-12 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <h2 className="hero-heading mb-0">Cheeky Snails</h2>
              <p className="hero-para py-4">
                Cheeky snails is a collection of 7777 wacky little beings,
                randomly generated from over 250 hand drawn traits.
              </p>
              <div className="d-flex py-2">
                <div className="me-3">
                  <button className="bg-transparent border-0">
                    <a href="" className="white-btn text-decoration-none">
                      Explore More
                    </a>
                  </button>
                </div>
                <div>
                  <button className="bg-transparent border-0">
                    <a
                      className="mint-btn text-decoration-none px-sm-5"
                      href="#mint"
                    >
                      Mint Now
                    </a>
                  </button>
                </div>
              </div>
              <p className="mb-0 mt-4 hero-small-para py-2">Launch Date:</p>
              <h3 className="sub-heading text-white ff-potta">
                28th FEB, 2022
              </h3>
            </div>
            <div
              className="col-lg-6 col-12 d-flex flex-column justify-content-center order-1 order-lg-2"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <img
                className="w-100 hero-img"
                src={heroSnailImage}
                alt="heroSnailImage"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
