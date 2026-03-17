import React from "react";
import PopularCategories from "../components/sections/PopularCategories";
import OnSale from "../components/sections/OnSale";
import NewsLetter from "../components/common/NewsLetter";
import Footer from "../components/common/Footer";
import LatestReleases from "../components/sections/LatestReleases";
import { Link } from "react-router";
import Ad from "../components/sections/Ad";
import ChatWidget from "../components/others/Chatwidget";
import Plans from "../components/sections/Plans";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import OurMission from "../components/sections/OurMission";
import Features from "../components/sections/Features";
import booksData from "../data/books";
import { useCheckout } from "../context/CheckoutContext";
import TextType from "../components/others/TextType";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { addToCheckout } = useCheckout();
  const headerBooks = booksData.slice(3, 6);
  const { theme } = useTheme();
  return (
    <>
      <div
        id="Home"
        className="  flex-col py-10 flex font-sans relative text-black  bg-gray-100/80 justify-between dark:bg-gray-800  items-center dark:text-white h-[90vh] sm:h-[min(90vh,90vw)]"
      >
        {/* Overlay */}

        <div className="absolute h-full w-full bg-gray-300/30 dark:bg-gray-900/60 backdrop-blur-sm top-0"></div>
        <div className="h-full z-20 flex justify-center items-center">
          {/* Home left */}
          <div className="w-[100%] flex flex-col px-4  ">
            <TextType
              className="sm:text-[46px] md:text-[76px] text-[40px] text-center text-shadow  leading-tight    font-merri  font-bold "
              text={["An Online Library"]}
              typingSpeed={80}
              cursorCharacter=""
              textColors={["var(--baseColor)"]}
            />
            <TextType
              className="sm:text-[46px] md:text-[76px] text-[40px] text-center text-shadow  leading-snug  font-merri  font-bold "
              text={["And Book Store"]}
              typingSpeed={80}
              initialDelay={1000}
              cursorCharacter=""
              textColors={[`${theme === "dark" ? "#E0E0E0" : "#111827"}`]}
            />
            <p className="font-inter mt-2 text-center dark:text-gray-300 fade-elm">
              Explore worlds from <strong>millions</strong> of authors across
              every genre imaginable <br />
              <span className="italic font-inter hidden sm:block">
                Epic tales, self-help gems, and timeless classics
              </span>{" "}
            </p>
            <div className="flex sm:flex-row  sm:items-center flex-col justify-center gap-2 mt-12  ">
              <Link to={"/library"}>
                <button className="u-btn  hover:bg-[var(--lighter)] border border-[var(--baseColor)]   rounded-md  w-full">
                  Start Reading
                </button>
              </Link>
              <Link to="/store/all">
                <button className=" border p-2 hover:bg-[var(--baseColor)] hover:border-[var(--baseColor)] dark:hover:border-[var(--baseColor)] dark:text-white border-black dark:border-white  rounded-md  w-full font-inter">
                  Browse Books
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white z-30 ">
          <ul className="flex w-full justify-center  gap-8 sm:gap-5">
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-instagram"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-youtube"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-facebook-f"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-twitter"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-pinterest-p"></i>
          </ul>
        </div>
      </div>
      <ChatWidget />
      <PopularCategories />
      <Ad />
      <OnSale />
      <LatestReleases />
      <OurMission />
      <Features />
      <Testimonials />
      <Plans />
      <Stats />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
