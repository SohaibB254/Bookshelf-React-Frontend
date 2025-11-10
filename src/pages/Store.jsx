import React, { useEffect, useRef, useState } from "react";
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
import Dropdown from "../components/Dropdown";
import { useWish } from "../context/WishContext";

const Store = () => {
  const [itemsCount, setItemsCount] = useState(12);
  const [popView, setPopView] = useState("hidden");
  const [popType, setPopType] = useState("");
  const [popBg, setPopBg] = useState("");
    const [sortOption, setSortOption] = useState("");
  const [searchStr, setSearchStr] = useState("");
  const saleBooks = booksData.filter((item) => item.sale_percent !== 0);
  const dislpayBooks = booksData.slice(0, itemsCount);
  const [filteredBooks, setFilteredBooks] = useState(dislpayBooks);
  const { addToLibrary, bookExistLib } = useLibrary();
  const { addToCart } = useCart();
  const { addToCheckout } = useCheckout();
  const { updateWishlist } = useWish()
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
      let filteredItems;

      //If search value is a number
      if (!isNaN(value)) {
        const priceValue = parseFloat(value);
        filteredItems = booksData.filter((item) => {
          const itemPrice = parseFloat(item.price);
          return itemPrice <= priceValue;
        });
      } else {
        //If search is a string
        filteredItems = booksData.filter(
          (item) =>
            item.category.toLowerCase().includes(value) ||
            item.title.toLowerCase().includes(value) ||
            item.languages.join(" ").toLowerCase().includes(value) ||
            item.author.toLowerCase().includes(value)
        );
      }

      setFilteredBooks(filteredItems);
      setSearchStr(value);
    } else {
      setFilteredBooks(dislpayBooks);
      setSearchStr("");
    }
  };
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

  return (
    <>
      <Popup display={popView} popType={popType} popBg={popBg} />
      <div id="storeContainer" className="lg:p-12 p-4 font-poppins">
        <div
          id="storeSearchBox"
          className="flex sm:text-base text-xs items-center justify-center p-3  sm:pt-12"
        >
          <input
            className="sm:w-[40vw] w-full border border-gray-300  dark:border-gray-700 outline-none dark:bg-gray-900 dark:text-gray-300 rounded-sm sm:p-3 p-2"
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            name="search"
            id="storeSearch"
            placeholder="Search by Name/Category/language/price/author"
          />
        </div>
       <p className="dark:text-gray-300"> {searchStr && (!isNaN(searchStr)?( <h1>Books of price Rs: {searchStr} and under</h1> ):(<h1>Showing results for "{searchStr}"</h1>))}</p>
           <div className=" flex w-52 border rounded-sm text-sm dark:border-gray-700 gap-1 justify-end  items-center my-2">
          <Dropdown
        options={["Price: Low to High", "Price: High to Low", "Newest", "Oldest"]}
        selected={sortOption}
        onChange={(value) => setSortOption(value)}
        placeholder="Sort By"
        bg = 'white'
      />
          </div>
        <div
          id="storeItemsContainer"
          className="flex gap-[0.5rem]  py-8 justify-center md:justify-normal  flex-wrap"
        >
          {filteredBooks.length > 0 ? (
            filteredBooks.map((elm, idx) => {
              return (
                <div
                  key={idx}
                  className="sm:h-auto h-fit relative dark:text-gray-300   md:w-[15vw] w-[160px] lg:px-4 py-2 flex flex-col border  dark:border-gray-700 shadow text-[16px]"
                >
                  <Link
                    onClick={() => addToCheckout(elm)}
                    to={`/store/book/${encodeURIComponent(elm.id)}`}
                  >
                    <div className="justify-self-center flex-shrink-0 ">
                      <img
                        className="sm:w-[150px] w-[70px] h-[100px] sm:h-[200px] cursor-pointer"
                        src={elm.cover_photo}
                        alt=""
                      />
                    </div>
                  </Link>
                  <h1 className=" text-[14px] sm:text-[18px] font-semibold w-full truncate tracking-tighter dark:bg-gray-700 dark:font-normal bg-gray-200 ">
                    {elm.title}
                  </h1>
                  <h1 className="italic text-gray-500 hidden lg:inline-block truncate ">
                    by: {elm.author}
                  </h1>
                  <div className="flex sm:justify-between">
                    <p>
                      Rs: {Math.round(elm.price - (elm.price * elm.sale_percent) / 100)}{" "}
                      <span
                        className={`${
                          elm.sale_percent === 0 ? "hidden" : ""
                        } italic text-gray-500 line-through`}
                      >
                        {elm.price}
                      </span>
                    </p>
                    {/* Wishlist Icon */}
                    <span onClick={()=>handlePopup('wishlist')} className="absolute text-red-500  cursor-pointer group  top-2 right-3 font-semibold">
                        <i onClick={()=>updateWishlist('add',elm)} className="fa-heart fa-regular"></i>
                        <p className="text-[12px] bg-zinc-300 opacity-0 group-hover:opacity-100 transition text-black p-1 absolute z-10">Wishlist</p>
                    </span>
                    {/* Sale Percent  */}
                    <p className={`${elm.sale_percent === 0 ? "hidden" : ""}`}>
                      <span className="text-red-500 absolute bg-white/70 dark:bg-transparent top-2 left-3 font-semibold">
                        {elm.sale_percent}% OFF
                      </span>
                    </p>
                  </div>
                  <div className=" hidden lg:flex flex-wrap items-center  justify-between ]">
                    <button
                      onClick={() => {
                        addToCart(elm), handlePopup('cart');
                      }}
                      className="hover:underline py-1"
                    >
                      Add to cart
                    </button>
                    <i className="fa-solid lg:text-xl fa-bag-shopping"></i>
                  </div>
                  <div className="w-full text-center self-end">
                    <button
                      onClick={() => {
                        addToLibrary(elm), handlePopup('library');
                      }}
                      className="bg-[var(--baseColor)] w-full py-1 text-xs dark:hover:text-black sm:text-base hover:text-white"
                    >
                      Add to Library
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-lg font-semibold text-center dark:text-gray-300 w-full">
             {!isNaN(searchStr)?( <h1>No books of price Rs:{searchStr}</h1> ):(<h1>No books found for "{searchStr}"</h1>)}
            </p>
          )}
        </div>
        { filteredBooks.length !== 0 && <div className="flex gap-2 justify-center sm:bg-transparent dark:text-gray-300 bg-green-500">
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
        </div>}
      </div>

      {location.pathname !== "/store/trendingbooks" && <TrendingNow />}
      {location.pathname !== "/store/salebooks" && <OnSale />}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Store;
