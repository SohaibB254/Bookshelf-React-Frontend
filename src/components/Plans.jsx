import React from "react";

const Plans = () => {
  return (
    <div id="plansContainer" className="py-10 font-inter border">
      <h1 className="text-center sm:px-12 px-8 my-2 lg:text-3xl text-2xl font-semibold">
        Checkout BookShelf's affordable plans
      </h1>

      <div className="w-screen gap-3  h-auto lg:p-12 flex px-3 mt-8  justify-center md:flex-nowrap flex-wrap">
        <div className=" py-2 pt-0 shadow-md overflow-hidden shadow-black/60  sm:flex-1 lg:flex-initial  flex flex-col gap-4 w-[88%] md:w-1/3  rounded-md">
          <div className="bg-red-400 px-2">
            <h1 className="text-3xl mt-2 font-bold text-center text-white uppercase">
              Basic
            </h1>
            <p className="text-center text-white/80 ">
              Per month/ cancel anytime
            </p>
          </div>
          <h1 className="text-3xl bg-[var(--baseColor)] py-4 text-white font-bold text-center ">
            $ 10
          </h1>

          <ul className="flex flex-col pl-6  mt-8  gap-2 sm:gap-3">
            <p>Here's what you get:</p>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>Access
              to ten pdf books every month
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>Access
              to bookshelf community
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>2%
              extra discount
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>
              Download your pdf books
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>
              Personalised recommendations
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>Premium
              membership of bookshelf local library
            </li>

            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>
              Early access to new releases
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>
              Exclusive author Q&A/Events
            </li>
          </ul>
          <button className="rounded-full my-4 hover:shadow-sm hover:shadow-black hover:text-gray-100  transition bg-red-400 w-fit self-center py-2 px-4">
            Subscribe now
          </button>
        </div>
        <div className=" py-2 pt-0 shadow-md overflow-hidden shadow-black/60  sm:flex-1 lg:flex-initial flex flex-col gap-4 w-[88%] md:w-1/3 rounded-md">
          <div className="bg-blue-400 px-2 ">
            <h1 className="text-3xl mt-2 font-bold text-center text-white uppercase">
              Standard
            </h1>
            <p className="text-center text-white/80">
              Per month/ cancel anytime
            </p>
          </div>
          <h1 className="text-3xl bg-[var(--baseColor)] py-4 text-white font-bold text-center ">
            $ 29
          </h1>

          <ul className="flex flex-col pl-6  mt-8 gap-2 sm:gap-3">
            <p>Here's what you get:</p>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>Access
              to fifty pdf books every month
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>Access
              to bookshelf community
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>5%
              extra discount
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Download your pdf books
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Personalised recommendations
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>Premium
              membership of bookshelf local library
            </li>

            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>
              Early access to new releases
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-red-500 text-xl fa-xmark"></i>
              Exclusive author Q&A/Events
            </li>
          </ul>
          <button className="rounded-full my-4 justify-self-end hover:shadow-sm hover:shadow-black hover:text-gray-100  transition bg-blue-400 w-fit self-center py-2 px-4">
            Subscribe now
          </button>
        </div>
        <div className=" py-2 pt-0 shadow-md overflow-hidden relative shadow-black/60 sm:flex-1 lg:flex-initial flex flex-col gap-4 w-[88%] md:w-1/3 rounded-md">
          <div className="bg-green-500 px-2 ">
            <h1 className="absolute top-40 right-0 text-white  bg-red-400 font-semibold px-2  text-xl ">
              Most Popular 🔥
            </h1>
            <h1 className="text-3xl mt-2 font-bold text-center text-white uppercase">
              Premium
            </h1>
            <p className="text-center text-white/80">
              Per month/ cancel anytime
            </p>
          </div>
          <h1 className="text-3xl bg-[var(--baseColor)] py-4 text-white font-bold text-center ">
            $ 49
          </h1>

          <ul className="flex flex-col pl-6  mt-8 sm:gap-3 gap-2">
            <p>Here's what you get:</p>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>Access
              to unlimited pdf books every month
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>Access
              to bookshelf community
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>10%
              extra discount
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Download your pdf books
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Personalised recommendations
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Premium membership of bookshelf local library
            </li>
            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Early access to new releases
            </li>

            <li className="flex gap-1 items-center">
              <i className="fa-solid text-green-500 text-xl fa-check"></i>
              Exclusive author Q&A/Events
            </li>
          </ul>
          <button className="rounded-full my-4 hover:shadow-sm hover:shadow-black hover:text-gray-100 transition bg-green-400 w-fit self-center py-2 px-4">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
