import React from "react";

const Services =()=>{
    return(
        <div className=" text-[32px] my-12">
            <h1 className="text-center text-[1.3em]  font-semibold">Why Choose Us?</h1> 
            <div id="servicesContainer" className="bg-gray-950 px-20 py-12 text-white mt-10 flex flex-col gap-8">
                <details>
               <summary className="cursor-pointer w-80  transition hover:text-green-500" >Fast Delivery</summary>
               <p className="text-[0.6em] transition w-[60%]">We know your time is valuable. That’s why we offer fast and reliable delivery services across the country. Most orders are processed within 24 hours and delivered within 2–3 business days. Whether you're ordering for yourself or as a gift, we make sure your books arrive quickly and in perfect condition.</p>
                </details>
                <details>
               <summary  className="cursor-pointer w-80 transition hover:text-green-500">Affordable Plans</summary>
               <p className="text-[0.6em] w-[60%]">Enjoy great reads without breaking the bank. Our affordable pricing plans are designed to give you the best value, whether you're buying one book or building a library. With regular discounts, bundle deals, and student-friendly offers, reading more has never been easier—or more budget-friendly.</p>
                </details>
                <details>
               <summary  className="cursor-pointer w-80 transition hover:text-green-500">30 Days Returns</summary>
               <p className="text-[0.6em] w-[60%]">Shop with confidence. If you're not completely satisfied with your purchase, we offer a hassle-free 30-day return policy. Whether the book wasn’t what you expected or you changed your mind, simply return it in its original condition and get a full refund or exchange—no questions asked.</p>
                </details>
                <details>
               <summary  className="cursor-pointer w-80 transition hover:text-green-500">Secure Payments</summary>
               <p className="text-[0.6em] w-[60%]">Your privacy and security are our top priority. All payments are processed through secure, encrypted gateways to ensure your personal and financial data stays protected. Choose from multiple trusted payment options and check out with peace of mind.</p>
                </details>
            </div>

        </div>
    )
}

export default Services;
