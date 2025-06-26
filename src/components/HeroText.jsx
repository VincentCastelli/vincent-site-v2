import { motion } from "motion/react";
import useDarkMode from "../hooks/useDarkMode";
import FlipWords from "./FlipWords";

const HeroText = () => {
  const isDarkMode = useDarkMode();
  const words = ["Responsive", "Streamlined", "Engaging", "Enjoyable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className={"flex-col hidden md:flex c-space"}>
        <motion.h1
          className="text-5xl font-medium pl-1 mb-30"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {`Hi, I am `}
          <span className={isDarkMode ? "text-primary" : "text-secondary"}>
            Vincent
          </span>
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-6xl font-medium pl-0.5 text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Senior Engineer <br /> Passionate About Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <FlipWords
              className={`font-black text-8xl ${
                isDarkMode ? "text-primary" : "text-secondary"
              }`}
              words={words}
            />
          </motion.div>
          <motion.p
            className="text-5xl font-medium pl-1 mt-1 text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            User Experiences
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-2 md:hidden -mt-4">
        <motion.p
          className="text-3xl font-medium mb-10"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {`Hi, I am `}
          <span className={isDarkMode ? "text-primary" : "text-secondary"}>
            Vincent
          </span>
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Senior Engineer <br /> Passionate About Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <FlipWords
              className={`font-black text-6xl ${
                isDarkMode ? "text-primary" : "text-secondary"
              }`}
              words={words}
            />
          </motion.div>
          <motion.p
            className="text-3xl font-medium mt-1 text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            User Experiences
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
