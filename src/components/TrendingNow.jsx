import React from 'react';
import booksData from '../data/books'
import { Link } from 'react-router';
import { motion } from 'motion/react';


const TrendingNow = () => {


    const top3Trending = booksData.slice(0, 3)


    return (
        <div className='h-auto font-inter text-[30px]  px-8 sm:px-20 pt-10'>
            <h1 className='font-semibold sm:text-[1.3em] mb-10'>Trending Now</h1>


            <div className='flex gap-2 justify-center sm:flex-nowrap flex-wrap '>
                {
                    top3Trending.map((elm) => {
                        return (
                            <div  key={elm.id} className='sm:h-[70vh] h-[50vh] border border-black w-[280px] sm:w-[30vw] group cursor-pointer  relative overflow-hidden'>
                                <img className='w-full h-full' src={elm.cover_photo} alt="" />
                                <div className=' z-10  flex absolute items-center justify-center  w-full text-sm bg-black px-8 bottom-0 py-2  gap-4'>
                                    <button className='text-white hover:text-green-500   px-3 py-1'>Read Online</button>
                                    <Link to={'/checkout'}><button className='underline hover:text-green-500  px-3 py-1 text-white'>Checkout</button></Link>

                                </div>
                                <div
                                    id='bookDetails' className="w-44 text-[18px] absolute right-0 top-0 flex flex-col justify-center  gap-4 px-3 translate-x-[100%] group-hover:translate-x-[0] transition duration-500 bg-white/50 backdrop-blur-md h-full">
                                    <p>by: {elm.author}</p>
                                    <p>{elm.length}</p>
                                    <p>Rs: {elm.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Link to={'/store'} className='text-base text-center my-4 sm:mx-0 mx-8 hover:underline'>See More</Link>

        </div>
    );
};

export default TrendingNow;
