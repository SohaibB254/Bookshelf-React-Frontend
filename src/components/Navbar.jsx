import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { useCart } from "../context/CartContext";
import { useLibrary } from "../context/LibraryContext";
import { useHomeV } from "../context/HomeVContext";
import Dropdown from "./Dropdown";
import { useWish } from "../context/WishContext";
 import ThemeSwitcher from './ThemeSwitcher'
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [accOpen, setAccOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWishOpen, setIsWishOpen] = useState(false);
  const { itemsInCart } = useCart();
  const { itemsInWish, updateWishlist } = useWish()
  const { libraryItems } = useLibrary();
  const { homeV, handleHomeV } = useHomeV();
  const path = useLocation().pathname;

  const toggleAcc = () => {
    setAccOpen((prev) => !prev);
  };
  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };
  const toggleWishlist = ()=>{
    setIsWishOpen(prev => !prev)
  }
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
        className={`${path.startsWith("/auth") ? "hidden" : ""} dark:bg-gray-900  w-screen h-[10vh] absolute top-0`}
      ></div>
      <div
        id="NavbarContainer"
        className={`${
          path.startsWith("/auth") ? "hidden" : ""
        } sticky top-0  z-40`}
      >
        <div
          id="Navbar"
          className={`flex sticky top-0  backdrop-blur-md  font-inter h-[10vh] text-[30px] items-center dark:bg-gray-900/50 dark:text-gray-300 bg-white/50  sm:w-screen   justify-between   px-8 sm:px-12 `}
        >
          <div id="Logo">
            <Link >
            <span className="flex relative items-center">
              <h1 className="text-[var(--baseColor)] sm:text-[1em] text-[0.7em] cursor-pointer transition hover:text-[var(--darker)] ">
                BookShelf
              </h1>
            </span>
              <div className="text-xs  font-inter w-24 absolute bottom-0 ">
              <Dropdown
                options={["Home V1", "Home V2"]}
                selected={
                  homeV === "v1" ? "Home V1" : homeV === "v2" ? "Home V2" : ""
                }
                onChange={(value) =>
                  handleHomeV(value === "Home V1" ? "v1" : "v2")
                }
                bg ={``}
              />
                 </div>
            </Link>
          </div>
          <div
            id="Menu"
            ref={menuRef}
            className={`${isNavOpen ? "block" : "hidden"} lg:block`}
          >
            <ul
              className={`flex-col lg:flex-row lg:bg-transparent bg-gray-100 text-black dark:text-gray-300 dark:lg:bg-transparent dark:bg-gray-900 dark:border-gray-800 border-b lg:border-0  fixed lg:top-0 lg:relative  top-[9.9vh] px-8 left-0 h-auto w-screen flex lg:gap-8 gap-3 text-[0.5em] font-[400] lg:w-[40vw] lg:mr-[66px] lg:items-center py-10 lg:py-3 justify-center `}
            >
              <Link to="/" onClick={toggleNavbar}>
                <li>Home</li>
              </Link>
              <Link to={"/categories/all"}>
                <li>Categories</li>
              </Link>
              <Link onClick={toggleNavbar} to="/store/all">
                {" "}
                <li>Store</li>
              </Link>
              <Link to={'/blog'}>
                <li>Blog</li>
              </Link>

              <Link
                className="flex items-center gap-2 relative lg:py-8"
                onClick={toggleNavbar}
                to="/library"
              >
                {" "}
                <li className="relative group">Library</li>
                {libraryItems.length > 0 && (
                  <span
                    id="LibraryBadge"
                    className="w-5 h-5 bg-green-500 text-center rounded-full absolute sm:top-5   -right-4"
                  >
                    {libraryItems.length}
                  </span>
                )}
              </Link>
              <Link onClick={toggleNavbar} to="/contact">
                {" "}
                <li>Contact</li>
              </Link>
              <Link onClick={toggleNavbar} to="/about">
                {" "}
                <li>About</li>
              </Link>
            </ul>
          </div>

          <div id="Account" className=" relative text-[0.5em] ">
                  <span className="font-inter text-xs absolute top-7 lg:-right-1 -right-3  ">
                  <ThemeSwitcher/>
                  </span>
            <div className="flex  gap-2 items-center">
              <div className=" items-center gap-4    flex  ">
                   <Link
                className="flex items-center gap-2 group relative "
                to="/cart"
              >
                <p className="bg-gray-300 absolute top-5 right-2 hidden group-hover:block text-xs text-black border px-2 ">
                  Cart
                </p>
                <span className="">
                  {/* <i className="fa-solid fa-cart-shopping "></i> */}
                  <ShoppingCart size={18}/>
                </span>
                {itemsInCart.length > 0 && (
                  <span
                    id="CartBadge"
                    className="w-5 h-5 bg-red-500 text-center rounded-full absolute sm:-top-3   -right-4"
                  >
                    {itemsInCart.length}
                  </span>
                )}
              </Link>
              <Link className="relative group">
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
                    className="w-5 h-5 bg-red-500 text-center rounded-full absolute sm:-top-3   -right-4"
                  >
                    {itemsInWish.length}
                  </span>
                )}
                <div id="wishCartModal" className={`w-72 h-72 ${isWishOpen ? '':'hidden'} overflow-auto dark:bg-gray-800 bg-white border dark:border-gray-700 rounded-md px-3 py-2 absolute -right-6 sm:right-0 top-5`}>
                    <h1 className="text-red-400 font-bold pb-1 border-b dark:border-gray-700 flex items-center justify-between">Wishlist <i onClick={toggleWishlist} className="fa-solid fa-xmark "></i></h1>
                      <div id="wishlistContainer" className="flex flex-col gap-2">
                        {
                          itemsInWish.map((item)=>{
                            return (
                                <div key={item.id} className="item flex items-center justify-between py-1">
                      <div className="WishItemImg w-14 h-20">
                        <img src={item.cover_photo} alt="" />
                      </div>
                        <h1 className="text-[var(--baseColor)] truncate">{item.title}</h1>
                        <i onClick={()=>updateWishlist('remove',item)} className="fa-solid fa-xmark text-xl bg-red-500 p-1 rounded-sm text-white"></i>
                    </div>
                            )
                          })
                        }


                    </div>

                </div>
                 </Link>
              </div>
              <div className="flex items-center" onClick={toggleAcc}>
                <i className="fa-regular fa-user mx-2"></i>
              </div>
              <span id="showNavBtn" className="lg:hidden transition ">
                <i
                  ref={navIconRef}
                  onClick={toggleNavbar}
                  className={`${
                    isNavOpen ? "fa-solid fa-xmark" : " fa-solid fa-bars"
                  } `}
                ></i>
              </span>
            </div>
            <div
              className={`absolute   ${
                accOpen ? "flex" : "hidden"
              } transition-all border sm:text-[1em] text-[0.7em] rounded-md  dark:bg-gray-900  flex-col dark:border-gray-700 sm:right-[3vw]   lg:right-[1.4vw] right-[8vw] sm:top-[20px]   w-[150px] h-[250px] bg-white`}
            >
              <i
                onClick={toggleAcc}
                className="fa-solid fa-xmark  text-right cursor-pointer text-[16px] hover:text-green-700 py-2 sm:pr-2 pr-3"
              ></i>
              <Link
                onClick={toggleAcc}
                to="/userprofile"
                className="border-b transition hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700   px-2 py-1"
              >
                Profile
              </Link>
              <Link
                onClick={toggleAcc}
                to="/auth/login"
                className="border-b transition hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700   px-2 py-1"
              >
                Login
              </Link>
              <Link
                onClick={toggleAcc}
                to="/auth/signup"
                className="border-b transition hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700   px-2 py-1"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
