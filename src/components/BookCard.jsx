import React, { useState } from 'react'
import { Link } from 'react-router'
import book from '../assets/book.jpg'
import RelatedProducts from './RelatedProducts';
import Review from './Review';
import NewsLetter from './NewsLetter'
import Footer from './Footer'

const BookCard = () => {
    const [qtyCount, setQtyCount] = useState(1);
    const handleQtyIncrease = ()=>{
        setQtyCount(prev => prev + 1)
    }
    const handleQtyDecrease = ()=>{
        setQtyCount(prev => Math.max(1, prev -1) )
    }
  return (
    <>
    <div className='border font-sans flex w-[100%] gap-20 mt-10 text-[24px] p-12'>
      <div>
        <img className='w-[30vw]' src={book} alt="" />
      </div>
      <div className='text-[0.8em] w-full '>
        <h1 className='text-[2.25em] font-semibold'>The Past is Rising</h1>
        <div className='flex flex-col text-[0.8em]'>
            <span id='reviewStars'>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                  5/5
            </span>
            <p className='text-gray-500 italic'>Author: Optimus Prime</p>
        </div>
        <div className='text-[1em] flex flex-col gap-1 mt-10'>
        <p>Total sold: 389</p>
        <h1 className='font-bold'>Price: $ 43.34</h1>
        <p className='text-gray-500'>Date Published: June 2019</p>
        <p className='text-gray-500'>Category: Fantasy</p>
        <p className='text-gray-500'>Languages: English, French, Korean</p>
        <p className='text-gray-500'>Book Length: 430 pages</p>   
        </div>
      <div className="Book-card-btn flex flex-col  mt-10 w-full">
        <div className='flex text-[0.8em] justify-between items-end w-full'>
        <span className='border border-black text-[1.5em] w-44  flex justify-center py-2 px-3 gap-3'><button  disabled={qtyCount === 1}
  style={{ opacity: qtyCount === 1 ? 0.5 : 1}} onClick={handleQtyDecrease} className=' font-semibold'>-</button> <span>{qtyCount}</span> <button onClick={handleQtyIncrease} className=' font-semibold'>+</button></span>
            <p className='hover:underline cursor-pointer'><i class="fa-solid fa-share"></i> Share</p>
        </div>
        <div className='text-[0.8em] flex justify-between items-end '>
       <Link to='/checkout'> <button className='bg-black w-44 my-1 text-base text-white px-3 py-3 hover:underline'>Checkout <i className="fa-solid fa-bag-shopping mx-4 text-[1.1em] "></i></button></Link>
            <p className='hover:underline cursor-pointer'><i class="fa-solid fa-cart-shopping"></i> Add to cart</p>
        </div>
      </div>
      <div>
        <p>Delivery Time: 3 to 4 days on your location</p>
      </div>
      </div>
    </div>
    <Review/>
    <RelatedProducts/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default BookCard
