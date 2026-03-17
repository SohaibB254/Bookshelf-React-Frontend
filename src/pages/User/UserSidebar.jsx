import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const UserSidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [preview, setPreview] = useState(null);
  const [pfpModal,setPfpModal ] = useState(false)

  const toggleSidebar = () => {
      setIsShown((oldValue) => !oldValue);
  };
  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      const isPhone = width <= 1024;
      setIsMobile(isPhone);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <aside
        id="DashBoardNav"
        className={`bg-white dark:bg-gray-900 dark:text-gray-300 fixed dark:border-gray-800  sm:w-[300px] w-full  border lg:shadow-none shadow-sm shadow-black border-b-0 border-t-0 ${
          isShown ? "translate-x-0" : "-translate-x-full"
        } transform transition-transform duration-300 ease-in-out flex-col py-3 sm:h-auto z-20  h-[90vh]`}
      >
        <div>
          <i
            onClick={toggleSidebar}
            className="fa-solid fa-xmark text-xl  text-right w-full  px-2"
          ></i>
        </div>
        <Link

          className="sm:text-xl text-base cursor-pointer font-semibold flex flex-col items-center gap-2"
        >
          <div  onClick={()=>setPfpModal(true)} className="sm:h-20 sm:w-20 h-14 w-14 cursor-pointer overflow-hidden rounded-full">
            <img
              className="object-cover h-full  w-full"
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACGFpr0iqURE_6EHYMm-AGXfhXC1Nzf4ucA&s"}
              alt=""
            />
          </div>
          Steve
        </Link>
        <div className="h-screen ">
          <ul className="flex flex-col px-12 gap-2 mt-4">
            <Link
              onClick={toggleSidebar}
              to={"/userprofile"}
              className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] px-1 py-2 flex gap-2 items-center hover:bg-green-200"
            >
              <i className="fa-solid fa-user"></i>Profile
            </Link>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-2 items-center hover:bg-green-200">
              <i className="fa-solid fa-cart-shopping"></i>My cart
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-2 items-center hover:bg-green-200">
              <i className="fa-regular fa-heart"></i>Wishlist
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-2 items-center hover:bg-green-200">
              <i className="fa-solid fa-shop"></i>Orders
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-2 items-center hover:bg-green-200">
              <i className="fa-solid fa-circle-info"></i>Help center
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-2 items-center hover:bg-green-200">
              <i className="fa-solid fa-key"></i>Terms & Policy
            </li>
            <Link
              to={"/"}
              className="cursor-pointer  border-b dark:border-gray-800  py-2 px-1 flex gap-2 items-center text-red-600 font-[500] "
            >
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </Link>
          </ul>
        </div>
      </aside>
      <div >
        <i
          onClick={toggleSidebar}
          className="fa-solid fa-bars-staggered  text-xl text-green-500 py-3  px-4"
        ></i>
      </div>
      {/* Set User Profile */}
          {
  pfpModal &&
       <div className="fixed inset-0 h-full w-full bg-white/40 dark:bg-gray-900/40 backdrop-blur-[2px] z-50 flex justify-center pt-10 top-0">
        <div className="w-72 bg-white border dark:bg-gray-900 dark:border h-fit p-3 rounded flex flex-col items-center">
          {preview ? (
            <div className="h-24 w-24 bg-green-500 overflow-hidden rounded-full">
              <img src={preview} className="h-full w-full object-cover " alt="Preview" />
            </div>
          ) : (
            <p>No image selected</p>
          )}

          <div className="flex flex-col gap-8">
            <label className='cursor-pointer text-center text-blue-600 font-medium hover:underline"'>
              Choose Image
              <input
                type="file"
                accept="image/*"
                name="image"
                className="hidden"
              />
            </label>
            <div className="flex gap-2">

              <button  className="bg-green-500 p-1 cursor-pointer rounded w-16">Upload</button>
              <button onClick={()=>setPfpModal(false)} className="bg-red-500 p-1 rounded w-16 cursor-pointer ">Cancel</button>
            </div>
          </div>
        </div>
      </div>

}
    </>
  );
};

export default UserSidebar;
