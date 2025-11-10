import React, { useEffect, useState } from "react";
import booksData from "../data/books";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { useCart } from '../context/CartContext'
import Popup from "./Popup";

const OnSale = () => {
  const [isMobile, setIsMobile] = useState(false);
    const [popView, setPopView] = useState("hidden");
    const [popType, setPopType] = useState("");
    const [popBg, setPopBg] = useState("");
  const filteredBooks = booksData.filter((item) => item.sale_percent !== 0);
  const { addToCart } = useCart()
  const top3Trending = filteredBooks.slice(3, 7);
  const animatedBooks = isMobile
    ? [...top3Trending, ...top3Trending]
    : top3Trending;
  const handlePopup = (action, customMsg = "") => {
  let bgColor = "";
  let message = "";

  switch (action) {
    case "library":
      bgColor = "bg-blue-400";
      message = customMsg || bookExistLib;
      break;
    case "wishlist":
      bgColor = "bg-red-400";
      message = customMsg || "Book Wishlisted";
      break;
    case "cart":
      bgColor = "bg-green-400";
      message = customMsg || "Book added to Cart";
      break;
    default:
      bgColor = "bg-gray-400";
      message = customMsg || "Action completed";
      break;
  }

  // Set popup states
  setPopView("block");
  setPopType(message);
  setPopBg(bgColor);

  // Hide after delay
  setTimeout(() => {
    setPopView("hidden");
  }, 2500);
};
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
    <>
    <Popup display={popView} popBg={popBg} popType={popType} />
    <div className="h-auto font-inter text-[30px] overflow-x-hidden font-inter dark:bg-gray-900  px-8 sm:px-12 pt-10">
      <h1 className="font-semibold sm:text-3xl text-xl text-[var(--darker)] dark:text-[var(--lighter)] mb-10">On Sale</h1>
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
        className="flex gap-8 lg:gap-16 lg:flex-nowrap px-10  flex-wrap lg:justify-center sm:w-full w-max "
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
              className="  w-[250px] rounded-md overflow-hidden shadow-md dark:shadow-gray-800 dark:border-gray-800 dark:border   lg:w-[18vw] cursor-pointer relative"
            >
              <img className=" aspect-auto h-full w-full" src={elm.cover_photo} alt="" />
              <h1 className="font-bold absolute top-0 w-full text-red-800 bg-yellow-300 text-2xl text-center">
                <span className="animate-pulse">{elm.sale_percent}% OFF </span>
              </h1>
              <div className=" flex flex-col absolute  transition py-2 h-auto  px-2   w-full text-sm bg-white dark:bg-gray-900  bottom-0">
                <h1 className="sm:text-2xl text-[var(--darker)] dark:text-[var(--lighter)] font-semibold    text-xl">{elm.title}</h1>
                <p className=" bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-[var(--baseColor)] px-1 rounded-md border w-fit text-sm">{elm.category}</p>
                <p className="text-zinc-500 my-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat temporibus possimus earum delectus ex dicta ab assumenda quidem non.</p>
                 <h1 className="sm:text-2xl text-[var(--darker)] dark:text-[var(--lighter)] font-semibold    text-xl"> Rs: {elm.price}</h1>
                <button onClick={()=>{addToCart(elm),handlePopup('cart')}} className="w-fit bg-[var(--baseColor)] hover:text-black transition p-2 px-4 text-white font-semibold my-2 rounded-md">
                  Add To Cart 
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <Link
        to={`/store/${encodeURIComponent("salebooks")}`}
        className="text-base sm:mx-0 mx-8  text-center my-4 dark:text-gray-300 hover:underline w-auto"
      >
        See More
      </Link>
    </div>
    </>
  );
};

export default OnSale;
