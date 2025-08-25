import React from 'react'
import { Link } from 'react-router'
import userProfile from '../../assets/user-profile.svg'
import graph from '../../assets/graph.jpg'
import graph2 from '../../assets/graph2.jpg'
import graph3 from '../../assets/graph3.jpg'
import analytics from '../../assets/analytics.jpg'

const DashBoardHome = () => {
  return (
    <>
    <div id='DashBoardContainer' className='flex'>
        <div id="DashBoardNav" className='border flex flex-col fixed py-3 h-[90vh]'>

            <h1 className='text-[24px] text-center flex flex-col items-center font-semibold'>
               <div className=' h-14 w-14 cursor-pointer rounded-full'>
                              <img src={userProfile} alt="" />
                          </div>Dashboard</h1>
            <div className='flex flex-col  justify-between h-full'>
              <ul className='flex flex-col gap-4 mt-4'>
                <li className='cursor-pointer px-12 border-b pb-2 '>Orders</li>
                <li className='cursor-pointer px-12 border-b pb-2'>Books</li>
                <li className='cursor-pointer px-12 border-b pb-2'>Wallet</li>
                <li className='cursor-pointer px-12 pb-2'>Users</li>

            </ul>
             <Link className='cursor-pointer px-12 border-b  py-2 text-red-600 font-[500] text-center'>Logout</Link>
            </div>
        </div>
        <div id="DashBoardContent" className=' w-[90vw] ml-[10vw] font-inter'>
                <h1 className='text-[32px] py-3 px-12 font-bold flex justify-between'>Welcome to Dashboard
                    <h1 className='text-[0.4em] cursor-pointer font-normal'>Balance: <span className='text-green-500 hover:underline'>$34,324</span></h1>
                </h1>
                <div className=' px-12 flex flex-col gap-4 mt-12  '>
                <div className='flex gap-4  '>
                    <div className=' text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Sales</h1>
                        <div className='w-[25vw]'>
                          <img src={graph} alt="" />
                        </div>
                        </div>
                    <div className=' text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Books</h1>
                        <div className='w-[25vw]'>
                          <img src={graph2} alt="" />
                        </div>
                        </div>
                    <div className=' text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Users</h1>
                        <div className='w-[25vw]'>
                          <img src={graph3} alt="" />
                        </div>
                        </div>
                </div>
                <div className='text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>

                        <h1 className='font-semibold cursor-pointer  py-2 border-b'>All Orders</h1>
                      <div className=''>
                        <img src={analytics} alt="" />
                      </div>
                </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default DashBoardHome
