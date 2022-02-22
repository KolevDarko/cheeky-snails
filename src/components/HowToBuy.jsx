import React from "react";
import howtobuyimg from "../assets/img/how-to-buy-img.png";
import rightshade from "../assets/img/right-shadow-2.png";
import leftshade from "../assets/img/left-shadow-2.png";

const HowToBuy = () => {
  return (
    <>
      <section id="how-to-buy" className="position-relative py-sm-5">
        <img className="right-shade-3" src={rightshade} alt="" />
        <img className="left-shade-3" src={leftshade} alt="" />
        <div className="container py-5">
          <div className="row align-items-center align-items-xxl-start">
            <div
              className="col-lg-11 mx-auto col-xl-5"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <img className="w-100" src={howtobuyimg} alt="how-to-buy-img" />
            </div>

            <div
              className="col-lg-11 col-xl-7 mx-auto text-white mt-4 mt-xl-0"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <div className="ps-xxl-3 ms-xxl-3">
                <h1 className="heading ff-potta mb-0">How To Buy</h1>
                <p className="hero-para mb-4">
                  Here are the steps on what you need to do to get your Cheeky
                  Snail.
                </p>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">1.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    Download the metamask.io extension on your browser.
                  </p>
                </div>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">2.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    Purchase Ethereum from various exchanges, such as Coinbase
                    or Binance.
                  </p>
                </div>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">3.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    Send Ethereum to your MetaMask wallet.
                  </p>
                </div>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">4.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    On launch day, open the cheeky snails website and select the
                    number of NFTs you wish to mint – up to 10 per transaction
                    for the first 777 nft’s, and 20 per transaction for the
                    remaining supply.
                  </p>
                </div>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">5.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    Click “MINT” button, Metamask will popup asking for
                    connection.
                  </p>
                </div>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">6.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    Confirm the transaction and any associated fees.
                  </p>
                </div>

                <div className="d-flex">
                  <p className="para-normal ff-gilory fw-medium mb-0">7.</p>
                  <p className="para-normal ff-gilory fw-medium mb-0 ms-1">
                    Once you have made your purchase, your Cheeky Snail will
                    appear in your wallet and on OpenSea!
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

export default HowToBuy;
