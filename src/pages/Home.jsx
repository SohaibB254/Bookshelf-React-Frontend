import React from "react";
import PopularCategories from "../components/PopularCategories";
import OnSale from "../components/OnSale";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import LatestReleases from "../components/LatestReleases";
import { Link } from "react-router";
import Ad from "../components/Ad";
import ChatWidget from "../components/Chatwidget";
import Plans from "../components/Plans";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import OurMission from "../components/OurMission";
import Features from "../components/Features";
import { useHomeV } from "../context/HomeVContext";
import booksData from "../data/books";
import { useCheckout } from "../context/CheckoutContext";
import TextType from '../components/TextType'
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { homeV } = useHomeV();
  const { addToCheckout } = useCheckout()
  const headerBooks = booksData.slice(3, 6);
  const { theme } = useTheme()
  return (
    <>
      {/* Home V2 Design */}
      {homeV === "v2" ? (
        <div
          id="hv2"
          className="h-[100vh] sm:h-[min(90vh,50vw)] bg-gray-100 dark:bg-gray-900 py-8"
        >
          <header id="headerV2" className="lg:px-10  flex overflow-auto  py-4">

            {headerBooks.map((book) => {
              return (
                <div
                  key={book.id}
                  className="header-books  flex py-4 md:flex-row flex-col  justify-center items-center gap-8 lg:gap-8"
                >
                  <div
                    id="text"
                    className=" flex flex-col gap-1 sm:items-start items-center sm:gap-4"
                  >
                    <h1 className="lg:text-6xl text-3xl font-bold uppercase sm:max-w-xl max-w-52 text-center sm:text-start  text-[var(--comp)]">
                      {book.title}
                    </h1>
                    <p className=" bg-gray-200 dark:bg-gray-700 text-[var(--baseColor)] dark:text-[var(--lighter)] px-2 rounded-md border-gray-600 border w-fit text-base">
                      {book.category}
                    </p>

                    <h1 className="lg:text-5xl text-2xl font-bold text-[var(--baseColor)]">
                       Rs: {Math.round(book.price - (book.price * book.sale_percent) / 100)}{" "}
                      <span
                        className={`${
                          book.sale_percent === 0 ? "hidden" : ""
                        } italic text-gray-500 sm:text-xl text-xs line-through`}
                      >
                        {book.price}
                      </span>
                    </h1>
                    <h1 className=" font-bold">
                     <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                     <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                     <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                     <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                     <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                      <span className="text-zinc-500">8 Reviews(s)</span>{" "}
                    </h1>
                    <Link to={`/home/book/${encodeURIComponent(book.id)}`} onClick={()=>addToCheckout(book)} className="w-fit bg-[var(--baseColor)] hover:text-black transition sm:p-2 p-1 sm:px-4 text-white font-semibold my-2 rounded-md">
                      See Details
                    </Link>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${book.cover_photo})`,
                    }}
                    className={` bg-cover  relative overflow-hidden b lg:w-[500px] lg:h-[500px] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full flex items-center justify-center p-10`}
                  >
                    <div className="absolute inset-0 backdrop-blur-[2px] bg-black/50"></div>
                    <div
                      id="img"
                      className="lg:h-[300px] z-20 h-[150px] sm:h-[200px]"
                    >
                      <img className=" h-full" src={book.cover_photo} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </header>
        </div>
      ) : (
        // Home V1 Design
        <div
          id="Home"
          className="  flex-col py-10 flex font-sans relative text-black  bg-gray-100/80 justify-between dark:bg-gray-800  items-center dark:text-white h-[90vh] sm:h-[min(90vh,90vw)]"
        >
          {/* Overlay */}

<div className="absolute h-full w-full bg-gray-300/30 dark:bg-gray-900/60 backdrop-blur-sm top-0">
  </div>
       <div
            className="h-full z-20 flex justify-center items-center"
          >
            {/* Home left */}
            <div className="w-[100%] flex flex-col px-4  ">
              <TextType
              className="sm:text-[46px] md:text-[76px] text-[40px] text-center text-shadow  leading-tight    font-merri  font-bold "
              text={["An Online Library"]}
              typingSpeed={80}
              cursorCharacter=""

              textColors={['var(--baseColor)']}
               />
              <TextType
              className="sm:text-[46px] md:text-[76px] text-[40px] text-center text-shadow  leading-snug  font-merri  font-bold "
              text={["And Book Store"]}
              typingSpeed={80}
              initialDelay={1000}
               cursorCharacter=""
              textColors={[`${theme === 'dark'?'#E0E0E0':'#111827'}`]}
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
      )}

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
