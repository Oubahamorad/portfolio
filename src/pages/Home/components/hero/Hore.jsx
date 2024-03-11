import React from "react";
import "./hero.scss";
import imageprofaile from "../../../../assets/img/DSC_0803-removebg-preview.png";
import scrol from "../../../../assets/img/scroll.png";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  },
};

const sliderVariants = {
    initial: {
      x: 0,
   
    },
    animate: {
      x:"-220%",
 
      transition: {
        repeat:Infinity,
        repeatType:"mirror",
        duration: 20,
       
      },
    }
  };
  
const Hore = () => {
  return (
    <div className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="textcontainer "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Morad Oubaha</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Ui designe
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Laste Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scrol}
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div className="slidingTextcontainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>
      <div className="imagecontainer">
        <img src={imageprofaile} alt="" />
      </div>
    </div>
  );
};

export default Hore;
