import React from "react";

const Paginations = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex gap-2 mt-12 w-screen justify-center">
      {pages.map((page, idx) => {
        return (
          <button
            className={`h-10 w-10 bg-white border rounded text-[10px]  text-black font-sans${
              page == currentPage ? " pageMoveBtn " : ""
            }`}
            onClick={() => setCurrentPage(page)}
            key={idx}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginations;
