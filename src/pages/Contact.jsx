import React from 'react'
import Services from '../components/Services'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <div className='flex flex-col items-center border pb-12 '>
      <h1 className=' text-[30px] sm:text-[50px] font-inter  my-5'>Lets Talk!</h1>
      <div id='formContainer'>
        <form className='flex flex-col gap-4  py-4 px-6 sm:p-12 w-screen sm:w-[30vw] border rounded-md shadow-md shadow-gray-500 border-gray-200'>
          <input className='border border-gray-400 rounded-sm  transition  p-4 ' type="text" name="username" id="username" placeholder='Your Name' />
          <input className='border border-gray-400 rounded-sm  transition  p-4 ' type="email" name="email" id="email" placeholder='Your Email' />
          <textarea className='w-full border-gray-400 rounded-sm  transition border p-4  h-[20vh] sm:h-[30vh]' name="message" id="message" placeholder='Write your message/suggestion/complain'></textarea>
          <input className='u-btn cursor-pointer' type="submit" value="Send Message" />
        </form>
      </div>
    </div>
    <Services/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Contact
