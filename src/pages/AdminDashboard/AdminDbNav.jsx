import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { LayoutDashboard } from "lucide-react";


const AdminDbNav = () => {
  const [isShown, setIsShown] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
      <div
        id="DashBoardNav"
        className={`border border-y-0 bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 flex-col sm:w-[300px] w-screen px-3 z-10 lg:shadow-none shadow-sm shadow-black  ${
          isShown ? "flex" : "hidden"
        } lg:static fixed  py-3 lg:h-auto h-[90vh]`}
      >
        <div className={`${isMobile ? "flex" : "hidden"} `}>
          <i
            onClick={toggleSidebar}
            className={`fa-solid fa-xmark text-xl block   text-right w-full  px-2`}
          ></i>
        </div>
        <Link
          to={"/admin"}
          className="sm:text-xl text-base text-center flex flex-col items-center font-semibold"
        >
          <div className=" h-14 sm:h-20 overflow-hidden sm:w-20 w-14 cursor-pointer rounded-full">
            <img className="h-full w-full object-cover" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          </div>
          Jon Aryn
        </Link>
        <div className="flex flex-col  h-full">
          <ul className="flex flex-col px-12 gap-3 mt-4">
            <Link to={"/admin"}>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
             <LayoutDashboard size={18} />Dashboard
              </li>
            </Link>
              <Link to={'/admin/books'} className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
                <i className="fa-solid fa-book"></i>Books
              </Link>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i class="fa-solid fa-bag-shopping"></i>Orders
              </li>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
                <i className="fa-solid fa-tag"></i>Plans
              </li>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
               <i className="fa-solid fa-users"></i>Users
              </li>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
               <i className="fa-solid fa-key"></i>Policy
              </li>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i className="fa-solid fa-microphone"></i>Anouncements
              </li>
              <li className="cursor-pointer  border-b  dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
               <i className="fa-solid fa-sliders"></i>Settings
              </li>
            <Link className="cursor-pointer px-1  py-2 flex gap-1 items-center text-red-500 font-[500] ">
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </Link>
          </ul>
        </div>
      </div>

      <div className={`w-2 ${isMobile ? "" : "hidden"}  `}>
        <i
          onClick={toggleSidebar}
          className={`fa-solid absolute fa-ellipsis-vertical dark:text-gray-300 text-2xl py-3  px-4`}
        ></i>
      </div>
    </>
  );
};

export default AdminDbNav;
