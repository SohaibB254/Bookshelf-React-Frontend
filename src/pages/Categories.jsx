import React, { useState } from 'react'
import booksData from '../data/books'
import { Link, Routes, useParams, Route } from 'react-router'
import Paginations from '../components/Paginations';
import Footer from '../components/Footer';
import TrendingNow from '../components/TrendingNow';


const Categories = () => {
  const { catName } = useParams();
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const lastPostIndex = currentPage * postsPerPage;
  const fistPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = booksData.slice(fistPostIndex, lastPostIndex)
  return (
    <>
    <div className='w-screen  sm:text-[30px] '>
      <h1 className='font-semibold mt-4 ml-12'>{catName} Books</h1>
      <div id='bookCardContainer' className=' mt-12  flex gap-5 flex-wrap items-center sm:ml-20  w-screen  h-auto' >
        {
          currentPosts.map((elm, idx) => {
            return <div id='bookCard' key={idx} className='flex items-center px-3  flex-col w-[250px] sm:text-[25px]'>
              <img className='w-[150px] h-[200px]' src={elm.cover_photo} alt="" />
              <h1 className='text-[0.8em] font-semibold'>{elm.title}</h1>
              <p className='text-[0.5em]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur qui, at odio minima vel neque repudiandae nostrum nulla maxime!</p>
              <div id='bookCardBtns'>
                <Link to={`/bookcard`} className='text-[0.6em] mx-3 underline'>Purchase</Link>
                <Link className='text-[0.6em] mx-3 underline'>Read Online</Link>

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
