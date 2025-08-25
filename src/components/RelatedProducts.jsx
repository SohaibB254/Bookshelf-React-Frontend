import React from "react";
import booksData from '../data/books'
import { Link } from "react-router";

const RelatedProducts = ()=>{
    const top3Trending = booksData.slice(6,9)
    return (
          <div className='h-auto font-inter text-[30px] px-20 pt-10'>
            <h1 className='font-semibold text-[1.3em] mb-10'>Related Books</h1>
            <div className='flex gap-2 justify-center '>
                {
                    top3Trending.map((elm) => {
                        return (
                            <div key={elm.id} className='h-[70vh] border border-black w-[30vw] relative' style={{
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
        </div>
    )
}

export default RelatedProducts;
