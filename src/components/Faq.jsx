import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./common/data";
import { DownArrowIcon } from "./common/Icons";
import rightshade from "../assets/img/right-shadow-2.png";
import leftshade from "../assets/img/left-shadow-2.png";

const Faq = () => {
  const [view, setView] = React.useState(null);
  const activeHandler = (value) => {
    console.log(value);
    if (value === view) {
      setView(null);
    } else {
      setView(value);
    }
  };

  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1500"
        className="bg-faq-img py-sm-5 pt-5 pb-0 position-relative"
        id="faq"
      >
        {" "}
        <img className="right-shade-5" src={rightshade} alt="" />
        <img className="left-shade-5" src={leftshade} alt="" />
        <div className="animate-2"></div>
        <div className="container py-5">
          <h1
            className="heading color-white ff-potta mb-5 pb-2 ps-3 ms-1"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            FAQs
          </h1>
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => activeHandler(index)}
              className={`faq-wrapper mb-sm-4 mb-2 py-2 px-0 px-md-3   ${
                index === view ? "active" : ""
              }`}
            >
              <div
                className={`d-flex align-items-center justify-content-between  sub-heading color-white ff-potta  cursor-pointer`}
              >
                {item.question}{" "}
                <span
                  className={`transition-0_3sease ${
                    index === view ? "rotate-icon" : ""
                  }`}
                >
                  <DownArrowIcon />
                </span>
              </div>
              <AnimatePresence>
                {index == view ? (
                  <>
                    <motion.div
                      transition={{ type: "spring", stiffness: 80 }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { type: "spring", stiffness: 70 },
                      }}
                      className={`para color-white ff-gilory  border-bottom-blue ms-md-5 `}
                    >
                      <p className="my-3">{item.answer}</p>
                    </motion.div>
                  </>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
