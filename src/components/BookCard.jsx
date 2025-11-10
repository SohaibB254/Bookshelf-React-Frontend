import React, { useState } from "react";
import { Link } from "react-router";
import RelatedProducts from "./RelatedProducts";
import Review from "./Review";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { useCheckout } from "../context/CheckoutContext";
import { useCart } from "../context/CartContext";
import Popup from "./Popup";
import ShareModal from "./ShareModal";

const BookCard = () => {
  const [qtyCount, setQtyCount] = useState(1);
  const [popView, setPopView] = useState("hidden");
  const [popType, setPopType] = useState("");
  const [popBg, setPopBg] = useState("");
  const [shareOpen,setShareOpen] = useState(false)
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
       w-[100%] sm:gap-20 mt-10 text-[24px]    sm:p-12 p-8"
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
              <h1 className="lg:text-3xl xl   font-semibold">{checkoutItem.title}</h1>
              <h1 className="lg:text-xl text-base font-normal italic text-gray-500">by {checkoutItem.author}</h1>
              <p className="text-base absolute bottom-2">published on: {checkoutItem.date_published}</p>
          </div>
          <div className="carousel-item bg-gray-100  w-full    h-[500px] sm:w-[100px] ">
               <h1 className="lg:text-3xl 2xl font-semibold text-center py-3">{checkoutItem.title}</h1>
               <p className="text-base py-3 px-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus tempora vel earum minus quibusdam voluptates eos pariatur, tempore alias nulla molestias minima nemo soluta aspernatur. Commodi quo illum soluta dicta voluptate, sequi tempora dolorum mollitia animi iusto, molestias vitae.</p>
          </div>
        </div>
        <div className="text-[0.8em] w-auto dark:text-gray-300 ">
          <div className="">
            <h1 className="lg:text-3xl xl  font-semibold">
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
            <p className="text-gray-500">
              Date Published: {checkoutItem.date_published}
            </p>
            <p className="text-gray-500">Category: {checkoutItem.category}</p>
            <p className="text-gray-500">Languages: {checkoutItem.languages.join(', ')}</p>
            <p className="text-gray-500">Book Length: {checkoutItem.length}</p>
          </div>
          <div className="Book-card-btn flex flex-col  mt-3 sm:mt-10 w-full">
            <div className="flex text-[0.8em] gap-10 items-center w-full">
              <span className="border border-gray-700  text-[1.5em] w-44   flex justify-center py-2 px-3 gap-3">
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
              <button onClick={()=>setShareOpen(true)} className="hover:underline cursor-pointer">
                <i className="fa-solid fa-share"></i> Share
              </button>
            </div>
            <div className="text-[0.8em] flex gap-10 items-center ">
              <Link
                to={`/book/${encodeURIComponent(checkoutItem.id)}/checkout`}
              >
                {" "}
                <button className="bg-black dark:bg-gray-800 my-1  w-44 text-base text-white px-3 py-3 hover:underline">
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
                <div className="flex  text-base border-b dark:border-gray-700  font-normal ">
                  <Link className="sm:p-4 p-1 sm:text-3xl text-xl dark:text-[var(--lighter)] text-[var(--darker)] ">Description</Link>
                </div>
                <div className="sm:text-base text-sm sm:px-10 flex dark:text-gray-300 flex-col gap-3 py-4">
                  <h1 className="font-semibold">Title: <span className="font-normal"> {checkoutItem.title}</span> </h1>
                  <h1 className="font-semibold">Author: <span className="font-normal"> {checkoutItem.author}</span> </h1>
                  <h1 className="font-semibold">ISBN: <span className="font-normal"> 1234235234</span> </h1>
                  <h1 className="font-semibold">Publisher: <span className="font-normal"> BookShelfers</span> </h1>
                  <h1 className="font-semibold">Published Date: <span className="font-normal"> {checkoutItem.date_published}</span> </h1>
                  <h1 className="font-semibold">Languages: <span className="font-normal"> {checkoutItem.languages.join(', ')}</span> </h1>
                  <h1 className="font-semibold">Category: <span className="font-normal"> {checkoutItem.category}</span> </h1>
                  <h1 className="font-semibold">Cover: <span className="font-normal"> Cardboard</span> </h1>
                  <h1 className="font-semibold">Length: <span className="font-normal"> {checkoutItem.length}</span> </h1>
                  <p className="text-zinc-400  ">
                    <span className="text-black dark:text-gray-300 font-semibold"> About the book:</span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, amet! Perspiciatis voluptatem fuga officia optio voluptate, quisquam quae, et reiciendis, magni numquam laudantium. Harum suscipit, facere numquam repellat, quos dolore commodi inventore explicabo ea omnis, neque porro voluptates vel atque ad nam aliquam vitae? Praesentium recusandae pariatur, sapiente ipsa quisquam suscipit, voluptatibus delectus aperiam cumque iusto, unde voluptatem rem. Praesentium aspernatur optio accusantium ratione ipsa, dolore molestias quae totam amet consequuntur, atque asperiores, numquam iusto quis magnam! Ut expedita quibusdam id excepturi laborum iure assumenda dolores odit necessitatibus itaque suscipit, eligendi, dolorum reiciendis! Quis quibusdam obcaecati autem unde, consequatur et!
                  </p>
                </div>
      </div>
      <ShareModal isOpen={shareOpen}  onClose={()=>{setShareOpen(false)}}/>
      <Review />
      <RelatedProducts />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default BookCard;
