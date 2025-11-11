import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router'
import { useUser } from '../../context/UserContext';

const Login = () => {
    const [isShown, setIsShown] = useState(false);
    const [loading,setLoading] = useState(false)
    const [passVal, setPassVal] = useState('');
    const { setUser } = useUser()
    let navigate = useNavigate()
    //  State varibale to store input values
       const [credentials, setCredentials] = useState({ email: '', password: ''});
       const { email, password } = credentials;
      const handlePasswordType = ()=>{
        setIsShown(prev => !prev)
    }
    // Login handler
    const handleSubmitLogin = async (e)=>{
      e.preventDefault();
      setLoading(true)
      const response = await fetch('http://localhost:3000/users/login',{
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
         body: JSON.stringify({email, password})
      });
      // User's data / api's response
      const json = await response.json();
      if(json){
        // Redirect to profile
        localStorage.setItem('Token',json.token);
        setLoading(false)
        setUser(json.user)
        navigate('/userprofile')
        alert(`welcome back, ${json.user.name}`)
      }
      // if Login fails
      else{
        alert("Something went wrong")
      }
    }
    // Setting input values in state variable
    const handleOnChange = (e)=>{
      setCredentials({...credentials,[e.target.name]: e.target.value});
    }
  return (
    <>
    <Link to={'/'} className='mx-3 inline-block mt-2 text-blue-500'>Go back to home</Link>
    <div className=' font-inter w-full h-fit pt-12 flex justify-center dark:text-gray-300  ' >
        <div className='shadow dark:shadow-gray-800 w-fit h-fit pt-4  p-12 rounded-md '>
            <h1 className="text-center text-3xl py-8 font-semibold ">Welcome back</h1>
        <form className=' flex flex-col gap-2' onSubmit={handleSubmitLogin} >
            <input className="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type="email" name="email" placeholder="Email" onChange={handleOnChange} required/>
            <input className="px-4 rounded border block dark:bg-gray-800 outline-none  dark:border-gray-800 py-2" type={`${isShown?'text':'password'}`} onChange={(e)=>{setPassVal(e.target.value),handleOnChange}} value={passVal} name="name" placeholder="Password" required/>
            {passVal &&  <span onClick={handlePasswordType} className='inline-block cursor-pointer text-xs text-blue-500'>{isShown?'Hide Password':'Show Password'}</span>
            }
            <input className={`px-4 rounded border block  dark:border-gray-800 py-2 ${!email && !password?'pointer-events-auto cursor-pointer    ':'cursor-not-allowed hover:bg-green-500 '}
            ${loading?'bg-gray-500':' '} hover:text-white transition`} type="submit"  value={`${loading?'Logging in...':'Login'}`}/>
        </form>
        <p>Don't have an account? <Link to={'/auth/signup'} className='text-blue-500 hover:underline cursor-pointer'>Signup now.</Link></p>
        <div className='mt-3 flex items-center sm:text-base text-[15px] gap-2'>
       <button className=" rounded border my-1 px-2 tracking-tight   flex items-center gap-1 dark:border-gray-800 py-2   cursor-pointer transition"  >Continue with google <img className='w-6 h-6' src="https://img.icons8.com/color/512/google-logo.png" alt="" /></button>
       or
       <button className="rounded border my-1 px-2 tracking-tight   flex items-center gap-1  dark:border-gray-800 py-2  cursor-pointer transition"  >Conitnue with facebook  <img className='w-6 h-6' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />  </button>
        </div>
        </div>

    </div>
    </>
  )
}

export default Login
