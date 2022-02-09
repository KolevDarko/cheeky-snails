import React from "react";
import { useScreenFixedProvider } from "../contexts/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
import { headerData } from "./common/data";
import logo from "../assets/img/logo.png";

const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper justify-content-between py-md-3 bg-black">
        <div className="container">
          <Desktop>
            <div
              className="d-flex w-100 align-items-center justify-content-between list-unstyled"
              data-aos="flip-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <li>
                <img src={logo} alt="logo" />
              </li>
              <div className="d-flex align-items-center">
                <div>
                  {headerData.map((item, index) => (
                    <li
                      key={index}
                      className={`mx-2 mx-xl-3 nav-list-items p-2 d-inline-block ${
                        index == 0 ? "active" : ""
                      }`}
                    >
                      <a href={`#${item.url}`}>{item.title}</a>
                    </li>
                  ))}
                </div>{" "}
                <div>
                  <button className="connect-wallet">Connect wallet</button>
                </div>
              </div>
            </div>
          </Desktop>

          {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
          <BeforeDesktop>
            <div
              className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}
            >
              {" "}
              <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column text-center ">
                  <ul className="p-0">
                    <li className=" transition-0_3sEase overflow-hidden">
                      <span
                        className="py-2  d-inline-block cursor-pointer"
                        onClick={() => setShowOverlay(false)}
                      >
                        <a
                          href="#about"
                          className="nav-link  font-xl ff-fresh text-white text-decoration-none"
                        >
                          About
                        </a>
                      </span>
                    </li>
                    <li className=" transition-0_3sEase overflow-hidden">
                      <span
                        className="py-2  d-inline-block cursor-pointer"
                        onClick={() => setShowOverlay(false)}
                      >
                        <a
                          href="#roadmap"
                          className="nav-link  font-xl ff-fresh text-white text-decoration-none"
                        >
                          RoadMap
                        </a>
                      </span>
                    </li>
                    <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                      <span
                        className="py-2  d-inline-block cursor-pointer"
                        onClick={() => setShowOverlay(false)}
                      >
                        <a
                          href="#how-to-buy"
                          className="nav-link  font-xl ff-fresh text-white text-decoration-none"
                        >
                          How To Buy
                        </a>
                      </span>
                    </li>
                    <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                      <span
                        className="py-2 d-inline-block cursor-pointer"
                        onClick={() => setShowOverlay(false)}
                      >
                        <a
                          href="#team"
                          className="nav-link  font-xl ff-fresh text-white text-decoration-none"
                        >
                          Team
                        </a>
                      </span>
                    </li>
                    <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                      <span
                        className="py-2 d-inline-block cursor-pointer"
                        onClick={() => setShowOverlay(false)}
                      >
                        <a
                          href="#faq"
                          className="nav-link font-xl ff-fresh text-white text-decoration-none"
                        >
                          FAQs
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <nav className="navbar h-86 navbar-expand-lg navbar-light py-3  p-sm-3 w-100">
              <div className="d-flex justify-content-between w-100 align-items-center list-unstyled">
                <a href="">
                  <img className="nav-logo" src={logo} alt="" />
                </a>
                <div>
                  <button className="connect-wallet">Connect wallet</button>
                </div>
                <div
                  className={`${
                    showOverlay ? "animate" : ""
                  } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-lg-none`}
                  onClick={() => setShowOverlay(!showOverlay)}
                >
                  <span className="first d-inline-block"></span>
                  <span className="second d-inline-block"></span>
                  <span className="third d-inline-block"></span>
                </div>
              </div>
            </nav>
          </BeforeDesktop>
        </div>
      </section>
    </>
  );
};

export default Header;