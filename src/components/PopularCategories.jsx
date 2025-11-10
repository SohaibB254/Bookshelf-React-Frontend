import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const PopularCategories = () => {
  const FamousCatData = [
    { CatName: "Fantasy" },
    { CatName: "Science Fiction" },
    { CatName: "History" },
    { CatName: "Bussiness" },
    { CatName: "Mystery" },
  ];
  const controls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    controls.start({
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const handlePause = () => controls.stop();
  const handlePlay = () =>
    controls.start({
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });

  return (
    <div className="w-full overflow-hidden relative dark:bg-gray-900 group mt-10 py-10 font-inter">
      <h1 className="text-center mb-8 font-semibold sm:text-3xl text-xl dark:text-[var(--lighter)] text-[var(--darker)]">
        Popular Categories
      </h1>
      <div className="w-screen py-8 dark:to-gray-900 dark:via-gray-700 dark:from-gray-900 bg-gradient-to-r from-white  via-gray-300">
        {/* Scrolling Div */}
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex w-max "
          onMouseEnter={handlePause}
          onMouseLeave={handlePlay}
          onTouchStart={handlePause}
          onTouchEnd={handlePlay}
        >
          {/* Doubled items for seamless loop */}
          {[...FamousCatData, ...FamousCatData].map((elm, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:animate-pulse transition-transform flex dark:text-gray-900 text-white  items-center mx-4"
            >
              <h1 className="sm:text-[50px] text-xl p-3  ">{elm.CatName}</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PopularCategories;
