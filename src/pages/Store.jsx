import React, { useState } from 'react'
import booksData from '../data/books'
import TrendingNow from '../components/TrendingNow'
import OnSale from '../components/OnSale'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Link } from 'react-router'

const Store = () => {
  const [filteredItems, setFilteredItems] = useState('');
  const [searchQuery,setSearchQuery] = useState('');
  const [itemsCount, setItemsCount] = useState(6)
  const dislpayedItems = booksData.slice(0, itemsCount)

  return (
    <>
    <div id='storeContainer' className='p-12'>
        <div id="storeSearchBox" className='flex  items-center justify-center pt-12'>
        <input  className='w-[40vw] border rounded-sm border-black p-3  ' type="text"  name="" id="storeSearch" placeholder='Search by Name or Category' />
        </div>
        <div id='storeItemsContainer' className='flex gap-[0.5rem] py-8 flex-wrap'>
          {
            dislpayedItems.map((elm, idx)=> {
              return <div key={idx} className='h-auto w-[15vw] px-4 border shadow text-[16px]'>
                <img className='w-[40vw]' src={elm.cover_photo} alt="" />
                   <h1 className='italic text-gray-500'>by: {elm.author}</h1>
                   <p>{elm.length}</p>
                   <p>Publihed on: {elm.date_published}</p>
                   <div className='flex justify-between mt-4 ]'>
                   <Link to='/checkout' className='hover:underline'>Purchase</Link>
                   <button className='hover:underline'>Read Now</button>
                   </div>
                     </div>

            })
          }
        </div>
          <div className='flex gap-2 justify-center'>
          <button disabled={itemsCount >= booksData.length} onClick={()=>setItemsCount(itemsCount+6)} className='hover:underline load-data-btn   p-2'>Load More</button>
          <button disabled={itemsCount=== 6} onClick={()=>setItemsCount(itemsCount-6)} className='hover:underline load-data-btn   p-2'>Show Less</button>
          </div>
    </div>
    <TrendingNow/>
    <OnSale/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Store
