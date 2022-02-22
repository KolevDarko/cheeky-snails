import React, { useState } from "react";
import mintNftimg from "../assets/img/mint-nft.png";
import { MinusIcon, PlusIcon } from "./common/Icons";
import rightshade from "../assets/img/right-shadow-2.png";
import { ethers } from "ethers";
import { useAuthProvider } from "../contexts/AuthProvider";

const artifact = require("./abi.json");
const snailsContractAddress = "0xF656B8ba8bd6edd8146F9D34a783Cd87382A36D9";

const MintNft = () => {
  const [mintValue, setMintValue] = useState(10);
  const [snailsContract, setSnailsContract] = useState(null);
  const { signer, networkId } = useAuthProvider();
  const [valueError, setValueError] = useState();

  function handleIncreaseMintValue() {
    if (mintValue < 20) {
      const intValue = parseInt(mintValue);
      if (isNaN(intValue)) {
        setValueError("Mint amount is not a number");
      } else {
        setMintValue(intValue + 1);
        setValueError(null);
      }
    }
  }

  function mintValueHandler(value) {
    const newVal = parseInt(value);
    if (isNaN(newVal)) {
      setValueError("Mint amount is not a number");
    } else {
      setMintValue(newVal);
      setValueError(null);
    }
  }

  function handleDecreaseMintValue() {
    if (mintValue > 0) {
      const intValue = parseInt(mintValue);
      if (isNaN(intValue)) {
        setValueError("Mint amount is not a number");
      } else {
        setMintValue(intValue - 1);
        setValueError(null);
      }
    }
  }

  const [tokenPrice, setTokenPrice] = useState("?");
  const [supply, setSupply] = useState("?");
  const [currentPriceLeft, setCurrentPriceLeft] = useState("?");

  React.useEffect(() => {
    console.log("MINT: UPDATING SUPPLY");
    const updateSupply = async () => {
      if (signer) {
        if (!validNetwork()) {
          console.log("is wrong network???");
          setValueError("Please connect your wallet to ethereum mainnet");
          return;
        }
        const currentContract = new ethers.Contract(
          snailsContractAddress,
          artifact.abi,
          signer
        );
        const mintedSupplyBN = await currentContract.totalSupply();
        const mintedSupply = parseInt(mintedSupplyBN.toString());
        setSupply(mintedSupply);
        if (mintedSupply < 777) {
          setTokenPrice("0");
          const tokensLeft = 777 - mintedSupply;
          setCurrentPriceLeft(tokensLeft.toString());
        } else if (mintedSupply < 2777) {
          setTokenPrice("0.01");
          const tokensLeft = 2000 - mintedSupply;
          setCurrentPriceLeft(tokensLeft.toString());
        } else {
          const tokensLeft = 7777 - mintedSupply;
          setCurrentPriceLeft(tokensLeft.toString());
          setTokenPrice("0.02");
        }
        setSnailsContract(currentContract);
        setValueError("");
      } else {
        setValueError("Connect metamask first");
      }
    };
    updateSupply();
  }, [signer, networkId]);

  function validNetwork() {
    return networkId === 1;
  }

  async function mintNow() {
    // Can put better error message below mint button directly
    if (!snailsContract) {
      alert("Connect Metamask first");
      return;
    }
    if (!validNetwork()) {
      alert("Connect to ethereum mainnet network first");
      return;
    }
    const totalPrice = ethers.utils
      .parseEther(tokenPrice)
      .mul(parseInt(mintValue));
    await snailsContract.mint(mintValue, { value: totalPrice });
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
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <img className="w-100" src={mintNftimg} alt="mintNftimg" />
            </div>
            <div
              className="col-lg-5 col-12 d-flex flex-column justify-content-center"
              data-aos="fade-left"
              data-aos-anchor-placement="top-left"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <h2 className="heading text-white ff-potta mb-3">Mint NFT</h2>
              <div className="d-flex justify-content-between mt-lg-5">
                <div>
                  <h3 className="fs-md text-white ff-potta">{supply} minted</h3>
                  <p className="para-normal text-white mb-0">of 7,777</p>
                  <div className="mt-lg-5 mt-4">
                    <h3 className="fs-md text-white ff-potta">Max 20 NFTs</h3>
                    <p className="para-normal text-white">per transaction</p>
                  </div>
                </div>
                <div>
                  <h3 className="fs-md text-white ff-potta">
                    Price: {tokenPrice} ETH
                  </h3>
                  <p className="para-normal text-white mb-0">
                    per NFT({currentPriceLeft} left at this price!)
                  </p>
                  <div className="mt-lg-5 mt-4">
                    <h3 className="fs-md text-white ff-potta">
                      20 Transactions
                    </h3>
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
                    type="number"
                    max="20"
                    value={mintValue}
                    onChange={(evt) => {
                      mintValueHandler(evt.target.value);
                    }}
                  />
                  {valueError && (
                    <div className="text-center para-normal text-white">
                      <span>{valueError}</span>
                    </div>
                  )}
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
                <button className="connect-wallet" onClick={() => mintNow()}>
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MintNft;
