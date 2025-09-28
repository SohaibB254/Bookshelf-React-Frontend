import React, { useState } from "react";
import booksData from "../data/books";
import { Link, useParams } from "react-router";
import Paginations from "../components/Paginations";
import Footer from "../components/Footer";
import TrendingNow from "../components/TrendingNow";
import { useCheckout } from "../context/CheckoutContext";
import { useLibrary } from '../context/LibraryContext'
import { useCart } from "../context/CartContext";
import Popup from "../components/Popup";

const Categories = () => {
  const [popView, setPopView] = useState("hidden");
  const [popType, setPopType] = useState("");
  const [popBg, setPopBg] = useState("");
  const { catName } = useParams();
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCheckout } = useCheckout();
  const { addToCart } = useCart();
   const { addToLibrary, bookExistLib } = useLibrary()

  const booksByCat = booksData.filter((item)=> item.category === catName)
    //Popup for library
  const handlePopupLib = () => {
    setPopView('block');
    setPopType(bookExistLib);
    setPopBg('bg-blue-400');
    setTimeout(() => {
      setPopView('hidden')
    }, 2500);
  }
  //Popup for cart
  const handlePopupCart = () => {
    setPopView("block");
    setPopType("Book added to Cart");
    setPopBg("bg-green-400");
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
        <h1 className="font-semibold sm:text-[30px] text-xl mt-4 ml-8 sm:ml-12">
          {catName} Books
        </h1>
        <div
          id="bookCardContainer"
          className=" sm:mt-12 mt-4  font-poppins flex gap-2 sm:gap-5  flex-wrap  justify-normal sm:ml-12 sm:px-0 px-6 items-center    h-auto"
        >
          { currentPosts.length !== 0? (currentPosts.map((elm, idx) => {
            return (
              <div
                id="bookCard"
                key={idx}
                className="flex    sm:h-auto h-auto   flex-col w-[30%] sm:w-[210px] p-1 border border-black/30 sm:text-[25px]"
              >
                <Link
                onClick={()=>addToCheckout(elm)}
                 to={`/categories/book/${encodeURIComponent(elm.id)}`}>
                  <img
                    className="sm:w-[150px] w-[70px] h-[100px] sm:h-[200px] justify-self-center"
                    src={elm.cover_photo}
                    alt=""
                  />
                </Link>
                <h1 className="sm:text-[0.7em] py-2 truncate bg-gray-200 w-full  text-xs font-semibold tracking-tighter">
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
                  className="hidden  justify-between w-full rounded-sm gap-2 mt-1 sm:flex"
                >
                  <Link
                    onClick={() => {
                      addToCart(elm), handlePopupCart();
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
                      addToLibrary(elm), handlePopupLib();
                    }}
                    className="bg-green-500 w-full py-1 text-xs sm:text-base hover:text-white"
                  >
                    Add to Library
                  </button>
                </div>
              </div>
            );
          })):(
            <div>Sorry! Books of this category are out of stock.</div>
          )}
        </div>
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
