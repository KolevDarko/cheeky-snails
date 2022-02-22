import React from "react";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
import heroSnailImage from "../assets/img/hero-snail-img.png";
import moment from "moment";
const Hero = () => {
  const [untilLaunch, setUntilLaunch] = React.useState();
  var launchDate = moment.utc("2022-02-22T23:30:00");
  React.useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const timeLeft = launchDate.valueOf() - now.valueOf();
      const hoursLeft = Math.floor(timeLeft / 3600000);
      const minutesLeft = Math.floor((timeLeft - hoursLeft * 3600000) / 60000);
      const secondsLeft = Math.floor(
        (timeLeft - hoursLeft * 3600000 - minutesLeft * 60000) / 1000
      );
      const timeLeftUI = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
      setUntilLaunch(timeLeftUI);
    }, 1000);
  });

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
              <div className="mb-0 mt-4 hero-small-para py-2">
                <h3 className="sub-heading text-white ff-potta">
                  Launch timer: {untilLaunch}
                </h3>
              </div>
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
