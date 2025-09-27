import React from "react";
import booksData from '../data/books'
import { Link } from "react-router";

const RelatedProducts = ()=>{
    const top3Trending = booksData.slice(6,9)
    return (
          <div className='h-autofont-inter flex flex-col border-b text-[30px] px-20 py-10'>
            <h1 className='font-semibold sm:text-[1.3em] mb-10'>Related Books</h1>
            <div className='flex gap-2 justify-center flex-wrap sm:flex-nowrap '>
                {
                    top3Trending.map((elm) => {
                        return (
                            <div key={elm.id} className='sm:h-[70vh] h-[200px] border border-black w-[70%] sm:w-[30vw] relative' style={{
                                backgroundImage: `url(${elm.cover_photo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                                <div className=' flex absolute items-center justify-center  w-full text-sm bg-black px-2 sm:px-8 bottom-0  gap-4'>
                                    <button className='text-white   sm:px-3 py-1'>Read Online</button>
                                    <Link to={'/checkout'}><button className='underline  sm:px-3 py-1 text-white'>Checkout</button></Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Link to={'/store/all'} className="text-base hover:underline  my-10 ">See More</Link>
        </div>
    )
}

export default RelatedProducts;
