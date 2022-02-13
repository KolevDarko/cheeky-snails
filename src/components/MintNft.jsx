import React, { useState } from "react";
import mintNftimg from "../assets/img/mint-nft.png";
import { MinusIcon, PlusIcon } from "./common/Icons";
import rightshade from "../assets/img/right-shadow-2.png";

const MintNft = () => {
  const [mintValue, setMintValue] = useState(0);

  // FOR  INCREASE MINT VALUE
  function handleIncreaseMintValue() {
    setMintValue(mintValue + 1);
  }

  // FOR  DECREASE MINT VALUE
  function handleDecreaseMintValue() {
    if (mintValue > 0) {
      setMintValue(mintValue - 1);
    }
  }

  return (
    <>
      <section className="py-sm-5 py-4 position-relative" id="mint">
        <img className="right-shade-3" src={rightshade} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-7 col-10 text-center pb-4 pb-lg-0"
              data-aos="fade-right"
              data-aos-anchor-placement="top-left"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <img className="w-100" src={mintNftimg} alt="mintNftimg" />
            </div>
            <div
              className="col-lg-5 col-12 d-flex flex-column justify-content-center"
              data-aos="fade-left"
              data-aos-anchor-placement="top-left"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <h2 className="heading text-white ff-potta mb-3">Mint NFT</h2>
              <div className="d-flex justify-content-between mt-lg-5">
                <div>
                  <h3 className="fs-md text-white ff-potta">6000 minted</h3>
                  <p className="para-normal text-white mb-0">of 10,000</p>
                  <div className="mt-lg-5 mt-4">
                    <h3 className="fs-md text-white ff-potta">Max 3 NFTs</h3>
                    <p className="para-normal text-white">per transaction</p>
                  </div>
                </div>
                <div>
                  <h3 className="fs-md text-white ff-potta">.2 ETH</h3>
                  <p className="para-normal text-white mb-0">per NFT</p>
                  <div className="mt-lg-5 mt-4">
                    <h3 className="fs-md text-white ff-potta">Transaction</h3>
                    <p className="para-normal text-white">per wallet</p>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-between pt-5">
                <div className="text-center">
                  <button
                    className="minus-plus-btn"
                    onClick={() => handleDecreaseMintValue()}
                  >
                    <MinusIcon />
                  </button>
                </div>

                <div className="w-100 mx-3">
                  <input
                    className="nft-input w-100 text-center font-md fw-normal text-white"
                    placeholder="0"
                    type="text"
                    value={mintValue}
                    readOnly
                  />
                </div>

                <div className="text-center">
                  <button
                    className="minus-plus-btn"
                    onClick={() => handleIncreaseMintValue()}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>{" "}
              <div className="mt-5 text-center text-lg-start">
                <button className="connect-wallet">Mint Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MintNft;
