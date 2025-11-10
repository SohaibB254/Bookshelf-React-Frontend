import React, { useState } from "react";
import booksData from "../data/books";
import { Link, useLocation, useParams } from "react-router";
import Paginations from "../components/Paginations";
import Footer from "../components/Footer";
import TrendingNow from "../components/TrendingNow";
import { useCheckout } from "../context/CheckoutContext";
import { useLibrary } from "../context/LibraryContext";
import { useCart } from "../context/CartContext";
import Popup from "../components/Popup";
import categoriesData from "../data/categories";
import { useWish } from "../context/WishContext";
const Categories = () => {
  const [popView, setPopView] = useState("hidden");
  const [popType, setPopType] = useState("");
  const [popBg, setPopBg] = useState("");
  const { updateWishlist } = useWish()
  const { catName } = useParams();
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCheckout } = useCheckout();
  const { addToCart } = useCart();
  const { addToLibrary, bookExistLib } = useLibrary();
  const location = useLocation();
  const allCatBooks = categoriesData.slice(0, 3);
  const booksByCat = booksData.filter((item) => item.category === catName);

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
  const lastPostIndex = currentPage * postsPerPage;
  const fistPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = booksByCat.slice(fistPostIndex, lastPostIndex);
  return (
    <>
      <Popup display={popView} popType={popType} popBg={popBg} />
      <div className="w-screen  ">
        <div id="catContainer"
        className="lg:ml-12   mt-12 md:mt-20 flex gap-1">
          <Link
            to={`/categories/all`}
            className="border-gray-700 border sm:text-base text-xs text-gray-500 rounded-sm px-2 py-1"
          >
            All
          </Link>
          {categoriesData.map((cat, idx) => {
            return (
              <Link
              key={idx}
                to={`/categories/${encodeURIComponent(cat.name)}`}
                className="border-gray-700 border sm:text-base text-xs  text-gray-500 whitespace-nowrap rounded-sm px-2 py-1"
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
        {location.pathname == "/categories/all" ? (
          /* Div for rendering all categories */
          allCatBooks.map((cat) => {
            return (
              <div key={cat.id} id="allCatBooks">
                <h1 className="font-semibold sm:text-3xl text-xl dark:text-[var(--lighter)] text-[var(--darker)] my-4 ml-8 sm:ml-12">
                  {cat.name} Books
                </h1>
                <div
                  id="bookCardContainer"
                  className=" sm:my-6 my-2  font-poppins flex gap-2 md:gap-4  flex-wrap  justify-normal ml-4 lg:ml-12 md:px-0 px-6 items-center h-auto"
                >
                  {booksData.filter((item) => item.category === cat.name)
                    .length !== 0 ? (
                    booksData
                      .filter((item) => item.category === cat.name)
                      .map((elm, idx) => {
                        return (
                          <div
                            id="bookCard"
                            key={idx}
                            className="flex  relative   h-auto flex-shrink-0  dark:text-gray-300  flex-col w-[30%] sm:w-[210px] p-1 border dark:border-gray-700  border-gray-300 sm:text-[25px]"
                          >
                               {/* Wishlist Icon */}
                    <span  onClick={()=>{ handlePopup('wishlist'),updateWishlist('add',elm)}} className="absolute text-red-500 text-base cursor-pointer group  top-2 right-3 font-semibold">
                        <i className="fa-heart fa-regular"></i>
                        <p className="text-[12px] bg-zinc-300 opacity-0 group-hover:opacity-100 transition text-black p-1 absolute z-10">Wishlist</p>
                    </span>
                            <Link
                              onClick={() => addToCheckout(elm)}
                              to={`/categories/book/${encodeURIComponent(
                                elm.id
                              )}`}
                            >
                              <img
                                className="sm:w-[150px] w-[70px] h-[100px] sm:h-[200px] justify-self-center"
                                src={elm.cover_photo}
                                alt=""
                              />
                            </Link>
                            <h1 className="sm:text-[0.7em] py-2 truncate bg-gray-200 dark:bg-gray-700 w-full dark:font-normal  text-xs font-semibold tracking-tighter">
                              {elm.title}
                            </h1>
                            <h1 className="italic text-[0.6em] text-gray-500 truncate hidden sm:inline-block  ">
                              by: {elm.author}
                            </h1>
                            <p className="text-[0.6em]">
                              Rs:{" "}
                              <span className="font-semibold">{elm.price}</span>
                            </p>
                            <div
                              id="bookCardBtns"
                              className="hidden  justify-between w-full rounded-sm gap-2 mt-1 lg:flex"
                            >
                              <Link
                                onClick={() => {
                                  addToCart(elm), handlePopup('cart');
                                }}
                                className="text-[0.6em]    rounded-sm hover:underline "
                              >
                                Add to cart
                              </Link>
                              <i className="fa-solid text-xl fa-bag-shopping"></i>
                            </div>
                            <div className="w-full text-center self-end">
                              <button
                                onClick={() => {
                                  addToLibrary(elm), handlePopup('library');
                                }}
                                className="bg-[var(--baseColor)] w-full p-1 text-[10px] sm:text-base dark:hover:text-black hover:text-white"
                              >
                                Add to Library
                              </button>
                            </div>
                          </div>
                        );
                      })
                  ) : (
                    <div>Sorry! Books of this category are out of stock.</div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h1 className="font-semibold sm:text-3xl text-xl dark:text-[var(--lighter)] text-[var(--darker)] my-4 ml-8 sm:ml-12">
              {catName} Books
            </h1>
            <div
              id="bookCardContainer"
              className=" sm:my-6 my-2  font-poppins flex gap-2 md:gap-4  flex-wrap  ml-4 dark:text-gray-300  justify-normal lg:ml-12 md:px-0 px-6 items-center    h-auto"
            >
              {currentPosts.length !== 0 ? (
                currentPosts.map((elm, idx) => {
                  return (
                    <div
                      id="bookCard"
                      key={idx}
                      className="flex   relative  h-auto flex-shrink-0   flex-col w-[30%] sm:w-[210px] p-1 border border-gray-700 sm:text-[25px]"
                    >
                       {/* Wishlist Icon */}
                    <span onClick={()=>handlePopup('wishlist')}  className="absolute text-red-500 text-base cursor-pointer group  top-2 right-3 font-semibold">
                        <i className="fa-heart fa-regular"></i>
                        <p className="text-[12px] bg-zinc-300 opacity-0 group-hover:opacity-100 transition text-black px-1 absolute z-10">Wishlist</p>
                    </span>
                      <Link
                        onClick={() => addToCheckout(elm)}
                        to={`/categories/book/${encodeURIComponent(elm.id)}`}
                      >
                        <img
                          className="sm:w-[150px] w-[70px] h-[100px] sm:h-[200px] justify-self-center"
                          src={elm.cover_photo}
                          alt=""
                        />
                      </Link>
                      <h1 className="sm:text-[0.7em] py-2 truncate bg-gray-200 dark:bg-gray-700 dark:font-normal w-full  text-xs font-semibold tracking-tighter">
                        {elm.title}
                      </h1>
                      <h1 className="italic text-[0.6em] text-gray-500 truncate hidden sm:inline-block  ">
                        by: {elm.author}
                      </h1>
                      <p className="text-[0.6em]">
                        Rs: <span className="font-semibold">{elm.price}</span>
                      </p>
                      <div
                        id="bookCardBtns"
                        className="hidden  justify-between w-full rounded-sm gap-2 mt-1 lg:flex"
                      >
                        <Link
                          onClick={() => {
                            addToCart(elm), handlePopup('cart');
                          }}
                          className="text-[0.6em]    rounded-sm hover:underline "
                        >
                          Add to cart
                        </Link>
                        <i className="fa-solid text-xl fa-bag-shopping"></i>
                      </div>
                      <div className="w-full text-center self-end">
                        <button
                          onClick={() => {
                            addToLibrary(elm), handlePopup('library');
                          }}
                          className="bg-[var(--baseColor)] w-full p-1 text-[10px] dark:hover:text-black sm:text-base hover:text-white"
                        >
                          Add to Library
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>Sorry! Books of this category are out of stock.</div>
              )}
            </div>
          </>
        )}

        <Paginations
          totalPosts={booksByCat.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <TrendingNow />
      <Footer />
    </>
  );
};

export default Categories;
