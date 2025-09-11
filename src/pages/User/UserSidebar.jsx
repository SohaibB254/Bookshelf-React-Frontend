import React, { useState,useEffect } from 'react'
import { Link } from 'react-router'
import userProfile from '../../assets/user-profile.svg'

const UserSidebar = () => {
      const[isShown, setIsShown] = useState(true);
        const [isMobile, setIsMobile] = useState(false)


      const toggleSidebar = ()=>{
        setIsShown(oldValue => !oldValue)
      };
        useEffect((() => {
          const checkScreen = () => {
            const width = window.innerWidth;
            const isPhone = width <= 640;
            setIsMobile(isPhone);
          };
          checkScreen();
          window.addEventListener('resize', checkScreen);
          return () => window.removeEventListener('resize', checkScreen)
        }), [])
  return (
    <>
    <div id="DashBoardNav" className={`bg-white  z-50 fixed border border-b-0 ${isShown?'flex':'hidden'} flex-col py-3  h-[90vh]`}>
        <div className={`${isMobile?'':'hidden'}`}>
          <i onClick={toggleSidebar} className="fa-solid fa-xmark text-xl  text-right w-full  px-2"></i>
        </div>
            <Link to={'/userprofile'} className='text-[24px] cursor-pointer font-semibold flex flex-col items-center gap-2'>
                <div className=' h-14 w-14 cursor-pointer rounded-full'>
                    <img src={userProfile} alt="" />
                </div>Profile
            </Link>
            <div className='flex flex-col  justify-between h-screen '>
              <ul className='flex flex-col text-center gap-4 mt-4'>
                <Link onClick={toggleSidebar} to={'/userprofile/account'}><li className='cursor-pointer px-12 border-b py-2 hover:text-green-500'>Account</li></Link>
                <li className='cursor-pointer px-12 border-b py-2 hover:text-green-500'>Payments</li>
                <li className='cursor-pointer px-12 border-b py-2 hover:text-green-500'>Wallet</li>

            </ul>
             <Link className='cursor-pointer px-12 border-b   py-2 text-red-600 font-[500] text-center'>Logout</Link>
            </div>

        </div>
        <div className={`${isMobile?'':'hidden'}`}>
          <i onClick={toggleSidebar} className="fa-solid fa-ellipsis-vertical text-2xl py-3  px-4"></i>
        </div>
        </>
  )
}

export default UserSidebar
