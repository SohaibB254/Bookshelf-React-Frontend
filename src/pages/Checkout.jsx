import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useCheckout } from '../context/CheckoutContext'



const Checkout = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAddress, setShowAddress] = useState(true);
  const {checkoutItem} = useCheckout()

 const handleDeliveryInfo = ()=>{
   setShowAddress(prev => !prev)
 }

  const handleConfirmPayment = ()=>{
    setShowConfirmation(true)
  }
  return (
    <>
    <div className=' w-screen relative  font-inter  px-[5vw] '>
      <div id='Checkout' className={`flex flex-wrap sm:flex-nowrap checkout-page ${showConfirmation ? "blurred" : ""} w-[90vw] gap-1 mt-4`}>
        <div className='w-[90vw]'>
          <div id='OrderReview' className='border w-auto pl-4 h-[30vh] '>
            <h1 className='text-[20px] sm:text-[24px]'> Order Summary</h1>
            <div className='flex gap-3 mt-3'>
              <div id='OrderImg'>
                <img className='w-[100px]' src={checkoutItem.cover_photo} alt="" />
              </div>
              <div id='OrderDetail' className='flex justify-between px-4 mx-4 w-full '>
                <div>
                  <h1 className='text-[20px] font-bold'>{checkoutItem.title}</h1>
                  <p className='text-gray-500 italic'>Author: {checkoutItem.author}</p>
                </div>
                <div className=' flex flex-col'>
                  <span>Price: <span className='text-green-500'> {checkoutItem.price}</span></span>
                  <span>Delievry: {checkoutItem.delivery}</span>
                  <span>SubTotal: {checkoutItem.price + checkoutItem.delivery }</span>
                  <span>Quantity: {checkoutItem.quantity}</span>
                </div>
              </div>
            </div>

          </div>
          <div id='OrderDelievryDetails' className='border  px-4 pt-3'>
            <div className='flex w-full justify-between pr-4'>
              <h1 className=' text-[20px] sm:text-[24px]'>Delivery Details</h1>
              <div className='flex items-center gap-2'>
                <input onClick={handleDeliveryInfo} id='saveDetailCheck' className='w-4 h-4 text-center' type="checkbox" />
                <span>Use Saved Details</span></div>

            </div>
            <form className={`${showAddress?'flex':'hidden'} flex-col gap-3 mt-3`}>
              <input className='w-80 p-2 rounded-sm' type="text" name="name" placeholder='Full Name' />
              <input className='w-[80%] p-2 rounded-sm' type="text" name="name" placeholder='Address' />
              <div className=''>
                <input className='w-80 my-3 mr-4 p-2 rounded-sm' type="text" name="city" placeholder='City/Region' />
                <input className='w-80 my-3 mr-4 p-2 rounded-sm' type="number" name="zipCode" placeholder='Zip Code' />
                <input className='w-80 my-3 mr-4 p-2 rounded-sm' type="email" name="email" placeholder='Email' />
                <input className='w-80 my-3 mr-4 p-2 rounded-sm' type="text" name="phone" placeholder='Phone' />
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                  <input className='w-4 h-4 text-center' type="checkbox" />
                  <span>Save Details</span></div>
                <button className='u-btn w-40 rounded-sm'>Confirm Details</button>
              </div></form>
          </div>
        </div>
        <div id='OrderPaymentDetails' className='border  sm:text-[24px] px-4 w-[50%] '>
          <div>
            <h1 >Got a Coupon Code?</h1>
            <div className='flex items-center text-base border-b'>
              <input className='w-80 h-10 my-3 p-2  rounded-r-none rounded-sm' type="text" name="code" placeholder='Coupon Code' />
              <button className='u-btn h-10 rounded-l-none  rounded-sm'>Apply</button>
            </div>
          </div>
          <div className='text-base mt-12'>
            <h1 className='text-[20px] mb-2 sm:text-[24px]'>Payment Details</h1>
            <p className='font-semibold'>Choose Payment Method</p>
            <div className='flex gap-4 mt-4'>
              <div className='flex items-center gap-2'>
                <input className='w-4 h-4 text-center' name='paymentMethod' type="radio" />
                <span>Online Payment</span>
                <input className='w-4 h-4 text-center' name='paymentMethod' type="radio" />
                <span>COD</span>
              </div>
            </div>
            <div className='flex flex-col mt-4 gap-3'>
              <p className='font-semibold'>Choose online payment option</p>
              <label className='flex items-center gap-2' htmlFor="onlinePaymentOption">
                <input className='w-4 h-4 text-center' name='onlinePaymentOption' type="radio" />
                <span>Paypal</span>
              </label>
              <label className='flex items-center gap-2' htmlFor="onlinePaymentOption">
                <input className='w-4 h-4 text-center' name='onlinePaymentOption' type="radio" />
                <span>Apple Pay</span>
              </label>
              <label className='flex items-center gap-2' htmlFor="onlinePaymentOption">
                <input className='w-4 h-4 text-center' name='onlinePaymentOption' type="radio" />
                <span>Mobile Account</span>
              </label>
              <label className='flex items-center gap-2' htmlFor="onlinePaymentOption">
                <input className='w-4 h-4 text-center' name='onlinePaymentOption' type="radio" />
                <span>Debit/Credit Card</span>
              </label>
            </div>
            <div>
              <div className='flex flex-col gap-2 mt-3 pb-4'>
                <input className='w-80 my-1 mr-4 p-2 rounded-sm' type="number" name="cardNumber" placeholder='Card number' />
                <input className='w-80 my-1 mr-4 p-2 rounded-sm' type="date" name="cardExpDate" placeholder='Expiry MM/YY e.g, 07/35 ' />
                <input className='w-80 my-1 mr-4 p-2 rounded-sm' type="number" name="cardCv" placeholder='Security Number e.g, 054' />
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-2'>
                    <input className='w-4 h-4 text-center' type="checkbox" />
                    <span>Save Details</span></div>
                 <button onClick={handleConfirmPayment} className='u-btn text-center rounded-sm'>Confirm Payment</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    {showConfirmation && (
      <div className='confirmation-modal'>
              <div className='w-[450px] flex flex-col gap-3 text-[26px] items-center py-10 h-auto bg-white'>
            <h1 className='font-semibold'>Congratulations!🥳</h1>
            <p className='text-[0.6em]'>Your order is successfully placed</p>
            <i className="fa-solid fa-circle-check text-[54px] animate-pulse text-[#4fbe81]" style={{color:'#63E6BE;'}}></i>
            <Link to='/store/all' className='hover:underline text-[0.5em]'>Continue Shopping!</Link>
          </div>
      </div>


    )}
  </>
  )
}

export default Checkout
