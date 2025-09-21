import { div } from "motion/react-client";
import React from "react";

const NewsLetter = ()=>{
    return (
            <div id="newsLetterContainer" className="sm:w-screen px-2 flex justify-center font-inter sm:p-10">
                <div id="newsLetter" className="border-2 flex flex-col items-center gap-3 my-10 border-gray-400 rounded-md  py-4 sm:py-12 px-4 sm:p-20 text-[30px]">
                    <h1 className="font-semibold sm:text-[1em] text-[0.7em]">Join our News letter</h1>
                    <p className="text-[0.5em]">Subscribe to our news letter now & Get  latest updates </p>
                    <div>
                    <input className='sm:w-80 h-10 my-3 px-4 border border-gray-300   text-[0.5em] rounded-r-none rounded-sm' type="text" id="newsLetterEmailInput" name="code" placeholder='Your Email' />
              <button className='u-btn h-10 rounded-l-none sm:text-[0.5em] text-[0.3em]  rounded-sm'>Subscribe</button>
                    </div>
                    </div>
            </div>
    )
}
export default NewsLetter