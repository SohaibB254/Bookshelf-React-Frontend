import React, { useState } from 'react'
import booksData from '../data/books'
import { Link, Routes, useParams, Route } from 'react-router'
import Paginations from '../components/Paginations';
import Footer from '../components/Footer';
import TrendingNow from '../components/TrendingNow';
import { useCheckout } from '../context/CheckoutContext';



const Categories = () => {
  const { catName } = useParams();
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const {addToCheckout} = useCheckout()

  const lastPostIndex = currentPage * postsPerPage;
  const fistPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = booksData.slice(fistPostIndex, lastPostIndex)
  return (
    <>
    <div className='w-screen  '>
      <h1 className='font-semibold text-[30px] mt-4 ml-8 sm:ml-12'>{catName} Books</h1>
      <div id='bookCardContainer' className=' sm:mt-12 mt-4  font-poppins flex gap-2 sm:gap-5  flex-wrap  justify-normal sm:ml-12 sm:px-0 px-6 items-center  w-screen  h-auto' >
        {
          currentPosts.map((elm, idx) => {
            return <div id='bookCard' key={idx} className='flex   items-center sm:h-auto h-[11em]  flex-col w-[5em] sm:w-[210px] p-1 border border-black/30 sm:text-[25px]'>
              <Link onClick={()=>addToCheckout(elm)} to='/bookCard'>
              <img className='sm:w-[150px] w-[70px] h-[100px] sm:h-[200px]' src={elm.cover_photo} alt="" />
              </Link>
              <h1 className='text-[0.7em] font-semibold tracking-tighter'>{elm.title}</h1>
                <h1 className='italic text-[0.6em] text-gray-500 hidden sm:inline-block  '>by: {elm.author}</h1>
                   <p className=' text-[0.6em] hidden sm:inline-block'>{elm.length}</p>
                   <p  className=' text-[0.6em] hidden sm:inline-block' >Publihed on: {elm.date_published}</p>
                   <p className='text-[0.6em]'>Price: <span className='text-green-500 font-semibold'>{elm.price}</span></p>
              <div id='bookCardBtns' className='hidden  w-full rounded-sm gap-2 sm:flex'>
                <Link to={`/checkout`} onClick={()=>addToCheckout(elm)} className='text-[0.6em] hover:bg-green-500 hover:text-white/80 transition p-2 rounded-sm '>Purchase</Link>
                <Link className='text-[0.6em]  hover:bg-green-500 hover:text-white/80 transition p-2 rounded-sm '>Read Online</Link>

              </div>
            </div>

          })
        }

      </div>
      <Paginations
        totalPosts={booksData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}

      />
    </div>
    <TrendingNow/>
    <Footer/>
    </>
  )
}

export default Categories
