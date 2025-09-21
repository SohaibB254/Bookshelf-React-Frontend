import React from 'react'
import Services from '../components/Services'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col font-inter items-center h-full w-full relative border pb-12'>
        <div id='formContainer' className='flex flex-col items-center'>
          <form className='flex flex-col gap-2  py-4 px-6 sm:p-12 w-screen border rounded-md shadow-md shadow-gray-500 border-gray-200'>
            <h1 className='sm:text-3xl text-xl font-semibold'>Get in touch</h1>
            <input className='border border-gray-400 outline-none rounded-sm  transition  p-2 ' type="text" name="username" id="username" placeholder='Your Name' />
            <input className='border border-gray-400 outline-none rounded-sm  transition  p-2 ' type="email" name="email" id="email" placeholder='Your Email' />
            <textarea className='w-full border-gray-400 outline-none rounded-sm  transition border p-2  h-[20vh] sm:h-[30vh]' name="message" id="message" placeholder='Write your message/suggestion/complain'></textarea>
            <div className='text-red-500 sm:gap-4 flex sm:flex-row flex-col'>
              <h1 className='italic cursor-pointer'>bookshelf@gmail.com</h1>
              <h1 className='cursor-pointer'>+92 323 4353123</h1>
            </div>
            <input className='u-btn cursor-pointer w-fit rounded-sm' type="submit" value="Send Message" />
          </form>
        </div>


      </div>
      <Services />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Contact
