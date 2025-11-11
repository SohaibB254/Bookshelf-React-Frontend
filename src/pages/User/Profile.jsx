import React from "react";
import UserSidebar from "./UserSidebar";
import Footer from "../../components/Footer";
import { useUser } from "../../context/UserContext";

const Profile = () => {
  const { user } = useUser()
  return (
    <>
      <div className="flex">
        <UserSidebar />
        <div id="accountInfo" className=" lg:w-[90vw] md:px-12 dark:text-gray-300 font-inter py-10">
          <div id="basicInfo" className="rounded-md px-4  w-full dark:text-gray-300" >
            <div className="flex justify-between border-b border-gray-500">
              <h1 className="text-xl text-[var(--baseColor)]  py-4" >Personal Info</h1>
              <button className="text-blue-500">Edit</button>
              </div>
            <div className="py-8 px-4 flex flex-col gap-3">
                <div id="username" >
               <h1>Name</h1>
               <p className="text-zinc-400" >{user.name}</p>
            </div>
            <div id="userage" >
              <h1>Age</h1>
              <p className="text-zinc-400">21 Years</p>
            </div>
            <div id="usergender" >
              <h1>Gender</h1>
              <p className="text-zinc-400">{user.gender}</p>
            </div>
            </div>

          </div>
          <div className=" rounded-md h-auto px-4">
            <div className="flex justify-between border-b border-gray-500" >
               <h1 className="text-xl text-[var(--baseColor)] py-4"> Account Information</h1>
                 <button className="text-blue-500">Edit</button>
            </div>
            <ul className="flex flex-col py-8 px-4 gap-3">
              <li className="py-2  cursor-pointer border-black">
                <h1>Contact Info</h1>
                <div className="text-zinc-400">

                  <p className="cursor-default">Phone: {user.phone}</p>
                  <p className="cursor-default">Email: {user.email}</p>

                </div>
              </li>
              <li>
                Address Book
                <div className="text-zinc-400">
                  <p className="cursor-default">
                    House 43, Street 12, Garden Town, Lahore Punjab, Pakistan
                  </p>
                </div>
              </li>
              <li>
                Country
                <div className="text-zinc-400">
                  <p className="cursor-default">Pakistan </p>
                </div>
              </li>
              <li className="cursor-pointer">
                Help <i className="fa-solid fa-circle-question"></i>{" "}
              </li>
              <li className="cursor-pointer">Feedback</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
