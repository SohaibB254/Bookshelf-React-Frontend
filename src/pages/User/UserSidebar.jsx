import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useUser } from "../../context/UserContext";
import axios from "axios";

const UserSidebar = () => {
  const [isShown, setIsShown] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [preview, setPreview] = useState(null);
  const [pfpModal,setPfpModal ] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const { user,setUser } = useUser();
  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("Token");
  };
  //Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  // Handle Upload Profile Picture
  const handleUpload = async ()=>{
    if(!selectedImage) return alert("Plz select an image first.");
// Making new formdata
    const formData = new FormData();
    formData.append("image",selectedImage)
// Putting in the request
let token = localStorage.getItem("Token")
try {
  const response = await axios.put(
    "http://localhost:3000/users/addpfp",
    formData,
    {
      headers:{
        'Content-Type':'multipart/form-data',
         Authorization: `Bearer ${token}`,
      }
    }
  )
  setUser(response.data)
  localStorage.setItem("user",JSON.stringify(response.data));
  alert("Profile picture uploaded")
  setPfpModal(false)
} catch (error) {
  alert(error.message)
}

  }
  const toggleSidebar = () => {
    if (isMobile) {
      setIsShown((oldValue) => !oldValue);
    }
  };
  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      const isPhone = width <= 1024;
      setIsMobile(isPhone);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <div
        id="DashBoardNav"
        className={`bg-white dark:bg-gray-900 dark:text-gray-300 fixed dark:border-gray-800 lg:static sm:w-[300px] w-full  border lg:shadow-none shadow-sm shadow-black border-b-0 border-t-0 ${
          isShown ? "translate-x-0" : "-translate-x-full"
        } transform transition-transform duration-300 ease-in-out flex-col py-3 sm:h-auto z-20  h-[90vh]`}
      >
        <div className={`${isMobile ? "translate-x-0" : "-translate-x-full"} `}>
          <i
            onClick={toggleSidebar}
            className="fa-solid fa-xmark text-xl  text-right w-full  px-2"
          ></i>
        </div>
        <Link

          className="sm:text-xl text-base cursor-pointer font-semibold flex flex-col items-center gap-2"
        >
          <div  onClick={()=>setPfpModal(true)} className="sm:h-20 sm:w-20 h-14 w-14 cursor-pointer overflow-hidden rounded-full">
            <img
              className="object-cover h-full  w-full"
              src={user.pfp || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACGFpr0iqURE_6EHYMm-AGXfhXC1Nzf4ucA&s"}
              alt=""
            />
          </div>
          {user.name}
        </Link>
        <div className="h-screen ">
          <ul className="flex flex-col px-12 gap-2 mt-4">
            <Link
              onClick={toggleSidebar}
              to={"/userprofile"}
              className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] px-1 py-2 flex gap-1 items-center hover:bg-green-200"
            >
              <i className="fa-solid fa-user"></i>Profile
            </Link>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i className="fa-solid fa-cart-shopping"></i>My cart
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i className="fa-regular fa-heart"></i>Wishlist
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i className="fa-solid fa-shop"></i>Orders
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i className="fa-solid fa-circle-info"></i>Help center
            </li>
            <li className="cursor-pointer border-b dark:border-gray-800 dark:hover:bg-[var(--baseColor)] py-2 px-1 flex gap-1 items-center hover:bg-green-200">
              <i className="fa-solid fa-key"></i>Terms & Policy
            </li>
            <Link
              to={"/"}
              onClick={handleLogout}
              className="cursor-pointer  border-b dark:border-gray-800  py-2 px-1 flex gap-1 items-center text-red-600 font-[500] "
            >
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </Link>
          </ul>
        </div>
      </div>
      <div className={`${isMobile ? "" : "hidden"}`}>
        <i
          onClick={toggleSidebar}
          className="fa-solid fa-ellipsis-vertical dark:text-gray-300 text-2xl py-3  px-4"
        ></i>
      </div>
      {/* Set User Profile */}
          {
  pfpModal &&
       <div className="fixed inset-0 h-full w-full bg-white/40 dark:bg-gray-900/40 backdrop-blur-[2px] z-50 flex justify-center pt-10 top-0">
        <div className="w-72 bg-white border dark:bg-gray-900 dark:border h-fit p-3 rounded flex flex-col items-center">
          {preview ? (
            <div className="h-24 w-24 bg-green-500 overflow-hidden rounded-full">
              <img src={preview} className="h-full w-full object-cover " alt="Preview" />
            </div>
          ) : (
            <p>No image selected</p>
          )}

          <div className="flex flex-col gap-8">
            <label className='cursor-pointer text-center text-blue-600 font-medium hover:underline"'>
              Choose Image
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <div className="flex gap-2">

              <button onClick={handleUpload} className="bg-green-500 p-1 cursor-pointer rounded w-16">Upload</button>
              <button onClick={()=>setPfpModal(false)} className="bg-red-500 p-1 rounded w-16 cursor-pointer ">Cancel</button>
            </div>
          </div>
        </div>
      </div>

}
    </>
  );
};

export default UserSidebar;
