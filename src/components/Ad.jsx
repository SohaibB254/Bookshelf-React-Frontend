import React from 'react'
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';

const Ad = () => {
  return (
    <div id='adContainer' className='font-inter sm:px-10 mt-5 w-screen '>
        <div id='ad' className='w-full sm:h-[200px] h-[100px] px-3 py-4 bg-white shadow-black shadow-sm   flex justify-center items-center'>
        <div className='w-[50%] flex items-center justify-center'>

            <h1 className='sm:text-3xl sm:w-[40%]  font-semibold'>Get a special <span className='text-red-600 font-bold animate-pulse'>45% OFF</span> on all orders above <span className='text-red-600 font-bold animate-pulse'>Rs: 1500</span></h1>
        </div>
            <div className='h-full  flex items-center animate-pulse w-[40%]'>
                <img className='h-full shadow-sm shadow-black ' src={book2} alt="" />
                <img className='h-1/2 shadow-sm shadow-black ' src={book4} alt="" />
                <img className='h-1/3  shadow-sm shadow-black' src={book3} alt="" />
            </div>


        </div>
    </div>
  )
}

export default Ad
