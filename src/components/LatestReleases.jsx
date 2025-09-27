import React from 'react'
import booksData from '../data/books'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const LatestReleases = () => {
    const top3Trending = booksData.slice(6, 9)
    return (

        <div className='h-auto font-inter text-[30px]  px-8 sm:px-20 pt-10'>
            <h1 className='font-semibold sm:text-[1.3em] mb-10'>Latest Releases</h1>
            <div className='flex gap-4 justify-center sm:flex-nowrap flex-wrap'>
                {
                    top3Trending.map((elm) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0,y:30 }}
                                whileInView={{ opacity: 1,y:0 }}
                                viewport={{ once: true,amount: 0.6 }}
                                transition={{
                                    duration: 0.7
                                }}
                                key={elm.id} className='sm:h-[70vh] h-[40vh] border border-black/50 w-[250px]   sm:w-[30vw] cursor-pointer group relative overflow-hidden' >
                                <img className='h-full w-full' src={elm.cover_photo} alt="" />
                                <div className=' flex absolute items-center justify-center  w-full text-sm bg-black px-8 bottom-0  z-10 gap-4'>
                                    <button className='text-white    sm:px-3 py-1'>Read Online</button>
                                    <Link to={'/checkout'}><button className='underline  px-3 py-1 text-white'>Checkout</button></Link>
                                </div>
                                <div
                                    id='bookDetails' className="w-full text-[18px] absolute right-0 top-0 flex flex-col justify-center items-center translate-x-[100%] group-hover:translate-x-0 transition duration-500  gap-4 px-3 bg-white/70  backdrop-blur-md h-full ">
                                    <h1 className='font-semibold text-2xl'>{elm.title}</h1>
                                    <p className=''>by: {elm.author}</p>
                                    <p className=''>{elm.length}</p>
                                    <p className=''>{elm.category}</p>
                                    <p className=' font-semibold'>Rs: {elm.price}</p>

                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>

            <Link to={'/store/latestbooks'} className='text-base sm:mx-0 mx-8  text-center my-4 hover:underline'>See More</Link>
        </div>
    )
}

export default LatestReleases
