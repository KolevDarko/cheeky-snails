import React from "react";
import roadmapCircle from "../assets/img/roadmap-circle.png";
import { LineIcon } from "./common/Icons";

const Roadmap = () => {
  return (
    <>
      <section id="roadmap">
        <div
          className="container"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <h2 className="heading text-white ff-potta mt-sm-5">RoadMap</h2>
        </div>
        <div
          className="container d-none d-lg-block py-5 mt-lg-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <div className="d-flex justify-content-between">
            <div className="text-center px-2">
              <div className="position-relative custom-shadow line">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">10%</h2>
              </div>
              <p className="para-normal mt-lg-4">Giveaway of 10 snails</p>
            </div>
            <div className="text-center px-2">
              <div className="position-relative custom-shadow line">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">25%</h2>
              </div>
              <p className="para-normal mt-lg-4">Rarity Sniper listing</p>
            </div>
            <div className="text-center px-2">
              <div className="position-relative custom-shadow line">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">50%</h2>
              </div>
              <p className="para-normal mt-lg-4">
                Physical art and merch store
              </p>
            </div>
            <div className="text-center px-2">
              <div className="position-relative custom-shadow line">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">75%</h2>
              </div>
              <p className="para-normal mt-lg-4">Giveaway of 15 snails</p>
            </div>
            <div className="text-center px-2">
              <div className="position-relative custom-shadow">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">100%</h2>
              </div>
              <p className="para-normal mt-lg-4">Charity donation</p>
            </div>
          </div>
        </div>
        <div className="container pt-5 d-lg-none">
          <div className="row">
            <div className="col-4">
              <div className="position-relative text-center custom-shadow mx-auto">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">10%</h2>
              </div>
              <div className="text-center">
                <LineIcon />
              </div>
            </div>
            <div className="col-8">
              <p className="para-normal mt-4 mb-0">Giveaway of 10 snails</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="position-relative text-center custom-shadow mx-auto">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">25%</h2>
              </div>
              <div className="text-center">
                <LineIcon />
              </div>
            </div>
            <div className="col-8">
              <p className="para-normal mt-4 mb-0">Rarity Sniper listing</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="position-relative text-center custom-shadow mx-auto">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">50%</h2>
              </div>
              <div className="text-center">
                <LineIcon />
              </div>
            </div>
            <div className="col-8">
              <p className="para-normal mt-4 mb-0">
                Physical art and merch store
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="position-relative text-center custom-shadow mx-auto">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">75%</h2>
              </div>
              <div className="text-center">
                <LineIcon />
              </div>
            </div>
            <div className="col-8">
              <p className="para-normal mt-4 mb-0">Giveaway of 15 snails</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="position-relative text-center custom-shadow mx-auto">
                <img src={roadmapCircle} alt="" />
                <h2 className="roadmap-circle-text">100%</h2>
              </div>
            </div>
            <div className="col-8">
              <p className="para-normal mt-4 mb-0">Charity donation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
