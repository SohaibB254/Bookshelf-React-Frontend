import React,{useState} from 'react'
import { Link } from 'react-router'

const Login = () => {
    const [isShown, setIsShown] = useState(false);
     const [password, setPassword] = useState('');
      const handlePassword = ()=>{
        setIsShown(prev => !prev)
    }
  return (
    <>
    <Link to={'/'} className='mx-3 inline-block mt-2 text-blue-500'>Go back to home</Link>
    <div className=' font-inter w-full h-fit pt-12 flex justify-center dark:text-gray-300  ' >
        <div className='shadow dark:shadow-gray-800 w-fit h-fit pt-4  p-12 rounded-md '>
            <h1 class="text-center text-3xl py-8 font-semibold ">Welcome back</h1>
        <form className=' flex flex-col gap-2' action="">
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type="email" name="email" placeholder="Email" id=""/>
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type={`${isShown?'text':'password'}`} onChange={(e)=>setPassword(e.target.value)} value={password} name="name" placeholder="Password" id=""/>
            {password &&  <span onClick={handlePassword} className='inline-block cursor-pointer text-xs text-blue-500'>{isShown?'Hide Password':'Show Password'}</span>
            }
            <input class="px-4 rounded border block  dark:border-gray-800 py-2  cursor-pointer hover:bg-green-500 hover:text-white transition" type="submit"  value="Login" id=""/>
        </form>
        <p>Don't have an account? <Link to={'/auth/signup'} className='text-blue-500 hover:underline cursor-pointer'>Signup now.</Link></p>
        <div className='mt-3 flex items-center sm:text-base text-[15px] gap-2'>
       <button class=" rounded border my-1 px-2 tracking-tight   flex items-center gap-1 dark:border-gray-800 py-2   cursor-pointer transition"  >Continue with google <img className='w-6 h-6' src="https://img.icons8.com/color/512/google-logo.png" alt="" /></button>
       or
       <button class="  rounded border my-1 px-2 tracking-tight   flex items-center gap-1  dark:border-gray-800 py-2  cursor-pointer transition"  >Conitnue with facebook  <img className='w-6 h-6' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />  </button>
        </div>
        </div>

    </div>
    </>
  )
}

export default Login
