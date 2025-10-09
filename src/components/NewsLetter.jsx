import React from "react";

const NewsLetter = ()=>{
    return (
            <div id="newsLetterContainer" className="sm:w-screen px-2 dark:bg-gray-900 dark:text-gray-300  flex justify-center font-inter sm:p-10">
                <div id="newsLetter" className="flex flex-col items-center border dark:border-gray-800 gap-3 dark:shadow-gray-800 my-10 shadow-md rounded-md  py-4 sm:py-12 px-4 sm:p-20 text-[30px]">
                    <h1 className="font-semibold sm:text-3xl text-xl text-[var(--darker)] dark:text-[var(--lighter)]   ">Join our News letter</h1>
                    <p className="sm:text-[0.5em] text-base">Subscribe to our news letter now & Get  latest updates </p>
                    <div>
                    <input className='sm:w-80 dark:bg-gray-800 h-10 my-3 px-4 border dark:border-gray-800 outline-none   text-[0.5em]  rounded-sm' type="text" id="newsLetterEmailInput" name="code" placeholder='Your Email' />
              <button className='u-btn h-10  sm:text-[0.5em] text-[0.3em]  rounded-sm'>Subscribe</button>
                    </div>
                    </div>
            </div>
    )
}
export default NewsLetter