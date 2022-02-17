import React from "react";
import abooutImage from "../assets/img/about-img.png";
import rightshade from "../assets/img/right-shadow.png";

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
        <img className="about-img" src={abooutImage} alt="abooutImage" />
        <div className="container py-sm-5 pb-5 my-5">
          <div className="about-card">
            <h2 className="about-heading mb-sm-4">About Project</h2>
            <p className="para-normal ff-gilory">
              After months of hard work and gathering data, our cheeky snails
              are ready and lined up on their starting position, waiting on your
              sign to begin the race. Each snail is a unique combination of
              skin, eyes, mouth, shell and special object beneath and above!
              <br />
              All of the snails are cheeky, but some are cheekier than others.
              That depends on the rarity of the traits it has. Some have lava
              skin, and some have a rocket built on the shell. Some are with
              awesome sunglasses, while others smoke some straaange cigarettes.
              Hmm… most of them are warm-hearted and cheerful, with a very few
              exceptions that are remarkably bad! As they are the most
              persistent creatures, snails prevail in almost every habitat we
              know. They are out in the garden, city, jungle, forest, field,
              river bank, desert, and even Antarctica and space! Some mysterious
              sources say they even exist on the b l o c k c h a i n...
            </p>
            <p className="para-normal ff-gilory">
              The race starts as soon as our cheeky snails find their new
              owners. Treat them with respect, and they might surprise you with
              something from under their shell!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
