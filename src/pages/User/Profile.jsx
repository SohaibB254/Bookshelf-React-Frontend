import React from 'react'
import { Link } from 'react-router'
import userProfile from '../../assets/user-profile.svg'
import analytics from '../../assets/analytics.jpg'

const Profile = () => {
  return (
    <>
     <div id='DashBoardContainer' className='flex'>
        <div id="DashBoardNav" className='  fixed border border-b-0 flex flex-col py-3  h-[90vh]'>
            <h1 className='text-[24px] font-semibold flex flex-col items-center gap-2'>
                <div className=' h-14 w-14 cursor-pointer rounded-full'>
                    <img src={userProfile} alt="" />
                </div>Profile
            </h1>
            <div className='flex flex-col  justify-between h-screen '>
              <ul className='flex flex-col text-center gap-4 mt-4'>
                <Link to={'/userprofile/account'}><li className='cursor-pointer px-12 border-b py-2'>Account</li></Link>
                <li className='cursor-pointer px-12 border-b py-2'>Payments</li>
                <li className='cursor-pointer px-12 border-b py-2'>Wallet</li>

            </ul>
             <Link className='cursor-pointer px-12 border-b   py-2 text-red-600 font-[500] text-center'>Logout</Link>
            </div>


        </div>
        <div id="DashBoardContent" className=' w-[90vw] ml-[10vw] font-inter'>
                <h1 className='text-[36px] py-3 px-12 font-bold flex justify-between'>Welcome to Profile!
                    <h1 className='text-[0.4em] cursor-pointer font-normal'>Balance: <span className='text-green-500 hover:underline'>$324</span></h1>
                </h1>
                <div className=' px-12 flex flex-col gap-4 mt-12'>
                <div className='flex gap-4 w-full '>
                    <div className=' text-[24px] py-3 w-[35%]  px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>All Orders📝</h1>
                        <ul className='py-2'>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>✅Completed: <span className='text-[24px] font-semibold'>32</span> <Link className='text-blue-500'>View all</Link></li>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>❌Cancelled: <span className='text-[24px] font-semibold'>12</span> <Link className='text-blue-500'>View all</Link></li>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>🚛Shipped: <span className='text-[24px] font-semibold'>3</span> <Link className='text-blue-500'>View all</Link></li>
                            <li className='flex items-center justify-between gap-1 text-[16px] border-b py-3 px-2 mt-2'>🖥️Processed: <span className='text-[24px] font-semibold'>1</span> <Link className='text-blue-500'>View all</Link></li>
                        </ul>
                    </div>
                    <div className=' text-[24px] w-[35%] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Books Read</h1>
                        <ul className='py-2 text-[18px]'>
                            <li className='border-b py-1'>1. The Great Jungle <br/><p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>2. The Great Forest of Rain<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>3. The Rise of white walkers<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>4. Global Warming in the Heat<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>
                            <li className='border-b py-1'>5. Great Acient Animals<p className='text-[16px] flex justify-between text-gray-500 mx-4'> Pages: 432 <Link className='text-blue-500'>View book details</Link></p></li>

                        </ul>
                        </div>
                    <div className=' text-[24px] w-[35%] py-3 px-4 rounded-md  shadow-sm shadow-black'>
                        <h1 className='font-semibold py-2 border-b'>Spent this month</h1>
                            <h1 className='flex items-center gap-3 mt-4'>Total Spent: <span className='text-red-700'>$765</span></h1>
                        </div>
                </div>
                <div className='text-[24px] py-3 px-4 rounded-md  shadow-sm shadow-black'>

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
