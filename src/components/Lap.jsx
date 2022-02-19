import React from "react";
import Lap1 from "../assets/img/lap-1-img.png";
import Lap2 from "../assets/img/lap-2-img.png";
import Lap3 from "../assets/img/lap-3-img.png";
import Lap4 from "../assets/img/lap-4-img.png";
import rightshade from "../assets/img/right-shadow.png";
import leftshade from "../assets/img/left-shadow.png";

const Lap = () => {
  return (
    <>
      <section className="bg-lap-img position-relative pb-lg-5 mb-xl-5 mt-5">
        <img className="right-shade-2" src={rightshade} alt="" />
        <img className="left-shade-2" src={leftshade} alt="" />
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              {/* <!---------------- LAP-1 ------------------> */}
              <div
                className="d-flex flex-column flex-md-row"
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div>
                  <img src={Lap1} alt="lap-1-img" />
                </div>
                <div className="ms-md-3 mt-3 mt-md-0">
                  <h1 className="sub-heading color-white ff-potta mb-4">
                    Lap 1 - Token and Staking
                  </h1>
                  <p className="team-para ff-gilory">
                    This one is for those with big hearts. We came up with the
                    idea of reminding people that we have to give some, to get
                    some. It's the basic rule of the universe. Of course, there
                    will be a token, but it’s not an ordinary token. Every
                    Cheeky Snail owner will be eligible to claim the $SLIME, but
                    with an option to choose between claiming, staking, or
                    donating. Those who decide to donate their tokens are up for
                    a very fun ride. But let’s keep some mystery for later.
                  </p>
                </div>
              </div>
              {/* <!---------------- LAP-2 ------------------> */}
              <div
                className="d-flex flex-column flex-md-row mt-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div>
                  <img src={Lap2} alt="lap-2-img" />
                </div>
                <div className="ms-md-3 mt-3 mt-md-0">
                  <h1 className="sub-heading color-white ff-potta mb-4">
                    Lap 2 - Pixel Snails & Web3 preparation
                  </h1>
                  <p className="team-para ff-gilory">
                    Very shortly after the Cheeky Snails find their homes, we
                    are launching another collection of exactly the same snails,
                    but pixelated. These little fellas will be free of charge
                    for the holders of Cheeky Snails. The next step will be the
                    integration of these fellas into the metaverse. For example,
                    we will buy a land for our business and fully integrate
                    cheeky snails as pets in the world wide metaverse. Over
                    there, each owner will be able to train and battle his snail
                    vs other player's pets.
                  </p>
                </div>
              </div>
              {/* <!---------------- LAP-3 ------------------> */}
              <div
                className="d-flex flex-column flex-md-row mt-5"
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div>
                  <img src={Lap3} alt="lap-3-img" />
                </div>
                <div className="ms-md-3 mt-3 mt-md-0">
                  <h1 className="sub-heading color-white ff-potta mb-4">
                    Lap 3 – Breeding
                  </h1>
                  <p className="team-para ff-gilory">
                    Some snails are cheekier than others but fear not if you
                    missed getting the cheeky one you like. You will be able to
                    make a perfect combination with breeding the best two snails
                    you have, or maybe you can just upgrade your robot snail
                    with some new cool wheels using a potion. There will be
                    limitless combinations, and we promise it’s going to be
                    beneficial and most important, FUN.
                  </p>
                </div>
              </div>
              {/* <!---------------- LAP-4 ------------------> */}
              <div
                className="d-flex flex-column flex-md-row mt-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div>
                  <img src={Lap4} alt="lap-4-img" />
                </div>
                <div className="ms-md-3 mt-3 mt-md-0">
                  <h1 className="sub-heading color-white ff-potta mb-4">
                    Lap 4 – DAO
                  </h1>
                  <p className="team-para ff-gilory">
                    As a community governed project, we need a decentralized way
                    of making important decisions. That is why we are going to
                    build a DAO voting mechanism to make sure that our exclusive
                    owners will be taking part in the way this project develops
                    in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lap;
