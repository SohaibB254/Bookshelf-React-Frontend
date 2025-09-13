import React, { useState } from 'react'
import { Link } from 'react-router'
import book from '../assets/book.jpg'
import RelatedProducts from './RelatedProducts';
import Review from './Review';
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import { useCheckout } from '../context/CheckoutContext';


const BookCard = () => {
    const [qtyCount, setQtyCount] = useState(1);
    const {checkoutItem} = useCheckout()
    const handleQtyIncrease = ()=>{
        setQtyCount(prev => prev + 1)
    }
    const handleQtyDecrease = ()=>{
        setQtyCount(prev => Math.max(1, prev -1) )
    }
  return (
    <>
    <div className='border font-sans flex flex-col sm:flex-row
       w-[100%] sm:gap-20 mt-10 text-[24px] sm:p-12 p-8'>
      <div>
        <img className='sm:w-[30vw] w-full cursor-pointer' src={checkoutItem.cover_photo} alt="" />
      </div>
      <div className='text-[0.8em] w-full '>
        <div className=''><h1 className='sm:text-[2.25em] text-[1.5em] font-semibold'>{checkoutItem.title}</h1>
        <h1 className='font-bold text-[1.5em]'><span className='text-green-600'>{checkoutItem.price}</span></h1></div>
        <div className='flex flex-col text-[0.8em]'>
            <span id='reviewStars'>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                  5/5
            </span>
            <p className='text-gray-500 italic'>Author: {checkoutItem.author}</p>
        </div>
        <div className='text-[1em] flex flex-col gap-1 sm:mt-2'>
        <p>Total sold: 389</p>
        <p className='text-gray-700'>Date Published: {checkoutItem.date_published}</p>
        <p className='text-gray-700'>Category: {checkoutItem.category}</p>
        <p className='text-gray-700'>Languages: English, French, Korean</p>
        <p className='text-gray-700'>Book Length: {checkoutItem.length}</p>

        </div>
      <div className="Book-card-btn flex flex-col  mt-3 sm:mt-10 w-full">
        <div className='flex text-[0.8em] gap-10 items-center w-full'>
        <span className='border border-black text-[1.5em] w-44   flex justify-center py-2 px-3 gap-3'><button  disabled={qtyCount === 1}
  style={{ opacity: qtyCount === 1 ? 0.5 : 1}} onClick={handleQtyDecrease} className=' font-semibold'>-</button> <span>{qtyCount}</span> <button onClick={handleQtyIncrease} className=' font-semibold'>+</button></span>
            <p className='hover:underline cursor-pointer'><i class="fa-solid fa-share"></i> Share</p>
        </div>
        <div className='text-[0.8em] flex gap-10 items-center '>
       <Link to='/checkout'> <button className='bg-black my-1  w-44 text-base text-white px-3 py-3 hover:underline'>Checkout <i className="fa-solid fa-bag-shopping mx-4 text-[1.1em] "></i></button></Link>
            <p className='hover:underline cursor-pointer'><i class="fa-solid fa-cart-shopping"></i> Add to cart</p>
        </div>
      </div>
      <div className='mt-3'>
        <p>Delivery Time <i className="fa-solid fa-truck-fast"></i> : 3 to 4 days on your location</p>
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
