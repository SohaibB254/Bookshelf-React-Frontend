import React, { useState } from 'react'
import booksData from '../data/books'
import TrendingNow from '../components/TrendingNow'
import OnSale from '../components/OnSale'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Link } from 'react-router'
import { useCart } from '../context/CartContext'
import { useLibrary } from '../context/LibraryContext'
import { useCheckout } from '../context/CheckoutContext'
import Popup from '../components/Popup'

const Store = () => {
  const [itemsCount, setItemsCount] = useState(6)
  const [popView, setPopView] = useState('hidden')
  const [popType, setPopType] = useState('')
  const [popBg, setPopBg] = useState('');
  const dislpayItems = booksData.slice(0, itemsCount);
  const [dislpayedItems,setDisplayedItems] = useState(dislpayItems)
  const { addToLibrary,bookExistLib } = useLibrary()
  const { addToCart } = useCart()
  const { addToCheckout } = useCheckout();

  const handleSearch = (searchValue)=>{
    const value = searchValue.toLowerCase().trim();
    if(value){
      const filteredItems = booksData.filter(item =>
      item.category.toLowerCase().includes(value) ||
      item.title.toLowerCase().includes(value));
      setDisplayedItems(filteredItems);
    }else{
      setDisplayedItems(dislpayItems)
    }
  }
  const handlePopupLib = () => {
    setPopView('block');
    setPopType(bookExistLib);
    setPopBg('bg-blue-400');
    setTimeout(() => {
      setPopView('hidden')
    }, 2500);
  }
  const handlePopupCart = () => {
    setPopView('block');
    setPopType('Book added to Cart');
    setPopBg('bg-green-400');
    setTimeout(() => {
      setPopView('hidden')
    }, 2500);
  }
  return (
    <>
      <Popup display={popView} popType={popType} popBg={popBg} />

      <div id='storeContainer' className='sm:p-12 p-4 font-poppins'>
        <div id="storeSearchBox" className='flex  items-center justify-center py-3 px-3  sm:pt-12'>
          <input className='sm:w-[40vw] w-full border rounded-sm border-black sm:p-3 py-1 px-2'
           onChange={(e)=>handleSearch(e.target.value)}
           type="text"
           name="search"
           id="storeSearch"
          placeholder='Search by Name or Category' />
        </div>
        <div id='storeItemsContainer' className='flex gap-[0.5rem] py-8 justify-center sm:justify-normal flex-wrap'>
          {dislpayedItems.length >0?( dislpayedItems.map((elm, idx) => {
              return <div key={idx} className='h-auto   sm:w-[15vw] w-auto sm:px-4 py-2 flex flex-col border shadow text-[16px]'>

                <Link onClick={() => addToCheckout(elm)} to={'/bookCard'}>
                  <img className='sm:w-[40vw] w-[160px] sm:h-[40vh] cursor-pointer' src={elm.cover_photo} alt="" />
                </Link>
                <h1 className=' sm:text-[18px] font-semibold  tracking-tighter bg-gray-200 '>{elm.title}</h1>
                <h1 className='italic text-gray-500 hidden sm:inline-block  '>by: {elm.author}</h1>
                <p>Price: <span className='text-green-500 font-semibold'>{elm.price}</span></p>
                <div className=' hidden sm:flex flex-wrap justify-between mt-2 ]'>
                  <Link to='/checkout' onClick={() => addToCheckout(elm)} className='hover:underline'>Purchase</Link>
                  <button onClick={() => { addToCart(elm), handlePopupCart() }} className='hover:underline'>Add to cart</button>
                </div>
                <div className='w-full text-center self-end'>
                  <button onClick={() => { addToLibrary(elm), handlePopupLib() }} className='bg-green-500 w-full py-2 hover:text-white'>Add to Library</button>
                </div>
              </div>

            })):(    <p className="text-gray-500 text-lg font-semibold text-center w-full">No books found</p> )

          }
        </div>
        <div className='flex gap-2 justify-center sm:bg-transparent bg-green-500'>
          <button disabled={itemsCount >= booksData.length} onClick={() => setItemsCount(itemsCount + 6)} className='hover:underline load-data-btn   p-2'>Load More</button>
          <button disabled={itemsCount === 6} onClick={() => setItemsCount(itemsCount - 6)} className='hover:underline load-data-btn   p-2'>Show Less</button>
        </div>
      </div>
      <TrendingNow />
      <OnSale />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Store
