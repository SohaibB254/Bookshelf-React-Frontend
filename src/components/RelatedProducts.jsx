import React,{ useState } from "react";
import booksData from "../data/books";
import { Link } from "react-router";
import { useCart } from '../context/CartContext'
import Popup from "./Popup";


const RelatedProducts = () => {

      const [popView, setPopView] = useState("hidden");
      const [popType, setPopType] = useState("");
      const [popBg, setPopBg] = useState("")
        const { addToCart } = useCart()

      //Popup function
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
  const top3Trending = booksData.slice(5, 9);
  return (
    <>
       <Popup display={popView} popBg={popBg} popType={popType} />
    <div className="h-auto  font-inter flex flex-col border-b dark:border-gray-700  px-8 sm:px-12 py-10">
      <h1 className="font-semibold dark:text-[var(--lighter)] sm:text-3xl text-xl text-[var(--darker)] mb-10">
        Related Books
      </h1>
      <div className="flex gap-8 lg:gap-16 lg:justify-center px-10 flex-wrap lg:flex-nowrap ">
        {top3Trending.map((elm) => {
          return (
            <div
              key={elm.id}
              className="  rounded-md overflow-hidden dark:shadow-gray-800 shadow-md w-[250px] lg:w-[18vw] relative"
            >
              <img className="aspect-auto h-full w-full" src={elm.cover_photo} alt="" />
              <div className=" flex flex-col absolute  transition py-2 h-auto  px-2   w-full text-sm dark:bg-gray-900 bg-white  bottom-0">
                <h1 className="sm:text-2xl dark:text-[var(--lighter)] text-[var(--darker)] font-semibold    text-xl">
                  {elm.title}
                </h1>
                <p className=" bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-[var(--baseColor)] px-1 rounded-md border w-fit text-sm">
                  {elm.category}
                </p>
                <h1 className="sm:text-2xl dark:text-[var(--lighter)]  text-[var(--darker)] font-bold    text-xl">
                  {" "}
                  Rs: {elm.price}
                </h1>
                <button onClick={()=>{addToCart(elm),handlePopup('cart')}} className="w-fit bg-[var(--baseColor)] hover:text-black transition p-2 px-4 text-white font-semibold my-2 rounded-md">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={"/store/all"} className="text-base hover:underline dark:text-gray-300  my-10 ">
        See More
      </Link>
    </div>
    </>
  );
};

export default RelatedProducts;
