import React, { useState } from 'react'
import book3 from '../assets/book3.png'
import { Link } from 'react-router'
import Footer from './Footer'
const Cart = () => {
  const [cartItems, setCartItems] = useState(
    [
      {
        "id": 1,
        "bookName": "Atomic Habits",
        "author": "James Clear",
        "price": 1800,
        "delivery": 540,
        "total": 2340,
        "quantity": 1,
        "category": "Self-Help",
        "coverImage": "/images/atomic-habits.jpg"
      },
      {
        "id": 2,
        "bookName": "The Alchemist",
        "author": "Paulo Coelho",
        "price": 1200,
        "delivery": 360,
        "total": 1560,
        "quantity": 1,
        "category": "Fiction",
        "coverImage": "/images/the-alchemist.jpg"
      },
      {
        "id": 3,
        "bookName": "Deep Work",
        "author": "Cal Newport",
        "price": 1500,
        "delivery": 450,
        "total": 1950,
        "quantity": 1,
        "category": "Productivity",
        "coverImage": "/images/deep-work.jpg"
      },
    ])
  const cartItemsCount = cartItems.length;
  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }
  const getTotalDelivery = () => {
    return cartItems.reduce((total, item) => total + item.delivery, 0)
  }
  const totalCheckout = () => {
    return getTotalDelivery() + getTotalPrice();
  }

  const handleQuantityChange = (id, action) => {
    setCartItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) } : item))
  }
  return (
    <>
      <div id='cartContainer' className='text-[32px] px-12 pt-16 font-inter'>
        <h1 className='text-[1.2em] text-center mb-10' >Your Cart ({cartItemsCount} items) <i className="fa-solid fa-cart-shopping cursor-pointer transition hover:text-green-500"></i></h1>
        <div id='cartItemContainer' className='w-full h-auto'>
          <div className={`flex ${cartItems.length===0? "hidden ":""} w-full gap-[10rem] ml-8 text-[0.5em] px-10 border-b`}>
            <h1 className='w-[45%] '>Item</h1>
            <h1 className='w-[25%] '>Quantity</h1>
            <h1 className='w-[25%] '>Price (Rs)</h1>
            <h1 className='w-[25%] '>Delivery</h1>

          </div>
          <div className={` ${cartItems.length===0?"border-b-0":""} border-b`}>
            {
              cartItems.length === 0 ? (
                <div className="text-center py-20 text-xl text-gray-500">
                  Your cart is empty. <Link className='text-blue-500' to="/store">Go shopping</Link>
                </div>
              ):
              cartItems.map((elm, idx) => {
                return <div key={idx} className='flex border-b '> <div id='cartItem' className='flex   w-full px-10  py-2 gap-40 text-[0.5em]'>
              <div className='flex w-[45%] gap-3 '>
                <div className=''>
                  <img className='w-[80px]' src={book3} alt="" />
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='text-[2em] font-semibold text-[#24BF6C]'>{elm.bookName}</h1>
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
                <p>{elm.price * elm.quantity}</p>
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

          <div id='totalCheckout' className={`${cartItems.length===0? "hidden":""} bg-white py-8 px-4 text-[0.5em]  flex flex-col gap-4 border rounded-md w-[40vw] my-10 `}>
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
