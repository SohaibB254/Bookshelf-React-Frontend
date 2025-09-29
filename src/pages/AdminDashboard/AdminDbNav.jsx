import React, { useState, useEffect } from 'react'
import userProfile from '../../assets/user-profile.svg'
import { Link } from 'react-router'

const AdminDbNav = () => {
  const [isShown, setIsShown] = useState(true);
  const [isMobile, setIsMobile] = useState(false)

  const toggleSidebar = () => {
    setIsShown(oldValue => !oldValue)
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
    < >
      <div>
        <div id="DashBoardNav" className={`border bg-white flex-col px-3 z-10 lg:shadow-none shadow-sm shadow-black  ${isShown? 'flex' : 'hidden'} fixed  py-3 h-[90vh]`}>

          <div className={`${isMobile? 'flex' : 'hidden'} `}>
            <i onClick={toggleSidebar} className={`fa-solid fa-xmark text-xl block   text-right w-full  px-2`}></i>
          </div>
          <Link to={'/admindashboard'} className='text-[24px] text-center flex flex-col items-center font-semibold'>
            <div className=' h-14 w-14 cursor-pointer rounded-full'>
              <img src={userProfile} alt="" />
            </div>Dashboard </Link>
          <div className='flex flex-col  justify-between h-full'>
            <ul className='flex flex-col gap-4 mt-4'>
              <Link to={'/admindashboard'}><li className='cursor-pointer px-12 border-b pb-2 hover:text-green-500'>Books</li></Link>

            </ul>
            <Link className='cursor-pointer px-12 border-b  py-2 text-red-600 font-[500] text-center'>Logout</Link>
          </div>
        </div>
      </div>
      <div className={`w-2 ${isMobile ? '' : 'hidden'}  `}>
        <i onClick={toggleSidebar} className={`fa-solid absolute fa-ellipsis-vertical text-2xl py-3  px-4`}></i>
      </div>
    </>
  )
}

export default AdminDbNav
