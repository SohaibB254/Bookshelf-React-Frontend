import React, { useState } from "react";
import bookReviews from "../data/reviews";

const Review = () => {
  const [reviewCount, setReviewCount] = useState(3);

  const showMoreReviews = () => {
    if (reviewCount < bookReviews.length) {
      // show more
      setReviewCount((prev) => Math.min(prev + 3, bookReviews.length));
    } else {
      // reset to 3 when "Show Less" is clicked
      setReviewCount(3);
    }
  };

  const reviews = bookReviews.slice(0, reviewCount);

  return (
    <div>
      <div
        id="ReviewContainer"
        className="text-[30px] px-8 sm:px-12 py-2 dark:text-gray-400"
      >
        <h1 className="font-semibold dark:text-[var(--lighter)] sm:text-3xl text-xl text-[var(--darker)] mb-10">
          Reviews
        </h1>
        {reviews.map((elm, idx) => (
          <div
            key={idx}
            className="text-[0.5em] my-4 sm:my-10 border-b flex flex-col gap-3 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 ">
              <div className="w-10 h-10 bg-gray-400 overflow-hidden rounded-full">
                <img className="object-cover" src={elm.image} alt="" />
              </div>{" "}
              <p className="font-semibold border-b">{elm.username}</p>
              <p className="text-gray-500"> {elm.reviewDate}</p>
            </div>
            <p>{elm.message}</p>
            <div className="flex gap-5 text-gray-500">
              <p>
                Rating:{" "}
                <span className="text-yellow-500 font-bold">{elm.rating}</span>
              </p>

              <p>
                <i className="fa-solid fa-thumbs-up cursor-pointer text-blue-500"></i>
                : {elm.likes}
              </p>
              <p className="cursor-pointer dark:text-gray-300 text-black">
                Reply
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={showMoreReviews}
        className="text-center hover:underline px-8 dark:text-gray-300 sm:px-12"
      >
        {reviewCount < bookReviews.length ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default Review;
