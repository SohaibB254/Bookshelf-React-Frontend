import React from 'react'
import { Link } from 'react-router'
import userProfile from '../../assets/user-profile.svg'
import analytics from '../../assets/analytics.jpg'
import UserSidebar from './UserSidebar'

const Profile = () => {
  return (
    <>
     <div id='ProfileContainer' className='flex'>
        <UserSidebar/>
        <div id="ProfileContent" className=' sm:w-[90vw] sm:ml-[10vw] font-inter'>
                <h1 className='sm:text-[36px] text-[22px] py-3 px-12 font-bold flex sm:flex-row flex-col justify-between'>Welcome to Profile!
                    <span className='sm:text-[0.4em] text-base cursor-pointer  font-normal'>Balance: <span className='text-green-500 hover:underline'>$324</span></span>
                </h1>
                <div className=' sm:px-12 px-2 flex flex-col gap-4 mt-12'>
                <div className='flex gap-4 w-full sm:flex-row flex-col'>
                    <div className=' sm:text-[24px] py-3 sm:w-[35%]  px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>All Orders📝</h1>
                        <ul className='py-2'>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>✅Completed: <span className='sm:text-[24px] font-semibold'>32</span> <Link className='text-blue-500'>View all</Link></li>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>❌Cancelled: <span className='sm:text-[24px] font-semibold'>12</span> <Link className='text-blue-500'>View all</Link></li>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>🚛Shipped: <span className='sm:text-[24px] font-semibold'>3</span> <Link className='text-blue-500'>View all</Link></li>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>🖥️Processed: <span className='sm:text-[24px] font-semibold'>1</span> <Link className='text-blue-500'>View all</Link></li>
                        </ul>
                    </div>
                    <div className=' sm:text-[24px] sm:w-[35%] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Books Read</h1>
                        <ul className='py-2 text-[18px]'>
                            <li className='border-b py-1'>1. The Great Jungle <br/><p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>2. The Great Forest of Rain<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>3. The Rise of white walkers<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>4. Global Warming in the Heat<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>5. Great Acient Animals<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>

                        </ul>
                        </div>
                    <div className=' sm:text-[24px] sm:w-[35%] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Spent this month</h1>
                            <h1 className='flex items-center gap-3 mt-4'>Total Spent: <span className='text-red-700'>$765</span></h1>
                        </div>
                </div>
                <div className='sm:text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>

                        <h1 className='font-semibold cursor-pointer  py-2 border-b'>Analytics</h1>
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

export default Profile
