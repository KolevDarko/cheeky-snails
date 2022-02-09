import React from "react";
import Slider from "react-slick";
import miyagisan1 from "../assets/img/miyagisan1.png";
import engineer1 from "../assets/img/engineer-1.png";
import professorSnail1 from "../assets/img/professorSnail1.png";
import Achilles from "../assets/img/Achilles.png";
import Arwen from "../assets/img/Arwen.png";
import rightshade from "../assets/img/right-shadow-2.png";
import leftshade from "../assets/img/left-shadow-2.png";

const Team = () => {
  var settings = {
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="team" className="pb-3  mb-sm-3 position-relative">
        <img className="right-shade-4" src={rightshade} alt="" />
        <img className="left-shade" src={leftshade} alt="" />

        <div className="container py-5">
          <div className="row">
            <div
              className="col-12"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <h1 className="heading color-white text-center ff-potta mb-sm-5 pb-5">
                Team
              </h1>
              <div
                className="row"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1500"
              >
                <div className="col-xxl-12 col-sm-11 mx-auto position-relative">
                  <div className="custom-btns d-none d-sm-block"></div>

                  <Slider {...settings}>
                    <div>
                      <div className="team-card mx-3 mx-xl-4 py-1">
                        <div className="team-img-parent">
                          <img
                            className="w-100 h-100 mx-auto object-fit-cover"
                            src={miyagisan1}
                            alt="team-img-1"
                          />
                        </div>
                        <div className="text-center team-text-content">
                          <h2 className="team-heading ff-potta">MiyagiSan</h2>
                          <p className="team-para ff-gilory">(Founder)</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="team-card mx-3 mx-xl-4 py-1">
                        <div className="team-img-parent">
                          <img
                            className="w-100 h-100 mx-auto object-fit-cover"
                            src={professorSnail1}
                            alt="img"
                          />
                        </div>
                        <div className="text-center team-text-content">
                          <h2 className="team-heading ff-potta">
                            ProfessorSnail
                          </h2>
                          <p className="team-para ff-gilory">(Co-founder & Community manager)</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="team-card mx-3 mx-xl-4 py-1">
                        <div className="team-img-parent">
                          <img
                            className="w-100 h-100 mx-auto object-fit-cover"
                            src={engineer1}
                            alt="img"
                          />
                        </div>
                        <div className="text-center team-text-content">
                          <h2 className="team-heading ff-potta">TheEngineer</h2>
                          <p className="team-para ff-gilory mb-0">(Co-founder & Developer)</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="team-card mx-3 mx-xl-4 py-1">
                        <div className="team-img-parent">
                          <img
                            className="w-100 h-100 mx-auto object-fit-cover"
                            src={Arwen}
                            alt="img"
                          />
                        </div>
                        <div className="text-center team-text-content">
                          <h2 className="team-heading ff-potta">Arwen</h2>
                          <p className="team-para ff-gilory">
                            (Co-founder & Designer)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="team-card mx-3 mx-xl-4 py-1">
                        <div className="team-img-parent">
                          <img
                            className="w-100 h-100 mx-auto object-fit-cover"
                            src={Achilles}
                            alt="img"
                          />
                        </div>
                        <div className="text-center team-text-content">
                          <h2 className="team-heading ff-potta">
                            Achilles
                          </h2>
                          <p className=" font-normal team-para">
                            (Co-founder & Marketing specialist)
                          </p>
                        </div>
                      </div>
                    </div>

                  </Slider>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
