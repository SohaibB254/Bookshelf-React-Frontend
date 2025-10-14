import React from "react";
import booksData from "../data/books";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useCheckout } from '../context/CheckoutContext'


const TrendingNow = () => {
    const { addToCheckout } = useCheckout()
 const top3Trending = booksData.slice(10, 13);
  return (
    <div className="h-auto font-inter text-[30px]  px-8 sm:px-12 py-10">
      <h1 className="font-semibold  sm:text-3xl dark:text-[var(--lighter)] text-xl text-[var(--darker)] my-5">
        Trending Now
      </h1>
      <p className="text-sm text-zinc-400 my-2 sm:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint
        neque minus facilis, nesciunt eum tempora assumenda ullam quibusdam
        fugit?
      </p>
      {/* Carousel 2 */}
      <div id="carousel2" className="flex  gap-4  overflow-auto py-5 ">
        {top3Trending.map((elm) => {
          return (
            // Carousel 2 Items
            <motion.div
             key={elm.id}
              className=" latest-book flex md:flex-row flex-col gap-10  w-full justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.7,
                }}

                className="  w-[250px]  lg:h-[500px]  lg:w-[22vw] cursor-pointer group relative overflow-hidden"
              >
                <img className=" w-full h-full" src={elm.cover_photo} alt="" />
              </motion.div>
              <div id="details" className="flex flex-col  gap-3 sm:w-1/2">
                <h1 className="sm:text-3xl text-xl border-l-4 dark:text-[var(--lighter)] dark:border-[var(--lighter)] border-[var(--darker)] px-1 font-semibold text-[var(--darker)]">
                  {elm.title}
                </h1>
                <p className="sm:text-base text-sm text-[var(--baseColor)]">
                  {elm.category}
                </p>
                <p className="text-sm hidden sm:block border-l-2 px-1 text-zinc-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  voluptatum assumenda quaerat dolores nam, sunt quidem atque
                  aspernatur sint voluptas rerum, inventore sit quo quasi omnis
                  explicabo ex laborum esse.
                </p>
                <p className="text-sm border-l-2 px-1 text-zinc-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  voluptatum assumenda quaerat dolores nam, sunt quidem atque
                  aspernatur sint voluptas rerum, inventore sit quo quasi omnis
                  explicabo ex laborum esse.
                </p>
                <div className="flex flex-col gap-1 justify-around  h-full">
                  <h1 className="sm:text-3xl text-xl font-bold dark:text-[var(--lighter)] text-[var(--darker)]">
                    Rs: {elm.price}
                  </h1>
                  <div id="detailsBtns" className="flex gap-2 ">
                    <button className="text-xs sm:text-base bg-[var(--baseColor)] hover:text-black/80 text-white p-2 rounded-sm">
                      Add To Cart{" "}
                    </button>
                    <Link onClick={()=>addToCheckout(elm)} to={`/store/book/${elm.id}`} className="text-xs sm:text-base hover:bg-[var(--baseColor)] hover:text-white transition text-[var(--baseColor)] border border-[var(--baseColor)] p-2 rounded-sm">
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Link
        to={"/store/trendingbooks"}
        className="text-base sm:mx-0 mx-2 dark:text-gray-300    my-4 hover:underline"
      >
        See More
      </Link>
    </div>
  );
};

export default TrendingNow;
