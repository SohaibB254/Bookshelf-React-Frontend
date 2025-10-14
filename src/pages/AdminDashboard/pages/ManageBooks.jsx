import React, { useState } from "react";
import booksData from "../../../data/books";
import { Link } from "react-router";
import categoriesData from "../../../data/categories";

const ManageBooks = () => {
  const [booksToShow, setBooksToShow] = useState(3);
  const shownBooks = booksData.slice(0, booksToShow);
  const handleShownBooks = () => {
    if (shownBooks.length < booksData.length) {
      setBooksToShow(booksData.length);
    } else {
      setBooksToShow(3);
    }
  };
  return (

     <div className="flex font-inter flex-1 mt-8">
          <div className=" w-full  px-4 dark:text-gray-300 sm:px-12 ">
            <h1 className="sm:text-2xl text-base  dark:text-[var(--lighter)] text-[var(--darker)] font-semibold">All Books</h1>
            <ul className="">
              {shownBooks.map((book) => {
                return (
                  <div
                    key={book.id}
                    className=" sm:px-4 py-3 flex justify-between sm:text-base text-xs dark:border-gray-800 border-b "
                  >
                    <li className=" cursor-pointer  truncate w-24 sm:w-60 ">
                      {book.title}
                    </li>
                    <Link className="text-blue-500">View details</Link>
                    <Link className="text-yellow-500">Edit book</Link>
                    <Link className="text-red-500">Delete book</Link>
                  </div>
                );
              })}

              <button
                onClick={handleShownBooks}
                className="sm:px-4 my-4 sm:text-base text-xs  hover:text-blue-500"
              >
                {booksToShow === booksData.length ? "Show less" : "Show more"}
              </button>
            </ul>

            <div id="addAbook">
              <div>
                <h1 className=" my-4 sm:text-2xl text-base  dark:text-[var(--lighter)] text-[var(--darker)] font-semibold ">Add a book</h1>
                <form className="my-8 flex gap-1 flex-col sm:px-4">
                  <input
                    className="px-5 py-3 border dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="Book Title"
                  />
                  <input
                    className="px-5 py-3 border  dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="Cover Photo Url"
                  />
                  <input
                    className="px-5 py-3 border  dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="Author"
                  />
                  <input
                    className="px-5 py-3 border  dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="Price"
                  />
                  <input
                    className="px-5 py-3 border  dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="Discount %"
                  />
                  <input
                    className="px-5 py-3 border  dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="ISBN"
                  />
                  <select
                    className="px-5 py-3 border  dark:border-gray-800 rounded dark:bg-gray-900 outline-none"
                    type="text"
                    name=""
                    placeholder="Category"
                  >
                    {categoriesData.map((cat, idx) => {
                      return <option key={idx} value="Fantasy">{cat.name}</option>;
                    })}
                  </select>
                  <button className="u-btn">Add Book</button>
                </form>
              </div>
            </div>
          </div>
     </div>

  );
};

export default ManageBooks;
