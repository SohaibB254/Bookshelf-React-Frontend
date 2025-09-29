import React, { useState } from "react";
import AdminDbNav from "./AdminDbNav";
import booksData from "../../data/books";
import { Link } from "react-router";
import categoriesData from "../../data/categories";

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
    <>
      <AdminDbNav />
    <div className="flex font-inter w-screen justify-center mt-8">
      <div className=" sm:w-[80%] lg:w-[70%] mx-8">
      <h1 className="text-3xl my-3 text-center border-b">Welcome to Dashboard</h1>
        <h1 className="text-2xl font-semibold">All Books</h1>
        <ul className="border-b">
          {shownBooks.map((book) => {
            return (
              <div
                key={book.id}
                className=" px-4 py-3 flex justify-between border-b "
              >
                <li className=" cursor-pointer w-60 text-xl">{book.title}</li>
                <Link className="text-blue-500">View details</Link>
                <Link className="text-yellow-500">Edit book</Link>
                <Link className="text-red-500">Delete book</Link>
              </div>
            );
          })}

          <button
            onClick={handleShownBooks}
            className="px-4 my-4  hover:text-blue-500"
          >
            {booksToShow === booksData.length ? "Show less" : "Show more"}
          </button>
        </ul>

        <div id="addAbook">
          <div>
            <h1 className=" my-4 text-2xl font-semibold ">Add a book</h1>
            <form className="my-8 flex gap-1 flex-col sm:px-12">
              <input
                className="px-5 py-3 border border-black/30 outline-none"
                type="text"
                name=""
                placeholder="Book Title"
              />
              <input
                className="px-5 py-3 border  border-black/30 outline-none"
                type="text"
                name=""
                placeholder="Cover Photo Url"
              />
              <input
                className="px-5 py-3 border  border-black/30 outline-none"
                type="text"
                name=""
                placeholder="Author"
              />
              <input
                className="px-5 py-3 border  border-black/30 outline-none"
                type="text"
                name=""
                placeholder="Price"
              />
              <input
                className="px-5 py-3 border  border-black/30 outline-none"
                type="text"
                name=""
                placeholder="Discount %"
              />
              <select
                className="px-5 py-3 border  border-black/30 outline-none"
                type="text"
                name=""
                placeholder="Category"
              >
                {categoriesData.map((cat, idx) => {
                  return <option value="Fantasy">{cat.name}</option>;
                })}
              </select>
              <button className="u-btn">Add Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ManageBooks;
