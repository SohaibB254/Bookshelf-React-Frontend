import React from "react";
import { BookCopy, Medal, Store } from "lucide-react";

const OurMission = () => {
  const missoin = [
    { title: "Best BookStore", icon: <BookCopy size={50} /> },
    { title: "Trusted Seller", icon: <Medal size={50} /> },
    { title: "Expand Store", icon: <Store size={50} /> },
  ];
  return (
    <div className="px-4 sm:px-12 py-20 gap-8 font-inter bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-[var(--darker)] dark:text-[var(--lighter)] sm:text-3xl font-semibold text-xl ">Our Mission</h1>
        <p className="text-zinc-400 text-sm sm:w-1/2 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni asperiores temporibus magnam praesentium quis, accusamus distinctio ad eligendi obcaecati qui?</p>
      <div
        id="omContainer"
        className="flex gap-3 justify-center sm:justify-normal flex-wrap  "
      >

        {missoin.map((m,idx) => {
          return (
            <div
                key={idx}
              id="omCard"
              className="flex flex-col gap-3 w-[300px] py-4 px-8 hover:scale-105 transition shadow-md dark:shadow-gray-700/40 shadow-black/40 rounded-md dark:bg-gray-900 bg-white"
            >
              <div id="icon" className="text-[var(--darker)] dark:text-[var(--lighter)]">
                {m.icon}
              </div>
              <div
                id="title"
                className="text-[var(--darker)] dark:text-[var(--lighter)] sm:text-2xl text-xl font-semibold "
              >
                {m.title}
              </div>
              <div id="text" className="text-sm text-zinc-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur, ratione. Veniam, vitae iure natus harum placeat tenetur
                assumenda? Voluptatum, omnis?
              </div>
              <button className="py-2 text-blue-800  w-fit">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurMission;
