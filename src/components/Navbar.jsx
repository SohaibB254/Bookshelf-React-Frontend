import React, { useEffect,useRef, useState } from 'react'
import { Link,useLocation} from 'react-router'
import categoriesData from '../data/categories'
import { useCart } from '../context/CartContext'
import { useLibrary } from '../context/LibraryContext'



const Navbar = () => {
  const [accOpen, setAccOpen] = useState(false)
  const [isOpen, SetIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {itemsInCart} = useCart()
  const {libraryItems} = useLibrary()
  const path = useLocation().pathname

  const toggleAcc = ()=>{
    setAccOpen(prev => !prev);

  }
  const toggleNavbar = ()=>{
    setIsNavOpen(prev => !prev);

  }
  const toggleDropMenu = () => {
    SetIsOpen(prev => !prev);
  }
  const categoryRef = useRef(null);
  const liRef = useRef(null);

  const navIconRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(()=>{
    const handleNavbar = (e)=>{
        if(
          menuRef.current &&
          !menuRef.current.contains(e.target) &&
          navIconRef.current &&
          !navIconRef.current.contains(e.target)
        ){
           setIsNavOpen(false);
        }
    };
    document.addEventListener('mousedown',handleNavbar);
    return ()=> document.removeEventListener('mousedown',handleNavbar)
  },[])
//Logic for closing the category menu by clicking outside the menu
  useEffect(()=>{

    const handleClickedOutside = (e)=>{
      if(
        categoryRef.current &&
        !categoryRef.current.contains(e.target) &&
        liRef.current &&
        !liRef.current.contains(e.target)
      ){
        SetIsOpen(false)
      }
    };
    document.addEventListener('mousedown',handleClickedOutside);


    return ()=>{
      document.removeEventListener('mousedown',handleClickedOutside);
    }
  },[])

  return (
    <>
    <div id='NavbarContainer' className={`${path.startsWith('/auth')?'hidden':''} sticky top-0  z-40`} >
      <div id='Navbar' className='flex sticky top-0 text-white bg-black font-inter h-[10vh] text-[30px] items-center  sm:w-screen   justify-between   px-8 sm:px-12 '>
        <div id='Logo'>
         <Link to={'/'}> <h1 className='text-[#24BF6C] sm:text-[1em] text-[0.8em] cursor-pointer transition hover:text-green-800 '>BookShelf</h1></Link>
        </div>
        <div id='Menu' ref={menuRef} className={`${isNavOpen?'block':'hidden'} sm:block`} >
          <ul className='flex-col sm:flex-row sm:bg-transparent bg-black border-b sm:border-0  fixed sm:top-0 sm:relative  top-[9.9vh] px-8 left-0 h-auto w-screen flex sm:gap-8 gap-3 text-[0.5em] font-[400] sm:w-[40vw] sm:mr-[66px] sm:items-center py-10 sm:py-3 justify-center '>
            <Link to='/' onClick={toggleNavbar}><li>Home</li></Link>
            <li ref={liRef} onClick={toggleDropMenu}>Categories

              <div ref={categoryRef} id='category' className={` sm:w-[10vw] absolute   w-auto h-auto border-x rounded-sm   bg-white p-2 text-center ${isOpen ? '' : 'hidden'}`}>
                {
                  categoriesData.map((elm) => {
                    return <Link key={elm.id} to={`/categories/${encodeURIComponent(elm.name)}`} onClick={(e) => { e.stopPropagation(); toggleDropMenu();if (window.innerWidth < 640) toggleNavbar()}}  ><h2 className='border-b-2 my-1 text-black hover:underline'>{elm.name}</h2></Link>
                  })

                }

              </div>
            </li>
            <Link onClick={toggleNavbar} to='/store' > <li>Store</li></Link>
            <Link className='flex items-center gap-2 relative sm:py-8' onClick={toggleNavbar} to='/cart'> <li>Cart
              </li><span className='sm:hidden'><i className="fa-solid fa-cart-shopping "></i></span>
              { itemsInCart.length > 0 &&
              <span className='w-5 h-5 bg-red-500 text-center rounded-full absolute sm:top-5   -right-4'>
               {itemsInCart.length}</span>
              }
               </Link>
            <Link className='flex items-center gap-2 relative sm:py-8' onClick={toggleNavbar} to='/library'> <li>Library</li>
             { libraryItems.length > 0 &&
              <span className='w-5 h-5 bg-green-500 text-center rounded-full absolute sm:top-5   -right-4'>
               {libraryItems.length}</span>
              }
            </Link>
            <Link onClick={toggleNavbar} to='/contact'> <li>Contact</li></Link>
            <Link onClick={toggleNavbar} to='/about'> <li>About</li></Link>
          </ul>
        </div>

        <div id='Account' className=' text-[0.8em] sm:text-[0.5em] '>
          <div className='flex  gap-2 items-center'><div className='flex items-center' onClick={toggleAcc} ><Link  className='hover:underline  hidden sm:block'>Join now </Link><i className="fa-solid fa-user mx-2 " style={{color: "#24BF6C"}}></i></div>
          <span id='showNav' className='sm:hidden transition '><i ref={navIconRef} onClick={toggleNavbar} className={`${isNavOpen ?'fa-solid fa-xmark':' fa-solid fa-bars'} `}></i></span></div>
          <div className={`absolute   ${accOpen?'flex':'hidden'} transition-all border sm:text-[1em] text-[0.7em] border-white/40  rounded-sm flex-col pl-1   sm:right-[3.5vw] right-[12vw] sm:top-[45px]  w-[150px] h-[250px] bg-black`}>
            <i onClick={toggleAcc} className="fa-solid fa-xmark  text-right cursor-pointer text-[16px] hover:text-green-700 py-2 sm:pr-2 pr-3" ></i>
            <Link onClick={toggleAcc} to='/auth/login' className='border-b transition hover:text-green-400 border-white/30 px-2 py-1'>Login</Link>
            <Link onClick={toggleAcc} to='/auth/signup' className='border-b transition hover:text-green-400 border-white/30 px-2 py-1'>Signup</Link>

          </div>
        </div>
      </div>
</div>
    </>
  )
}

export default Navbar
