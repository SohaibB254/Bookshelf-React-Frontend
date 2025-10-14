import React from "react";
import Services from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import contactBg from '../assets/contact-bg.jpg'

const Contact = () => {
  return (
    <>
      <div className=" flex lg:flex-row flex-col-reverse font-inter h-auto items-center px-6 lg:px-12 w-screen relative py-6">
        <div style={{
          backgroundImage: `url(${contactBg})`
        }} className=" sm:h-[500px] lg:gap-7 rounded-md bg-cover relative  shadow-md shadow-gray-400 dark:shadow-gray-800  dark:border-gray-700 text-white  w-full p-4 lg:p-6  flex justify-around flex-col lg:w-auto">

            <div className="h-full w-full bg-black/40 backdrop-blur-[3px] right-0 rounded-md  absolute">
          </div>
          <div className=" sm:p-3 p-1 border-b z-10">
            <h1 className="sm:text-xl  cursor-pointer lg:text-2xl font-semibold">
              Phone <i className="fa-solid fa-phone"></i>
            </h1>
            <h1 className="cursor-pointer sm:text-base text-xs text-gray-300">
              +92 323 4353123{" "}
            </h1>
          </div>
          <div className=" sm:p-3 p-1 border-b z-10">
            <h1 className="sm:text-xl    cursor-pointer lg:text-2xl font-semibold">
              Email <i className="fa-solid fa-envelope"></i>
            </h1>
            <h1 className="italic cursor-pointer sm:text-base text-xs text-gray-300">
              bookshelf@gmail.com
            </h1>
          </div>
          <div className=" sm:p-3 px-1 py-3 border-b z-10">
            <h1 className="sm:text-xl   cursor-pointer lg:text-2xl font-semibold">
              Location <i className="fa-solid fa-location-dot"></i>
            </h1>
            <h1 className="cursor-pointer sm:text-base text-xs  text-gray-300">
              H.N J232, Street 35 Block B Wapda Town, Lahore Pakistan
            </h1>
          </div>
          <div className="sm:px-3 px-1 flex flex-col gap-1 z-10">
            <h1>Follow us</h1>
            <ul className="flex gap-4">
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-instagram"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-youtube"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-facebook-f"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-twitter"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-pinterest-p"></i>
            </ul>
          </div>
        </div>
        <div
          id="formContainer"
          className="flex h-[300px] sm:h-[500px] flex-col w-full  items-center"
        >
          <form className="flex flex-col gap-2 h-full py-4 px-6 lg:p-12 w-full border rounded-md shadow-md dark:shadow-gray-800 shadow-gray-400 dark:border-gray-700 border-gray-300">
            <h1 className="sm:text-3xl text-xl text-[var(--darker)] dark:text-[var(--lighter)]  font-semibold">Get in touch</h1>
            <input
              className="border border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 text-xs sm:text-base outline-none rounded-sm  transition  p-2 "
              type="text"
              name="username"
              id="username"
              placeholder="Your Name"
            />
            <input
              className="border border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 text-xs sm:text-base outline-none rounded-sm  transition  p-2 "
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <textarea
              className="w-full border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 text-xs sm:text-base outline-none rounded-sm   border p-2 h-full "
              name="message"
              id="message"
              placeholder="Write your message/suggestion/complain"
            ></textarea>

            <input
              className="u-btn cursor-pointer w-fit rounded-sm"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>

      <Services />
      <Stats/>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Contact;
