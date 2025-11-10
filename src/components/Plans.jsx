import React from "react";

const Plans = () => {
  return (
    <div id="plansContainer" className="py-10 font-inter dark:text-gray-300 dark:bg-gray-900">
      <h1 className="text-center sm:px-12 px-8 my-2 sm:text-3xl text-xl text-[var(--darker)] dark:text-[var(--lighter)] font-semibold">
        Checkout BookShelf's affordable plans
      </h1>

      <div className="w-screen gap-3  h-auto lg:p-12 flex px-3 mt-8  justify-center md:flex-nowrap flex-wrap">
        <div className=" py-2 pt-0 shadow-md overflow-hidden border dark:shadow-gray-800 dark:border-gray-700   sm:flex-1 lg:flex-initial  flex flex-col gap-4 w-[88%] md:w-1/3  rounded-md">
          <div className="px-2">
            <h1 className="text-3xl mt-2 font-bold text-center  uppercase">
              Basic
            </h1>
            <p className="text-center text-gray-500 ">
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
          <button className="rounded-full my-4 dark:hover:shadow-white  dark:hover:text-black shadow-sm hover:shadow-black hover:text-gray-100  transition bg-red-400 w-fit self-center py-2 px-4">
            Subscribe now
          </button>
        </div>
        <div className=" py-2 pt-0 shadow-md overflow-hidden border dark:shadow-gray-800 dark:border-gray-700   sm:flex-1 lg:flex-initial flex flex-col gap-4 w-[88%] md:w-1/3 rounded-md">
          <div className=" px-2 ">
            <h1 className="text-3xl mt-2 font-bold text-center  uppercase">
              Standard
            </h1>
            <p className="text-center text-gray-400">
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
          <button className="rounded-full my-4 justify-self-end dark:hover:shadow-white  dark:hover:text-black shadow-sm hover:shadow-black hover:text-gray-100  transition bg-blue-400 w-fit self-center py-2 px-4">
            Subscribe now
          </button>
        </div>
        <div className=" py-2 pt-0 shadow-md overflow-hidden border dark:shadow-gray-800 dark:border-gray-700 relative  sm:flex-1 lg:flex-initial flex flex-col gap-4 w-[88%] md:w-1/3 rounded-md">
          <div className=" px-2 ">
            <h1 className="absolute top-40 right-0 text-white  bg-red-400 font-semibold px-2  text-xl ">
              Most Popular 🔥
            </h1>
            <h1 className="text-3xl mt-2 font-bold text-center  uppercase">
              Premium
            </h1>
            <p className="text-center text-gray-400">
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
          <button className="rounded-full my-4 dark:hover:shadow-white  dark:hover:text-black shadow-sm hover:shadow-black hover:text-gray-100 transition bg-green-400 w-fit self-center py-2 px-4">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
