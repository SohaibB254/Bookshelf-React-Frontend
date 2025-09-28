import React, { useEffect, useState } from "react";
import booksData from "../data/books";
import TrendingNow from "../components/TrendingNow";
import OnSale from "../components/OnSale";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router";
import { useCart } from "../context/CartContext";
import { useLibrary } from "../context/LibraryContext";
import { useCheckout } from "../context/CheckoutContext";
import Popup from "../components/Popup";

const Store = () => {
  const [itemsCount, setItemsCount] = useState(12);
  const [popView, setPopView] = useState("hidden");
  const [popType, setPopType] = useState("");
  const [searchStr, setSearchStr] = useState("");
  const [popBg, setPopBg] = useState("");
  const saleBooks = booksData.filter((item) => item.sale_percent !== 0);
  const dislpayBooks = booksData.slice(0, itemsCount);
  const [filteredBooks, setFilteredBooks] = useState(dislpayBooks);
  const { addToLibrary, bookExistLib } = useLibrary();
  const { addToCart } = useCart();
  const { addToCheckout } = useCheckout();
  const location = useLocation();

  useEffect(() => {
    setFilteredBooks(booksData.slice(0, itemsCount));
    if (location.pathname === "/store/salebooks") {
      setFilteredBooks(saleBooks);
    }
  }, [itemsCount]);

const scrollToTop = () => {

    window.scrollTo({
      top: 0, // smooth scroll animation
    });

  };
  //Search Function
  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase().trim();
    if (value) {
      const filteredItems = booksData.filter(
        (item) =>
          item.category.toLowerCase().includes(value) ||
          item.title.toLowerCase().includes(value)
      );
      setFilteredBooks(filteredItems);
      setSearchStr(value);
      console.log(searchStr);
    } else {
      setFilteredBooks(dislpayBooks);
      setSearchStr("");
    }
  };
  //Popup for library
  const handlePopupLib = () => {
    setPopView("block");
    setPopType(bookExistLib);
    setPopBg("bg-blue-400");
    setTimeout(() => {
      setPopView("hidden");
    }, 2500);
  };
  //Popup for cart
  const handlePopupCart = () => {
    setPopView("block");
    setPopType("Book added to Cart");
    setPopBg("bg-green-400");
    setTimeout(() => {
      setPopView("hidden");
    }, 2500);
  };
  return (
    <>
      <Popup display={popView} popType={popType} popBg={popBg} />
      <div id="storeContainer" className="sm:p-12 p-4 font-poppins">
        <div
          id="storeSearchBox"
          className="flex  items-center justify-center py-3 px-3  sm:pt-12"
        >
          <input
            className="sm:w-[40vw] w-full border rounded-sm border-black sm:p-3 py-1 px-2"
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            name="search"
            id="storeSearch"
            placeholder="Search by Name or Category"
          />
        </div>

        {searchStr && <h1>Showing results for "{searchStr}"</h1>}
        <div
          id="storeItemsContainer"
          className="flex gap-[0.5rem]  py-8 justify-center md:justify-normal  flex-wrap"
        >
          {filteredBooks.length > 0 ? (
            filteredBooks.map((elm, idx) => {
              return (
                <div
                  key={idx}
                  className="sm:h-auto h-fit relative  md:w-[15vw] w-[160px] sm:px-4 py-2 flex flex-col  border shadow text-[16px]"
                >
                  <Link
                    onClick={() => addToCheckout(elm)}
                    to={`/store/book/${encodeURIComponent(elm.id)}`}
                  >
                    <div className="justify-self-center">
                      <img
                        className="sm:w-[150px] w-[70px] h-[100px] sm:h-[200px] cursor-pointer"
                        src={elm.cover_photo}
                        alt=""
                      />
                    </div>
                  </Link>
                  <h1 className=" text-[14px] sm:text-[18px] font-semibold w-full truncate tracking-tighter bg-gray-200 ">
                    {elm.title}
                  </h1>
                  <h1 className="italic text-gray-500 hidden sm:inline-block truncate ">
                    by: {elm.author}
                  </h1>
                  <div className="flex sm:justify-between">
                    <p>
                      Rs: {elm.price - (elm.price * elm.sale_percent) / 100}{" "}
                      <span
                        className={`${
                          elm.sale_percent === 0 ? "hidden" : ""
                        } italic text-gray-500 line-through`}
                      >
                        {elm.price}
                      </span>
                    </p>
                    <p className={`${elm.sale_percent === 0 ? "hidden" : ""}`}>
                      <span className="text-red-500 absolute bg-white/70 top-2 left-3 font-semibold">
                        {elm.sale_percent}% OFF
                      </span>
                    </p>
                  </div>
                  <div className=" hidden sm:flex flex-wrap items-center  justify-between ]">
                    <button
                      onClick={() => {
                        addToCart(elm), handlePopupCart();
                      }}
                      className="hover:underline py-1"
                    >
                      Add to cart
                    </button>
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
            })
          ) : (
            <p className="text-gray-500 text-lg font-semibold text-center w-full">
              No books found
            </p>
          )}
        </div>
        <div className="flex gap-2 justify-center sm:bg-transparent bg-green-500">
          <button
            disabled={itemsCount >= booksData.length}
            onClick={() => setItemsCount(itemsCount + 6)}
            className="hover:underline load-data-btn   p-2"
          >
            Load More
          </button>
          <button
            disabled={itemsCount === 12}
            onClick={() => (setItemsCount(12), scrollToTop())}
            className="hover:underline load-data-btn   p-2"
          >
            Show Less
          </button>
        </div>
      </div>

      { location.pathname !== '/store/trendingbooks' && <TrendingNow />}
      { location.pathname !== '/store/salebooks' && <OnSale />}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Store;
