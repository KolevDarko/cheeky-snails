import React from "react";
import heroSnailImage from "../../assets/img/hero-snail-img.png";

const Loader = () => {
  return (
    <>
      <div className="loader-fullscreen">
        <img src={heroSnailImage} alt="heroSnailImage" />
      </div>
    </>
  );
};

export default Loader;
