import React, { useRef, useState } from 'react';

import bookReviews from '../data/reviews';

const Review = ()=>{
    const [reviewCount, setReviewCount] = useState(3)
    const [showAll, setShowAll] = useState(false)
    const showMoreReviews = ()=>{
        if(reviewCount < bookReviews.length){
            setReviewCount(reviewCount+3);
            setShowAll(false)
        }else{
            setReviewCount(reviewCount-3);
            setShowAll(true)
        }
    }
    const reviews = bookReviews.slice(0,reviewCount)
    return (
        <div>
            <div id='ReviewContainer' className='text-[30px] px-20 py-10'>
             <h1 className='font-semibold text-[1.3em] mb-10'>Reviews</h1>
             {
                reviews.map((elm, idx)=>{
                    return(
                        <div key={idx} className='text-[0.5em] my-10 border-b flex flex-col gap-3 border-b-black'>
                <p className='font-semibold border-b'>{elm.username}</p>
                <p className='w-[50%]  border-b'>{elm.message}</p>
                <div className='flex gap-5 text-gray-500'>
                <p>Rating:  <span>{elm.rating}</span></p>
                <p>Review Date: {elm.reviewDate}</p>
                <p><i className="fa-solid fa-thumbs-up cursor-pointer"></i>: {elm.likes}</p>
                </div>
            </div>
                    )
                })
             }
         
        </div>
        <button onClick={showMoreReviews} className='text-center hover:underline px-20'>{showAll? 'Show Less': 'Show More'}</button>
        </div>

    )
}
export default Review;