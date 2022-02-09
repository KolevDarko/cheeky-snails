import React from "react";
import Slider from "react-slick";
import sliderimg1 from "../assets/img/carousel-1.png";
import sliderimg2 from "../assets/img/carousel-2.png";
import sliderimg3 from "../assets/img/carousel-3.png";
import sliderimg4 from "../assets/img/carousel-4.png";
import sliderimg5 from "../assets/img/carousel-5.png";
import sliderimg6 from "../assets/img/carousel-6.png";
import sliderimg7 from "../assets/img/carousel-7.png";

const SnailSlider = () => {
  var settings = {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="margin-negative pt-sm-5 pt-lg-0 z-10 position-relative"
        data-aos="zoom-in-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <Slider {...settings}>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg1}
              alt="sliderimg1"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg2}
              alt="sliderimg2"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg3}
              alt="sliderimg3"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg4}
              alt="sliderimg4"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg5}
              alt="sliderimg5"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg6}
              alt="sliderimg6"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg7}
              alt="sliderimg7"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg5}
              alt="sliderimg5"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg4}
              alt="sliderimg4"
            />
          </div>
          <div>
            <img
              className="snails-slider-img"
              src={sliderimg6}
              alt="sliderimg6"
            />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default SnailSlider;
