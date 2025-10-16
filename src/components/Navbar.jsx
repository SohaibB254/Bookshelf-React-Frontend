import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { useCart } from "../context/CartContext";
import { useLibrary } from "../context/LibraryContext";
import { useHomeV } from "../context/HomeVContext";
import Dropdown from "./Dropdown";
import { useWish } from "../context/WishContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWishOpen, setIsWishOpen] = useState(false);
  const { itemsInCart } = useCart();
  const { itemsInWish, updateWishlist } = useWish();
  const { libraryItems } = useLibrary();
  // const { homeV, handleHomeV } = useHomeV();
  const path = useLocation().pathname;

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };
  const toggleWishlist = () => {
    setIsWishOpen((prev) => !prev);
  };
  const navIconRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleNavbar = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        navIconRef.current &&
        !navIconRef.current.contains(e.target)
      ) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleNavbar);
    return () => document.removeEventListener("mousedown", handleNavbar);
  }, []);

  return (
    <>
      <div
        id="NavFakeBg"
        className={`${
          path.startsWith("/auth") ? "hidden" : ""
        } dark:bg-gray-900  w-screen absolute top-0`}
      ></div>
      <div
        id="NavbarContainer"
        className={`${
          path.startsWith("/auth") ? "hidden" : ""
        } sticky top-0  z-40 dark:text-gray-300`}
      >
        <div
          id="Navbar"
          className={`flex sticky top-0  backdrop-blur-md  font-inter h-[10vh] text-[30px] items-center dark:bg-gray-900/50 dark:text-gray-300 bg-white/50  sm:w-screen   justify-between   px-8 sm:px-12 `}
        >
          <div id="Logo">
            <Link>
              <span className="flex relative items-center">
                <h1 className="text-[var(--baseColor)] sm:text-[1em] text-[0.7em] cursor-pointer transition hover:text-[var(--darker)] ">
                  BookShelf
                </h1>
              </span>
            </Link>
          </div>

          <div id="Account" className=" relative text-[0.5em] ">
            <div className="flex  gap-5  items-center">
              <div className=" items-center gap-4    flex  ">
                <Link
                  className="flex items-center gap-2 group relative "
                  to="/cart"
                >
                  <p className="bg-gray-300 absolute top-5 right-2 hidden group-hover:block text-xs text-black border px-2 ">
                    Cart
                  </p>
                  <span className="">
                    <ShoppingCart size={17} />
                  </span>
                  {itemsInCart.length > 0 && (
                    <span
                      id="CartBadge"
                      className="w-5 h-5 bg-red-500 text-center rounded-full absolute -top-4   -right-4"
                    >
                      {itemsInCart.length}
                    </span>
                  )}
                </Link>
                <Link className="relative group z-50">
                  <p className="bg-gray-300 absolute top-5 right-2 hidden group-hover:block text-xs text-black border px-2 ">
                    Wishlist
                  </p>
                  <i
                    onClick={toggleWishlist}
                    id="wishlistIcon"
                    className="fa-regular fa-heart  cursor-pointer relative "
                  ></i>
                  {itemsInWish.length > 0 && (
                    <span
                      id="CartBadge"
                      className="w-5 h-5 bg-red-500 text-center rounded-full absolute -top-3   -right-4"
                    >
                      {itemsInWish.length}
                    </span>
                  )}
                  <div
                    id="wishCartModal"
                    className={`w-72 h-72 ${
                      isWishOpen ? "" : "hidden"
                    } overflow-auto dark:bg-gray-800 bg-white border dark:border-gray-700 rounded-md px-3 py-2 absolute -right-6 sm:right-0 top-5 z-50 `}
                  >
                    <h1 className="text-red-400 font-bold pb-1 border-b dark:border-gray-700 flex items-center justify-between">
                      Wishlist{" "}
                      <i
                        onClick={toggleWishlist}
                        className="fa-solid fa-xmark "
                      ></i>
                    </h1>
                    <div id="wishlistContainer" className="flex flex-col gap-2">
                      {itemsInWish.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="item flex items-center justify-between py-1"
                          >
                            <div className="WishItemImg w-14 h-20">
                              <img src={item.cover_photo} alt="" />
                            </div>
                            <h1 className="text-[var(--baseColor)] truncate">
                              {item.title}
                            </h1>
                            <i
                              onClick={() => updateWishlist("remove", item)}
                              className="fa-solid fa-xmark text-xl bg-red-500 p-1 rounded-sm text-white"
                            ></i>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </div>
              <Link
                to={"/userprofile"}
                className="flex  justify-center items-center h-10 w-10 rounded-full bg-gray-400"
              >
                <i className="fa-regular fa-user "></i>
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-white/50 dark:bg-gray-900/50 dark:border-gray-800 backdrop-blur-md border-t w-full px-8 sm:px-12  text-base justify-between items-center flex relative py-1">
          <div
            id="Menu"
            ref={menuRef}
            className={`${
              isNavOpen ? "block" : "hidden"
            } lg:block absolute  lg:static lg:bg-transparent top-[3.5vh] left-0  dark:lg:bg-transparent  bg-gray-100 dark:bg-gray-900 `}
          >
            <ul
              className={`flex-col lg:flex-row  text-black dark:text-gray-300  dark:border-gray-800 border-b lg:border-0   top-[3.5vh]  left-0 h-auto w-screen flex lg:gap-8 gap-3  font-[400]  lg:items-center py-10 lg:w-auto lg:py-0 px-4 lg:px-0 `}
            >
              <li>
                {" "}
                <Link to="/" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/categories/all"}>Categories</Link>
              </li>
              <li>
                <Link onClick={toggleNavbar} to="/store/all">
                  Store
                </Link>
              </li>
              <li>
                <Link onClick={toggleNavbar} to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 relative lg:py-4"
                  onClick={toggleNavbar}
                  to="/library"
                >
                  <span className="relative group">Library</span>
                  {libraryItems.length > 0 && (
                    <span
                      id="LibraryBadge"
                      className="w-5 h-5 bg-green-500 text-center rounded-full absolute sm:top-1   -right-4"
                    >
                      {libraryItems.length}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                {" "}
                <Link onClick={toggleNavbar} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                {" "}
                <Link onClick={toggleNavbar} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className=" ">
            <span id="showNavBtn" className="lg:hidden transition ">
              <i
                ref={navIconRef}
                onClick={toggleNavbar}
                className={` ${
                  isNavOpen ? "fa-solid fa-xmark" : " fa-solid fa-bars"
                } `}
              ></i>
            </span>
          </div>
          <div className="">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
