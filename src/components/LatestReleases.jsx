import React from 'react'
import booksData from '../data/books'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const LatestReleases = () => {
  const top3Trending = booksData.slice(6,9)
  return (

          <div className='h-auto font-inter text-[30px]  px-8 sm:px-20 pt-10'>
            <h1 className='font-semibold sm:text-[1.3em] mb-10'>Latest Releases</h1>
            <div className='flex gap-2 justify-center sm:flex-nowrap flex-wrap'>
                {
                    top3Trending.map((elm) => {
                        return (
                            <motion.div
                               initial={{ scale: 0.7 }}
                              whileInView={{ scale: 1 }}
                               viewport={{ once: true }}
                               transition={{
                                duration: 0.3
                               }}
                             key={elm.id} className='sm:h-[70vh] h-[40vh] border border-black w-[300px]   sm:w-[30vw] cursor-pointer relative' style={{
                                backgroundImage: `url(${elm.cover_photo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                                <div className=' flex absolute items-center justify-center  w-full text-sm bg-black px-8 bottom-0  gap-4'>
                                    <button className='text-white    px-3 py-1'>Read Online</button>
                                    <Link to={'/checkout'}><button className='underline  px-3 py-1 text-white'>Checkout</button></Link>
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>

            <Link to={'/store'}  className='text-base sm:mx-0 mx-8  text-center my-4 hover:underline'>See More</Link>
        </div>
  )
}

export default LatestReleases
