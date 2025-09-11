import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <>
    <Link to={'/'} className='mx-3 inline-block mt-2 text-blue-500'>Go back to home</Link>
    <div className=' font-inter w-full min-h-screen pt-12 flex justify-center  ' >
        <div className='shadow  w-fit h-fit pt-4  p-12 rounded-md '>
            <h1 class="text-center text-3xl py-8 font-semibold ">Welcome back</h1>
        <form className=' flex flex-col gap-2' action="">
            <input class="px-4 rounded border block  border-black/20 py-2" type="email" name="email" placeholder="Email" id=""/>
            <input class="px-4 rounded border block  border-black/20 py-2" type="text" name="name" placeholder="Password" id=""/>
            <input class="px-4 rounded border block  border-black/20 py-2  cursor-pointer hover:bg-green-500 hover:text-white transition" type="submit"  value="Login" id=""/>
        </form>
        <p>Don't have an account? <Link to={'/auth/signup'} className='text-blue-500 hover:underline cursor-pointer'>Signup now.</Link></p>
        <div className='mt-3 flex items-center gap-2'>
       <button class=" rounded border my-1 px-2 tracking-tight  border-black/20 py-2 hover:bg-green-500   cursor-pointer transition" type="submit" >Continue with google</button>
       or
       <button class="  rounded border my-1 px-2 tracking-tight  border-black/20 py-2  hover:bg-green-500  cursor-pointer transition" type="submit" >Conitnue with facebook</button>
        </div>
        </div>

    </div>
    </>
  )
}

export default Login
