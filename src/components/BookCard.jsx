import React, { useState } from "react";
import { Link } from "react-router";
import RelatedProducts from "./RelatedProducts";
import Review from "./Review";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { useCheckout } from "../context/CheckoutContext";
import { useCart } from "../context/CartContext";
import Popup from "./Popup";

const BookCard = () => {
  const [qtyCount, setQtyCount] = useState(1);
  const [popView, setPopView] = useState("hidden");
  const [popType, setPopType] = useState("");
  const [popBg, setPopBg] = useState("");
  const { checkoutItem } = useCheckout();
  const { addToCart } = useCart();
  const bookRating = Array.from({length: Math.round(checkoutItem.rating)})


  const handleQtyIncrease = () => {
    setQtyCount((prev) => prev + 1);
  };
  const handleQtyDecrease = () => {
    setQtyCount((prev) => Math.max(1, prev - 1));
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
      <div
        className=" font-sans flex flex-col md:flex-row
       w-[100%] sm:gap-20 mt-10 text-[24px]  sm:p-12 p-8"
      >
        <div id="carousel">
          <div className="carousel-item    w-full  h-[500px] sm:w-[100px]">
            <img
              className=" cursor-pointer"
              src={checkoutItem.cover_photo}
              alt=""
            />
          </div>
          <div className=" carousel-item bg-gray-100 relative  w-full flex flex-col gap-2 justify-center items-center h-[500px] sm:w-[100px]">
              <h1 className="lg:text-3xl 2xl font-semibold">{checkoutItem.title}</h1>
              <h1 className="lg:text-xl text-base font-normal italic text-gray-500">by {checkoutItem.author}</h1>
              <p className="text-base absolute bottom-2">published on: {checkoutItem.date_published}</p>
          </div>
          <div className="carousel-item bg-gray-100  w-full    h-[500px] sm:w-[100px] ">
               <h1 className="lg:text-3xl 2xl font-semibold text-center py-3">{checkoutItem.title}</h1>
               <p className="text-base py-3 px-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus tempora vel earum minus quibusdam voluptates eos pariatur, tempore alias nulla molestias minima nemo soluta aspernatur. Commodi quo illum soluta dicta voluptate, sequi tempora dolorum mollitia animi iusto, molestias vitae.</p>
          </div>
        </div>
        <div className="text-[0.8em] w-auto ">
          <div>
            <h1 className="lg:text-[2.25em] text-[1.5em] font-semibold">
              {checkoutItem.title}
            </h1>

            <h1 className="font-bold text-[1.5em] flex items-center justify-between sm:w-72 ">
              <p className="text-green-500">
                Rs:{" "}
                {checkoutItem.price -
                  (checkoutItem.price * checkoutItem.sale_percent) / 100}
                <span
                  className={`${
                    checkoutItem.sale_percent === 0 ? "hidden" : ""
                  } text-zinc-500 italic line-through`}
                >
                  {checkoutItem.price}
                </span>
              </p>
              <p
                className={`${checkoutItem.sale_percent === 0 ? "hidden" : ""}`}
              >
                <span className="text-red-500 sm:text-2xl text-base font-bold">
                  {checkoutItem.sale_percent}% OFF
                </span>
              </p>
            </h1>
          </div>
          <div className="flex flex-col text-[0.8em]">
            <span id="reviewStars">
              {
                bookRating.map((_,idx)=>{
                  return  <i key={idx} className="fa-solid fa-star text-yellow-500"></i>
                })
              }

                {checkoutItem.rating}
            </span>
            <p className="text-gray-500 italic">
              Author: {checkoutItem.author}
            </p>
          </div>
          <div className="text-[1em] flex flex-col gap-1 sm:mt-2">
            <p>Total sold: 389</p>
            <p className="text-gray-700">
              Date Published: {checkoutItem.date_published}
            </p>
            <p className="text-gray-700">Category: {checkoutItem.category}</p>
            <p className="text-gray-700">Languages: {checkoutItem.languages.join(', ')}</p>
            <p className="text-gray-700">Book Length: {checkoutItem.length}</p>
          </div>
          <div className="Book-card-btn flex flex-col  mt-3 sm:mt-10 w-full">
            <div className="flex text-[0.8em] gap-10 items-center w-full">
              <span className="border border-black text-[1.5em] w-44   flex justify-center py-2 px-3 gap-3">
                <button
                  disabled={qtyCount === 1}
                  style={{ opacity: qtyCount === 1 ? 0.5 : 1 }}
                  onClick={handleQtyDecrease}
                  className=" font-semibold"
                >
                  -
                </button>{" "}
                <span>{qtyCount}</span>{" "}
                <button onClick={handleQtyIncrease} className=" font-semibold">
                  +
                </button>
              </span>
              <p className="hover:underline cursor-pointer">
                <i className="fa-solid fa-share"></i> Share
              </p>
            </div>
            <div className="text-[0.8em] flex gap-10 items-center ">
              <Link
                to={`/book/${encodeURIComponent(checkoutItem.id)}/checkout`}
              >
                {" "}
                <button className="bg-black my-1  w-44 text-base text-white px-3 py-3 hover:underline">
                  Checkout{" "}
                  <i className="fa-solid fa-bag-shopping mx-4 text-[1.1em] "></i>
                </button>
              </Link>
              <Link
                onClick={() => {
                  addToCart(checkoutItem), handlePopupCart();
                }}
                className="hover:underline cursor-pointer"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <p>
              Delivery Time <i className="fa-solid fa-truck-fast"></i> : 3 to 4
              days on your location
            </p>
          </div>
        </div>
      </div>
      <div id="bookDescription" className="max-w-screen py-3 px-12 font-inter">
                <div className="flex  text-base border-b border-gray-300  font-normal ">
                  <Link className="sm:p-4 p-1 hover:bg-gray-100 border-r border-gray-300 ">Description</Link>
                  <Link className="sm:p-4 p-1 hover:bg-gray-100 border-r border-gray-300 ">Languages</Link>
                  <Link className="sm:p-4 p-1 hover:bg-gray-100 ">author</Link>
                </div>
                <div className="sm:text-base text-sm py-2">
                  <p className="sm:columns-2 sm:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nemo aliquid aperiam cum ea temporibus, accusantium impedit, dolores pariatur iste exercitationem, suscipit amet aspernatur asperiores. Dolor, perferendis. Delectus tempore culpa, illo laboriosam vel minus dolor recusandae architecto illum quasi, dolorum cupiditate minima libero voluptate, quae iste aliquid in est vero aperiam quos quaerat accusantium corrupti sed? Illo quod sapiente culpa cumque doloremque ipsa sit corrupti, perspiciatis ea veritatis assumenda nam, necessitatibus cupiditate porro voluptatum? Quae dolores perspiciatis illum quidem numquam nulla repudiandae quas eaque ullam eos soluta hic dolor omnis corrupti velit, voluptatibus itaque cupiditate nam repellendus iste quis beatae.</p>
                </div>
      </div>
      <Review />
      <RelatedProducts />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default BookCard;
