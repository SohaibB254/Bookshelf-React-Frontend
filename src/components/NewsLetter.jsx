import { div } from "motion/react-client";
import React from "react";

const NewsLetter = ()=>{
    return (
            <div id="newsLetterContainer" className="w-screen flex justify-center p-10">
                <div id="newsLetter" className="border-2 flex flex-col items-center gap-3  border-gray-400 rounded-md py-12 p-24 text-[30px]">
                    <h1 className="font-semibold">Join our News letter</h1>
                    <p className="text-[0.5em]">Subscribe to our news letter now & Get  latest updates </p>
                    <div>
                    <input className='w-80 h-10 my-3 px-4 border border-gray-300   text-[0.5em] rounded-r-none rounded-sm' type="text" id="newsLetterEmailInput" name="code" placeholder='Your Email' />
              <button className='u-btn h-10 rounded-l-none text-[0.5em]  rounded-sm'>Subscribe</button>
                    </div>
                    </div>
            </div>
    )
}
export default NewsLetter