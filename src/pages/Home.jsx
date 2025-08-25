import React from 'react'
import PopularCategories from '../components/PopularCategories'
import TrendingNow from '../components/TrendingNow'
import OnSale from '../components/OnSale'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import LatestReleases from '../components/LatestReleases'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
    <div id='Home' className=' w-screen flex font-sans items-center text-white h-[90vh]'>
      <div className='h-auto w-[50vw] fade-elm flex
       flex-col items-center '>
        <div className='w-[100%] pl-20 h-[70%] '>
          <h1 id='TitleText' className='sm:text-[76px] font-merri  font-bold'>An Online Library <br/>And<span className='text-[#24BF6C]'> Book Store</span> </h1>
          <p className='font-inter mt-6'>Explore worlds from <strong>millions</strong> of authors across every genre imaginable <br/><span className='italic font-inter'>Epic tales, self-help gems, and timeless classics</span> </p>
        <div className='flex gap-2 mt-8 self-start'>
          <button className='u-btn rounded-sm  '>Start Reading</button>
         <Link to='/store'><button className='u-btn rounded-sm '>Browse Books</button></Link>
        </div>
        </div>
      </div>
        <div className='flex items-end justify-end w-[50vw] h-full pb-4'>
            <ul className='flex gap-5'>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-instagram"></i>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-youtube"></i>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-facebook-f"></i>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-twitter"></i>
                <i class=" cursor-pointer hover:scale-110 transition-all fa-brands fa-pinterest-p"></i>
            </ul>
        </div>
    </div>

    <PopularCategories/>
    <TrendingNow/>
    <OnSale/>
    <LatestReleases/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Home
