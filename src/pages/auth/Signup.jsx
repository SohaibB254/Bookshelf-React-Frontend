import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router';
import { useUser } from '../../context/UserContext';

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [isShown, setIsShown] = useState(false);
    const [passVal, setPassVal] = useState('');
    const { setUser } = useUser()
    let navigate = useNavigate()
    // Storing values from inputs
  const [credentials, setCredentials] = useState({name:'', email: '', password: '',phone: '',address: '',gender: '' });
  const {name,email,password,phone,address,gender } = credentials
    const handlePassword = ()=>{
        setIsShown(prev => !prev)
    }
// Submit handler
    const handleSubmitSignup = async (e)=>{
      e.preventDefault();
      setLoading(true)
        const response = await fetch('http://localhost:3000/users/signup',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({name,email, password,phone,address,gender })
        });
        // Api's response
        const json = await response.json();
        if(json){
          //Redirect to profile
          localStorage.setItem('Token',json.token);
          setLoading(false)
          setUser(json.user)
          navigate('/userprofile')
          alert(`Welcome to bookshelf ,${json.user.name}`)
        }
        // If Signup fails
        else{
          alert('Something went wrong');
          navigate('/auth/login')
        }
    }
    const handleChange = (e)=>{
      setCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    <div className='h-fit'>
         <Link to={'/'} className='mx-3 inline-block mt-2 text-blue-500'>Go back to home</Link>
       <div className=' font-inter w-full h-fit pt-6 flex justify-center dark:text-gray-300 '>
        <div className='shadow dark:shadow-gray-800 w-fit h-fit pt-4  p-12 rounded-md '>
            <h1 class="text-center text-3xl py-8 font-semibold ">Join <span className='text-[#24BF6C] font-kavoon'>Bookshelf</span> now!</h1>
        <form className=' flex flex-col gap-2' onSubmit={handleSubmitSignup} >
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type={`${isShown?'text':'password'}`} name="password" placeholder="Password" value={passVal} onChange={(e)=>{setPassVal(e.target.value),handleChange}} required/>
            {passVal &&  <span onClick={handlePassword} className='inline-block cursor-pointer text-xs text-blue-500'>{isShown?'Hide Password':'Show Password'}</span>
            }
            <input class="px-4 rounded border block dark:bg-gray-800 outline-none no-spinner  dark:border-gray-800 py-2" type="number" name="phone" placeholder="Phone" onChange={handleChange} required />
            <select name='gender' value={credentials.gender} onChange={handleChange} required className=' px-4 py-2 dark:text-gray-300  dark:bg-gray-800 border rounded '>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input class="px-4 rounded border block dark:border-gray-800 py-2  cursor-pointer hover:bg-green-500 hover:text-white transition" type="submit"  value={`${loading?'Submitting...':'Submit'}`} />
        </form>
        <p className='my-2'>Already  have an account? <Link to={'/auth/login'} className='text-blue-500 hover:underline '>Login now.</Link></p>
        <div className='mt-3 flex items-center sm:flex-row flex-col sm:text-base text-[15px] gap-2'>
       <button class=" rounded border sm:my-1 px-2 tracking-tight    flex items-center gap-1 dark:border-gray-800 py-2   cursor-pointer transition"  >Continue with google <img className='w-6 h-6' src="https://img.icons8.com/color/512/google-logo.png" alt="" /></button>
       or
       <button class="  rounded border sm:my-1 px-2 tracking-tight flex items-center gap-1  dark:border-gray-800 py-2  cursor-pointer transition"  >Conitnue with facebook  <img className='w-6 h-6' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />  </button>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Signup
