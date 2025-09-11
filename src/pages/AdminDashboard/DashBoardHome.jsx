import React from 'react'
import { Link } from 'react-router'
import graph from '../../assets/graph.jpg'
import graph2 from '../../assets/graph2.jpg'
import graph3 from '../../assets/graph3.jpg'
import analytics from '../../assets/analytics.jpg'
import AdminDbNav from './AdminDbNav'

const DashBoardHome = () => {
  return (
    <>
    <div id='DashBoardContainer' className='flex'>
    <AdminDbNav/>
        <div id="DashBoardContent" className=' sm:w-[90vw] sm:ml-[10vw] w-auto font-inter'>
                <h1 className='sm:text-[32px] text-[22px] py-3 px-12  font-bold w-auto sm:flex-row flex-col flex justify-between'>Welcome to Dashboard
                    <span className='sm:text-[0.4em] text-base cursor-pointer font-normal'>Balance: <span className='text-green-500 hover:underline'>$34,324</span></span>
                </h1>
                <div className=' sm:px-12 px-2 flex flex-col gap-4 mt-12 flex-wrap  '>
                <div className='flex gap-4 flex-wrap sm:flex-nowrap items-center  '>
                    <div className=' sm:text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Sales</h1>
                        <div className='w-[25vw]'>
                          <img src={graph} alt="" />
                        </div>
                        </div>
                    <Link to={'/admindashboard/managebooks'}><div className=' sm:text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Books</h1>
                        <div className='w-[25vw]'>
                          <img src={graph2} alt="" />
                        </div>
                        </div></Link>
                    <div className=' sm:text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Users</h1>
                        <div className='w-[25vw]'>
                          <img src={graph3} alt="" />
                        </div>
                        </div>
                </div>
                <div className='sm:text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>

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
