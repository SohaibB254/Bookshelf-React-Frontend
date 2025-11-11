import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router";
import { useCart } from "../context/CartContext";
import { useLibrary } from "../context/LibraryContext";
import { useWish } from "../context/WishContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { ShoppingCart, Heart, House, Store, Grid, Newspaper, BookOpen, Phone, Info } from "lucide-react";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWishOpen, setIsWishOpen] = useState(false);
  const [wishPos, setWishPos] = useState({ top: 0, right: 0 });
    const { user } = useUser()
  const { itemsInCart } = useCart();
  const { itemsInWish, updateWishlist } = useWish();
  const { libraryItems } = useLibrary();
  const path = useLocation().pathname;

  const navIconRef = useRef(null);
  const menuRef = useRef(null);
  const wishlistRef = useRef(null);

  // Close navbar when clicking outside
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

  // Compute position of the wishlist modal
  useEffect(() => {
    if (isWishOpen && wishlistRef.current) {
      const rect = wishlistRef.current.getBoundingClientRect();
      setWishPos({
        top: rect.bottom + window.scrollY + 10,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isWishOpen]);

  const toggleNavbar = () => setIsNavOpen((prev) => !prev);
  const toggleWishlist = () => setIsWishOpen((prev) => !prev);

  return (
    <>
    {/* Overlay for touch screens */}
    {
      isNavOpen &&
    <div className="fixed h-full lg:hidden block z-40 w-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm">
    </div>
    }
      <div
        id="NavbarContainer"
        className={`${
          path.startsWith("/auth") ? "hidden" : ""
        } sticky  top-0 w-screen z-40 dark:text-gray-300`}
      >
        <div
          id="Navbar"
          className="flex  backdrop-blur-md font-inter h-[10vh] text-[30px] items-center dark:bg-gray-900/50 dark:text-gray-300 bg-white/50 sm:w-screen justify-between px-8 sm:px-12"
        >
          {/* --- Logo --- */}
          <div id="Logo">
            <Link>
              <span className="flex relative items-center">
                <h1 className="text-[var(--baseColor)] sm:text-[1em] text-[0.7em] cursor-pointer transition hover:text-[var(--darker)]">
                  BookShelf
                </h1>
              </span>
            </Link>
          </div>

          {/* --- Account / Icons --- */}
          <div id="Account" className="relative text-[0.5em]">
            <div className="flex gap-5 items-center">
              <div className="items-center gap-4 flex">
                {/* Cart Icon */}
                <Link
                  className="flex items-center gap-2 group relative"
                  to="/cart"
                >
                  <p className="bg-gray-300 absolute top-5 right-2 hidden group-hover:block text-xs text-black border px-2">
                    Cart
                  </p>
                  <ShoppingCart size={17} />
                  {itemsInCart.length > 0 && (
                    <span className="w-5 h-5 bg-red-500 text-center rounded-full absolute -top-4 -right-4">
                      {itemsInCart.length}
                    </span>
                  )}
                </Link>

                {/* Wishlist Icon */}
                <div className="relative group">
                  <p className="bg-gray-300 absolute top-5 right-2 hidden group-hover:block text-xs text-black border px-2">
                    Wishlist
                  </p>
                  <span
                    ref={wishlistRef}
                    onClick={toggleWishlist}
                    id="wishlistIcon"
                    className="cursor-pointer relative"
                  >
                    <Heart size={17} />
                  </span>
                  {itemsInWish.length > 0 && (
                    <span className="w-5 h-5 bg-red-500 text-center rounded-full absolute -top-4 -right-4">
                      {itemsInWish.length}
                    </span>
                  )}
                </div>
              </div>

              {/* User Icon */}
              <Link
                to={`${!localStorage.getItem('Token')?'/auth/login':'/userprofile'}`}
                className="flex justify-center items-center h-10 w-10 overflow-hidden rounded-full bg-gray-400"
              >
                {
                  user.pfp ? <img className="h-full w-full object-cover" src={user.pfp} alt="" />:<i className="fa-regular fa-user"></i>
                }


              </Link>
            </div>
          </div>
        </div>

        {/* --- Lower Nav (Menu + ThemeSwitcher) --- */}
        <div className="bg-white/50 dark:bg-gray-900/50 dark:border-gray-800 backdrop-blur-md border-t w-full px-8 sm:px-12 text-base justify-between items-center flex flex-col-reverse lg:flex-row relative py-1 ">
          <div
            id="Menu"
            ref={menuRef}
            className={` ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            } transform transition-transform duration-300 ease-in-out lg:-translate-x-0   fixed lg:static  top-[36px] lg:top-[3.1vh] left-0 `}
          >
            <ul
              className={`flex-col lg:flex-row z-40 lg:bg-transparent lg:dark:bg-transparent bg-white dark:bg-gray-900 text-black  dark:text-gray-300  dark:border-gray-800 border-b lg:border-0 lg:h-auto   h-screen w-fit flex lg:gap-8 gap-3  font-[400]  lg:items-center py-10 lg:w-auto lg:py-0 px-5 pr-10 lg:px-0 `}
            >
              <li>
                {" "}
                <Link className=" flex gap-2 items-center" to="/" onClick={toggleNavbar}>
                  Home <House size={18} className="lg:hidden block"/>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center" to={"/categories/all"}>
                Categories <Grid size={18} className="lg:hidden block"/>
                </Link>
              </li>
              <li>
                <Link className=" flex gap-2 items-center" onClick={toggleNavbar} to="/store/all">
                  Store <Store size={18} className="lg:hidden block"/>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center" onClick={toggleNavbar} to={"/blog"}>
                  Blog <Newspaper size={18} className="lg:hidden block"/>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 relative lg:py-4"
                  onClick={toggleNavbar}
                  to="/library"
                >
                  <span className="relative group">Library</span>
                  <BookOpen size={18} className="lg:hidden block"/>
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
                <Link className="flex gap-2 items-center" onClick={toggleNavbar} to="/contact">
                  Contact <Phone size={18} className="lg:hidden block"/>
                </Link>
              </li>
              <li>
                {" "}
                <Link className="flex gap-2 items-center" onClick={toggleNavbar} to="/about">
                  About  <Info size={18} className="lg:hidden block"/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="z-[9999]">
              <span id="showNavBtn" className="lg:hidden transition text-xl ">
                <i
                  ref={navIconRef}
                  onClick={toggleNavbar}
                  className={` ${
                    isNavOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                  } `}
                ></i>
              </span>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* --- Wishlist Modal (Portal) --- */}
      {isWishOpen &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: wishPos.top,
              right: wishPos.right,
              zIndex: 9999,
            }}
            className="w-72 h-72 overflow-auto dark:bg-gray-800 bg-white border dark:border-gray-700 rounded-md px-3 py-2 shadow-lg"
          >
            <h1 className="text-red-400 font-bold pb-1 border-b dark:border-gray-700 flex items-center justify-between">
              Wishlist{" "}
              <i
                onClick={toggleWishlist}
                className="fa-solid fa-xmark cursor-pointer"
              ></i>
            </h1>
            <div id="wishlistContainer" className="flex flex-col gap-2">
              {itemsInWish.map((item) => (
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
                    className="fa-solid fa-xmark text-xl bg-red-500 p-1 rounded-sm text-white cursor-pointer"
                  ></i>
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
