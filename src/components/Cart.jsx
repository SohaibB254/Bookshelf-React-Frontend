import React from 'react'
import { Link } from 'react-router'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
import { useCheckout } from '../context/CheckoutContext'

const Cart = () => {
  const { handleTotalCheckout } = useCheckout()
  const { itemsInCart, setItemsInCart } = useCart()
  const cartItemsCount = itemsInCart.length;
  // Cart Functions
  const handleRemoveItem = (id) => {
    setItemsInCart(prev => prev.filter(item => item.id !== id))
  }
  const getTotalItems = () => {
    return itemsInCart.reduce((total, item) => total + item.quantity, 0)
  }
  const getTotalPrice = () => {
    return itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
  const getTotalDelivery = () => {
    return itemsInCart.reduce((total, item) => total + item.delivery, 0)
  }
  const totalCheckout = () => {
    return getTotalDelivery() + getTotalPrice();
  }

  const handleQuantityChange = (id, action) => {
    setItemsInCart(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) } : item))
  }
  return (
    <>
      <div id='cartContainer' className='text-[32px] px-4 lg:px-12 pt-16 font-inter'>
        <h1 className='sm:text-3xl text-xl dark:text-[var(--lighter)] text-[var(--darker)] text-center mb-10' >Your Cart ({cartItemsCount} items) <i className="fa-solid fa-cart-shopping cursor-pointer transition hover:text-green-500"></i></h1>
        <div id='cartItemContainer' className='w-full h-auto dark:text-gray-300'>
          <div >
            {
              itemsInCart.length === 0 ? (
                <div className="text-center py-20 text-xl text-gray-500">
                  Your cart is empty. <Link className='text-blue-500' to="/store">Go shopping</Link>
                </div>
              ) :
                itemsInCart.map((elm, idx) => {
                  return <div key={idx} className='flex border-b dark:border-gray-800  '>
                    <div id='cartItem' className='flex  w-full lg:px-10 items-center    py-2 gap-2 lg:gap-4 text-[0.5em]'>

                      <div className='bg-gray-400 flex-shrink-0 border border-black/50'>
                        <img className='w-[80px] ' src={elm.cover_photo} alt="" />
                      </div>
                      <div className='flex lg:items-center w-full flex-col lg:flex-row  lg:justify-between '>
                        <div className='lg:w-[35%]'>
                          <div className='flex flex-col gap-1 justify-center'>
                            <h1 className='lg:text-3xl   w-full truncate font-semibold text-[var(--baseColor)] tracking-tight'>{elm.title}</h1>
                            <p className='italic'>by: {elm.author}</p>
                            <p className={`${elm.sale_percent === 0 ? 'hidden' : ''}`}><span className='text-red-500 sm:text-base text-xs font-semibold'>{elm.sale_percent}% OFF</span></p>
                          </div>
                        </div>
                        <div className='w-full flex  flex-row items-center justify-between'>
                            {/* Book Details */}
                          <div className='  lg:w-32  '>
                            <p>Rs: {elm.price - (elm.price * elm.sale_percent) / 100} <span className={`${elm.sale_percent === 0 ? 'hidden' : ''} text-zinc-500 italic line-through`}>{elm.price}</span></p>
                          </div>
                          <div className=' text-center hidden lg:flex    lg:w-32 '>
                            <p>Delivery Rs: {elm.delivery}</p>
                          </div>
                          {/* Quantity Change Button */}
                          <div className='text-center lg:w-16  '>
                            <span className=' text-[1em]  flex justify-center gap-2 px-3'>
                              <button onClick={() => handleQuantityChange(elm.id, 'decrease')} className=' font-semibold'>-</button>
                              <span>{elm.quantity}</span>
                              <button onClick={() => handleQuantityChange(elm.id, 'increase')} className=' font-semibold'>+</button>
                            </span>
                          </div>
                            {/* Delete Item Icon */}
                    <div className='flex md:items-center lg:self-auto self-end  lg:justify-center pb-2'>
                      <button onClick={() => handleRemoveItem(elm.id)} className='lg:h-[50px] u-btn2 sm:text-2xl text-xl lg:w-50 w-10'><i className="fa-solid fa-trash" ></i></button>
                    </div>
                        </div>

                      </div>
                    </div>

                  </div>
                })
            }
          </div>
        </div>
        {/* Order Overview */}
        <div className='flex justify-center'>
          <div id='totalCheckout' className={`${itemsInCart.length === 0 ? "hidden" : ""} bg-white dark:bg-inherit dark:text-gray-300 py-8 px-4 text-[0.5em]  flex flex-col gap-4 border  border-gray-700 rounded-md lg:w-[40vw] my-4 sm:my-10 `}>
            <h1 className='sm:text-[1.5em] text-xl font-semibold'>Order Overview</h1>
            <h1 className='border-b dark:border-gray-800  sm:py-2 flex justify-between'>Total: {getTotalPrice()}<span>Items: {getTotalItems()}</span></h1>
            <h1 className='border-b dark:border-gray-800  sm:py-2 flex justify-between'>Total Delivery: {getTotalDelivery()}</h1>
            <h1 className='border-b dark:border-gray-800  sm:py-2 flex justify-between'>Address: House 34, street 12, Garden Town <Link className='text-blue-500'>Change</Link></h1>
            <h1 className='flex justify-between'>Payment Method: Credit Card <Link className='text-blue-500'>Change</Link></h1>
            <Link to={'/total/3/checkout'} onClick={()=>handleTotalCheckout(getTotalItems(),getTotalPrice(),getTotalDelivery(),totalCheckout())}><button  className='u-btn rounded-sm'>Checkout: Rs {totalCheckout()}</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default React.memo(Cart)
