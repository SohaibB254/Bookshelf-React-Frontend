import React from 'react'
import userProfile from '../../assets/user-profile.svg'
import { Link } from 'react-router'
import UserSidebar from './UserSidebar'

const Account = () => {
  return (
  <>   <UserSidebar/>       <div id="DashBoardContent" className=' sm:w-[90vw] sm:ml-[10vw] px-12 font-inter py-10'>
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
