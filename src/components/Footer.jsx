import React from "react";
import footersnailimg from "../assets/img/footer-snail.png";
import { DiscordIcon, TwitterIcon } from "./common/Icons";
import { InstagramIcon } from "./common/Icons";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <section
        className="position-relative pt-4 py-sm-0"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <div className="position-absolute footer-snail-img">
          <img className="w-100" src={footersnailimg} alt="footer-snail" />
        </div>
        <div className="container py-5">
          <div className="text-center">
            <a href="#">
              {" "}
              <img src={logo} alt="" />
            </a>
            <div className="d-flex align-items-center justify-content-center mt-4 mt-sm-5 pt-1 footer-svgs">
              <a href="https://www.twitter.com/">
                <TwitterIcon />
              </a>
              <a className="mx-3 px-1" href="https://www.instagram.com/">
                {" "}
                <InstagramIcon />
              </a>
              <a href="https://www.discord.com/">
                <DiscordIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-text">
          <p className="hero-small-para ff-gilory mb-0 text-center mt-1 pt-3 pb-4">
            Copyright 2022 CheekySnails.com
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
