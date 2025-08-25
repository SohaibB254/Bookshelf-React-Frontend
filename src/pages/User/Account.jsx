import React from 'react'
import userProfile from '../../assets/user-profile.svg'
import { Link } from 'react-router'

const Account = () => {
  return (
  <>   <div id="DashBoardNav" className='  fixed border border-b-0 flex flex-col py-3  h-[90vh]'>
            <h1 className='text-[24px] font-semibold flex flex-col items-center gap-2'>
                <div className=' h-14 w-14 cursor-pointer rounded-full'>
                    <img src={userProfile} alt="" />
                </div>Profile
            </h1>
            <div className='flex flex-col  justify-between h-screen '>
              <ul className='flex flex-col text-center gap-4 mt-4'>
                <li className='cursor-pointer px-12 border-b py-2'>Account</li>
                <li className='cursor-pointer px-12 border-b py-2'>Payments</li>
                <li className='cursor-pointer px-12 border-b py-2'>Wallet</li>

            </ul>
             <Link className='cursor-pointer px-12 border-b   py-2 text-red-600 font-[500] text-center'>Logout</Link>
            </div>


        </div>
       <div id="DashBoardContent" className=' w-[90vw] ml-[10vw] px-12 font-inter py-10'>
           <div className=' border rounded-md shadow-sm shadow-black h-auto py-12 px-3'>
            <ul className='flex flex-col gap-3'>
                <li className='py-2  cursor-pointer border-black'>Account Information
                    <div className='text-zinc-400'>
                    <p className='cursor-default'>Phone: +92 325 3242123</p>
                    <p className='cursor-default'>Email: bookshelfer@gmail.com</p>
                    <button className='text-blue-500'>Edit</button>
                    </div>
                </li>
                <li>Address Book
                      <div className='text-zinc-400'>
                    <p className='cursor-default'>House 43, Street 12, Garden Town, Lahore Punjab, Pakistan</p>
                    <button className='text-blue-500'>Edit</button>
                    </div>
                </li>
                <li>Country
                      <div className='text-zinc-400'>
                    <p className='cursor-default'>Pakistan </p>
                    </div>
                </li>
                <li className='cursor-pointer'>Help <i className="fa-solid fa-circle-question"></i> </li>
                <li className='cursor-pointer'>Feedback</li>
            </ul>
        </div>
            </div>
</>
  )
}

export default Account
