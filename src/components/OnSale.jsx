import React, { useEffect, useState } from "react";
import booksData from "../data/books";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";

const OnSale = () => {
  const [isMobile, setIsMobile] = useState(false);
  const filteredBooks = booksData.filter((item) => item.sale_percent !== 0);
  const top3Trending = filteredBooks.slice(3, 7);
  const animatedBooks = isMobile
    ? [...top3Trending, ...top3Trending]
    : top3Trending;

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      const isPhone = width <= 640;

      setIsMobile(isPhone);
    };
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const location = useLocation();

  return (
    <div className="h-auto font-inter text-[30px] overflow-x-hidden font-inter  px-8 sm:px-12 pt-10">
      <h1 className="font-semibold lg:text-[1.3em] text-2xl mb-10">On Sale</h1>
      <motion.div
        animate={isMobile ? { x: ["0%", "-50%"] } : {}}
        transition={
          isMobile
            ? {
                repeat: Infinity,
                repeatType: "loop",
                duration: 12,
                ease: "linear",
              }
            : {}
        }
        className="flex gap-4 sm:flex-nowrap justify-center sm:w-full w-max "
      >
        {animatedBooks.map((elm, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className=" group border border-black/50 w-[250px]   sm:w-[22vw] cursor-pointer relative"
            >
              <img className=" aspect-auto" src={elm.cover_photo} alt="" />
              <h1 className="font-bold absolute top-0 w-full text-red-800 bg-yellow-300 text-[40px] text-center">
                <span className="animate-pulse">{elm.sale_percent}% OFF </span>
              </h1>
              <div className=" flex absolute items-center  transition py-2  group-hover:opacity-100 sm:opacity-0 justify-center  w-full text-sm bg-black px-8 bottom-0  gap-4">
                <button className="text-white    sm:px-3 py-1">
                  Read Online
                </button>
                <Link to={"/checkout"}>
                  <button className="underline  px-3 py-1 text-white">
                    Checkout
                  </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <Link
        to={`/store/${encodeURIComponent("salebooks")}`}
        className="text-base sm:mx-0 mx-8  text-center my-4 hover:underline w-auto"
      >
        See More
      </Link>
    </div>
  );
};

export default OnSale;
