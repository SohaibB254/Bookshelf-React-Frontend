import React, { useState } from 'react'
import { Link } from 'react-router';

const Signup = () => {
    const [isShown, setIsShown] = useState(false);
    const [password, setPassword] = useState('');

    const handlePassword = ()=>{
        setIsShown(prev => !prev)
    }
  return (
    <div className='h-fit'>
         <Link to={'/'} className='mx-3 inline-block mt-2 text-blue-500'>Go back to home</Link>
       <div className=' font-inter w-full h-fit pt-6 flex justify-center dark:text-gray-300 '>
        <div className='shadow dark:shadow-gray-800 w-fit h-fit pt-4  p-12 rounded-md '>
            <h1 class="text-center text-3xl py-8 font-semibold ">Join <span className='text-[#24BF6C] font-kavoon'>Bookshelf</span> now!</h1>
        <form className=' flex flex-col gap-2' >
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type="text" name="email" placeholder="Name" id=""/>
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type="email" name="email" placeholder="Email" id=""/>
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type={`${isShown?'text':'password'}`} name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {password &&  <span onClick={handlePassword} className='inline-block cursor-pointer text-xs text-blue-500'>{isShown?'Hide Password':'Show Password'}</span>
            }
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none no-spinner  dark:border-gray-800 py-2" type="number" name="age" placeholder="Age" id=""/>
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none no-spinner  dark:border-gray-800 py-2" type="number" name="phone" placeholder="Phone" id=""/>
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none             dark:border-gray-800 py-2" type="text" name="address" placeholder="Address" id=""/>
        <form className='flex gap-3'>
              <input type="radio" class="px-4 rounded border block dark:border-gray-800 py-2" id='male' name="gender" />
              <label className='flex items-center gap-1' htmlFor="male">Male</label>
            <input type="radio" class="px-4 rounded border block dark:border-gray-800 py-2" id='female' name="gender" />
            <label className='flex items-center gap-1' htmlFor="female">Female </label>
        </form>

            <input class="px-4 rounded border block dark:border-gray-800 py-2  cursor-pointer hover:bg-green-500 hover:text-white transition" type="submit"  value="Signup" id=""/>
        </form>
        <p>Already  have an account? <Link to={'/auth/login'} className='text-blue-500 hover:underline '>Login now.</Link></p>
        <div className='mt-3 flex items-center sm:text-base text-[15px] gap-2'>
       <button class=" rounded border my-1 px-2 tracking-tight    flex items-center gap-1 dark:border-gray-800 py-2   cursor-pointer transition"  >Continue with google <img className='w-6 h-6' src="https://img.icons8.com/color/512/google-logo.png" alt="" /></button>
       or
       <button class="  rounded border my-1 px-2 tracking-tight flex items-center gap-1  dark:border-gray-800 py-2  cursor-pointer transition"  >Conitnue with facebook  <img className='w-6 h-6' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />  </button>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Signup
