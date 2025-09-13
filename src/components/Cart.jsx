import React, { useState } from 'react'
import { Link } from 'react-router'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
const Cart = () => {
    const{itemsInCart, setItemsInCart } =useCart()
  const cartItemsCount = itemsInCart.length;
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
      <div id='cartContainer' className='text-[32px] px-12 pt-16 font-inter'>
        <h1 className='text-[1.2em] text-center mb-10' >Your Cart ({cartItemsCount} items) <i className="fa-solid fa-cart-shopping cursor-pointer transition hover:text-green-500"></i></h1>
        <div id='cartItemContainer' className='w-full h-auto'>
          <div className={`flex ${itemsInCart.length===0? "hidden ":""} w-full sm:gap-[10rem] sm:ml-8 text-[0.5em] px-10 border-b`}>
            <h1 className='w-[45%] '>Item</h1>
            <h1 className='w-[25%] '>Quantity</h1>
            <h1 className='w-[25%] '>Price (Rs)</h1>
            <h1 className='w-[25%] '>Delivery</h1>

          </div>
          <div className={` ${itemsInCart.length===0?"border-b-0":""} border-b`}>
            {
              itemsInCart.length === 0 ? (
                <div className="text-center py-20 text-xl text-gray-500">
                  Your cart is empty. <Link className='text-blue-500' to="/store">Go shopping</Link>
                </div>
              ):
              itemsInCart.map((elm, idx) => {
                return <div key={idx} className='flex border-b '>
               <div id='cartItem' className='flex   w-full px-10  py-2 gap-40 text-[0.5em]'>
              <div className='flex w-[45%] gap-3 '>
                <div className=''>
                  <img className='w-[80px]' src={elm.cover_photo} alt="" />
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='sm:text-[2em] font-semibold text-[#24BF6C]'>{elm.title}</h1>
                  <p>{elm.author}</p>
                </div>
              </div>
              <div className='text-center pt-10 w-[25%] '>
                <span className=' text-[1em] border flex justify-center gap-2'>
                  <button onClick={() => handleQuantityChange(elm.id, 'decrease')} className=' font-semibold'>-</button>
                  <span>{elm.quantity}</span>
                  <button onClick={() => handleQuantityChange(elm.id, 'increase')} className=' font-semibold'>+</button>
                </span>
              </div>
              <div className=' text-center pt-10 w-[25%] '>
                <p>{elm.price}</p>

              </div>
              <div className=' text-center pt-10 w-[25%] '>
                <p>{elm.delivery}</p>
              </div>

            </div>
              <div className='flex items-center justify-center'>
                <button onClick={() => handleRemoveItem(elm.id)} className='h-[50px] u-btn2 w-50'><i className="fa-solid fa-trash" style={{ color: "#cb3f10;" }}></i></button>
              </div></div>
              })
            }
          </div>
        </div>
        <div className='flex justify-center'>

          <div id='totalCheckout' className={`${itemsInCart.length===0? "hidden":""} bg-white py-8 px-4 text-[0.5em]  flex flex-col gap-4 border rounded-md w-[40vw] my-10 `}>
            <h1 className='text-[1.5em] font-semibold'>Order Overview</h1>
            <h1 className='border-b py-2 flex justify-between'>Total: {getTotalPrice()}<span>Items: {getTotalItems()}</span></h1>
            <h1 className='border-b py-2 flex justify-between'>Total Delivery: {getTotalDelivery()}</h1>
            <h1 className='border-b py-2 flex justify-between'>Address: House 34, street 12, Garden Town <Link className='text-blue-500'>Change</Link></h1>
            <h1 className='flex justify-between'>Payment Method: Credit Card <Link className='text-blue-500'>Change</Link></h1>
            <button className='u-btn rounded-sm'>Checkout: Rs {totalCheckout()}</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
