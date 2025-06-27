import { motion } from "motion/react";

const Card = ({ containerRef, image, style, text, className = "" }) => {
  return image && !text ? (
    <motion.img
      className={`absolute w-15 cursor-grab ${className}`}
      drag
      dragConstraints={containerRef}
      dragElasticity={1}
      src={image}
      alt={"technologies logo"}
      style={style}
      whileHover={{ scale: 1.1 }}
    />
  ) : (
    <motion.div
      className={`absolute px-1 py-4 text-xl text-center text-neutral-200 rounded-full ring ring-gray-600 font-extralight bg-gray-700 w-[10rem] cursor-grab ${className}`}
      drag
      dragConstraints={containerRef}
      dragElasticity={1}
      style={style}
      whileHover={{ scale: 1.1 }}
    >
      {text}
    </motion.div>
  );
};

export default Card;
