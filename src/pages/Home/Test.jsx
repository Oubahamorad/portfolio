import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay:i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible">
        {items.map((item, i) => (
          <motion.li key={item} custom={i} variants={variants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
