import React from 'react'
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import { Link } from 'react-router';

const Ad = () => {
  return (
    <div id='adContainer' className='font-inter sm:px-10 mt-5 w-screen '>
        <div id='ad' className='w-full  h-fit px-3 py-4 bg-white shadow-black shadow-sm gap-1 relative   overflow-x-hidden   flex justify-center items-center'>
        <div className='w-auto flex  items-center justify-center '>
            <h1 className='absolute sm:text-xl text-white sm:px-4 sm:py-2 px-1 right-0 top-2 bg-red-500'>Limited Offer</h1>
            <h1 className='sm:text-3xl text-[1rem] sm:w-[60%]  font-semibold'>Get a special <span className='text-red-600 font-bold animate-pulse'>45% OFF</span> on all orders above <span className='text-red-600 font-bold animate-pulse'>Rs: 1500</span>
            <Link to={'/store/all'} className='self-start text-xs sm:text-xl block border w-fit mt-2  p-1 rounded-sm border-[var(--baseColor)] text-[var(--baseColor)]'>Start shopping</Link>
            </h1>
        </div>
            <div className='h-full  flex items-center  w-[40%]'>
                <img className=' w-1/2 shadow-sm shadow-black ' src={book2} alt="" />
                <img className=' w-1/3 shadow-sm shadow-black ' src={book4} alt="" />
                <img className=' w-1/4 shadow-sm shadow-black' src={book3} alt="" />
            </div>


        </div>
    </div>
  )
}

export default Ad
