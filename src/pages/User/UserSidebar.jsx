import React, { useState,useEffect } from 'react'
import { Link } from 'react-router'
import userProfile from '../../assets/user-profile.svg'

const UserSidebar = () => {
      const[isShown, setIsShown] = useState(true);
        const [isMobile, setIsMobile] = useState(false)


      const toggleSidebar = ()=>{
        if(isMobile){

          setIsShown(oldValue => !oldValue)
        }
      };
        useEffect((() => {
          const checkScreen = () => {
            const width = window.innerWidth;
            const isPhone = width <= 1024;
            setIsMobile(isPhone);
          };
          checkScreen();
          window.addEventListener('resize', checkScreen);
          return () => window.removeEventListener('resize', checkScreen)
        }), [])
  return (
    <>
    <div id="DashBoardNav" className={`bg-white dark:bg-gray-900 dark:text-gray-300 fixed dark:border-gray-800 lg:static sm:w-[300px] w-full  border lg:shadow-none shadow-sm shadow-black border-b-0 border-t-0 ${isShown?"translate-x-0" : "-translate-x-full"} transform transition-transform duration-300 ease-in-out flex-col py-3 sm:h-auto z-20  h-[90vh]`}>
        <div className={`${isMobile?"translate-x-0" : "-translate-x-full"} `}>
          <i onClick={toggleSidebar} className="fa-solid fa-xmark text-xl  text-right w-full  px-2"></i>
        </div>
            <Link to={'/userprofile'} className='sm:text-xl text-base cursor-pointer font-semibold flex flex-col items-center gap-2'>
                <div className='sm:h-20 sm:w-20 h-14 w-14 cursor-pointer overflow-hidden rounded-full'>
                    <img className='object-cover h-full  w-full' src='https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>Sam Williams
            </Link>
            <div className='h-screen '>
              <ul className='flex flex-col px-12 gap-2 mt-4'>
                <Link onClick={toggleSidebar} to={'/userprofile'} className='cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] px-1 py-2 flex gap-1 items-center hover:bg-green-200'><i class="fa-solid fa-user"></i>Profile</Link>
                <li className='cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200'><i className="fa-solid fa-cart-shopping"></i>My cart</li>
                <li className='cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200'><i class="fa-regular fa-heart"></i>Wishlist</li>
                <li className='cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200'><i class="fa-solid fa-shop"></i>Orders</li>
                <li className='cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200'><i class="fa-solid fa-circle-info"></i>Help center</li>
                <li className='cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200'><i class="fa-solid fa-key"></i>Terms & Policy</li>
             <Link className='cursor-pointer  border-b dark:border-gray-800  py-2 px-1 flex gap-1 items-center text-red-600 font-[500] '><i class="fa-solid fa-right-from-bracket"></i>Logout</Link>

            </ul>
            </div>

        </div>
        <div className={`${isMobile?'':'hidden'}`}>
          <i onClick={toggleSidebar} className="fa-solid fa-ellipsis-vertical dark:text-gray-300 text-2xl py-3  px-4"></i>
        </div>

        </>
  )
}

export default UserSidebar
