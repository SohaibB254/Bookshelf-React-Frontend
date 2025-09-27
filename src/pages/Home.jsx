import React, { useRef } from 'react'
import PopularCategories from '../components/PopularCategories'
import TrendingNow from '../components/TrendingNow'
import OnSale from '../components/OnSale'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import LatestReleases from '../components/LatestReleases'
import { Link } from 'react-router'
import Ad from '../components/Ad'
import ChatWidget from '../components/Chatwidget'
const Home = () => {
  return (
    <>
      <div id='Home' className=' w-screen flex-col sm:flex-row flex font-sans   sm:items-center text-white h-[90vh]'>
        <div className='h-auto w-screen pt-10 sm:pt-0 sm:w-[50vw]  flex
       flex-col items-center'>
        {/* Home left */}
          <div className='w-[100%] px-10 sm:pl-20 h-[70%] '>
            <h1 id='TitleText' className='sm:text-[46px] md:text-[76px] text-[36px] text-center sm:text-left mt-10 sm:mt-0 font-merri  font-bold fade-elm'>An Online Library <br />And<span className='text-[#24BF6C]'> Book Store</span> </h1>
            <p className='font-inter mt-6 text-center sm:text-left fade-elm'>Explore worlds from <strong>millions</strong> of authors across every genre imaginable <br /><span className='italic font-inter hidden sm:block'>Epic tales, self-help gems, and timeless classics</span> </p>
            <div className='flex sm:flex-row flex-col gap-2 mt-12 sm:mt-8 move-elm-ltr self-start'>
              <Link to={'/library'}><button className='u-btn border border-[#24BF6C]  sm:rounded-sm rounded-md w-full'>Start Reading</button></Link>
              <Link to='/store/all'><button className='u-btn3 sm:rounded-sm rounded-md w-full'>Browse Books</button></Link>
            </div>
          </div>
        </div>
        <div className='flex items-end sm:justify-end sm:w-[50vw] sm:h-full  h-[50%]'>
          <ul className='flex sm:flex-row sm:justify-end  w-full justify-center  sm:mr-10 mb-4 gap-8 sm:gap-5'>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-instagram"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-youtube"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-facebook-f"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-twitter"></i>
            <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-pinterest-p"></i>
          </ul>
        </div>
      </div>
      <ChatWidget/>
      <PopularCategories />
      <Ad />
      <OnSale />
      <LatestReleases />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
