import React from 'react';
import booksData from '../data/books'
import { Link } from 'react-router';

const TrendingNow = () => {


const top3Trending = booksData.slice(0,3)


    return (
        <div className='h-auto font-inter text-[30px]  px-8 sm:px-20 pt-10'>
            <h1 className='font-semibold sm:text-[1.3em] mb-10'>Trending Now</h1>


            <div className='flex gap-2 justify-center sm:flex-nowrap flex-wrap '>
                {
                    top3Trending.map((elm) => {
                        return (
                            <div key={elm.id} className='sm:h-[70vh] h-[50vh] border border-black w-[300px]   sm:w-[30vw] cursor-pointer relative' style={{
                                backgroundImage: `url(${elm.cover_photo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                                <div className=' flex absolute items-center justify-center  w-full text-sm bg-black px-8 bottom-0  gap-4'>
                                    <button className='text-white    px-3 py-1'>Read Online</button>
                                    <Link to={'/checkout'}><button className='underline  px-3 py-1 text-white'>Checkout</button></Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
                <Link to={'/store'}  className='text-base text-center my-4 sm:mx-0 mx-8 hover:underline'>See More</Link>

        </div>
    );
};

export default TrendingNow;
