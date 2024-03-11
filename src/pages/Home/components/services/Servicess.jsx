import React, { useRef } from "react";
import "./servicess.scss";
import { motion, useInView } from "framer-motion";
import imgpeople from "../../../../assets/img/people.webp";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

const Servicess = () => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      className="services"
      // variants={variants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textcontainer" 
      // variants={variants}
      >
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titlecontainer" 
      // variants={variants}
      >
        <div className="title">
          <img src={imgpeople} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business
          </h1>
          <button>WHAT WE DO? </button>
        </div>
      </motion.div>
      <motion.div className="listcontainer "
      //  variants={variants}
        ref={inViewRef}>
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className="box"
            // variants={variants}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              ratione eum voluptatibus amet optio incidunt repellendus. In
              voluptatum blanditiis commodi at laborum eos adipisci delectus.
              Illo, itaque. Aspernatur, cumque ex.
            </p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Servicess;
