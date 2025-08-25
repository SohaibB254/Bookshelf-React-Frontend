import React, { useEffect,useRef, useState } from 'react'
import { Link, Routes, Route } from 'react-router'
import categoriesData from '../data/categories'


const Navbar = () => {
    const[accOpen, setAccOpen] = useState(false)
  const [isOpen, SetIsOpen] = useState(false);
  const toggleAcc = ()=>{
    setAccOpen(prev => !prev);

  }
  const toggleDropMenu = () => {
    SetIsOpen(prev => !prev);
  }
  const categoryRef = useRef(null);
  const liRef = useRef(null);
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
      <div id='Navbar' className='flex sticky top-0 text-white bg-black font-inter h-[10vh] text-[30px] items-center z-50  w-screen   justify-between  px-12 '>
        <div id='Logo'>
          <h1 className='text-[#24BF6C] text-[1em] cursor-pointer transition hover:text-green-800 '>BookShelf</h1>
        </div>
        <div id='Menu' className=' '>
          <ul className='flex gap-8 text-[0.5em] font-[400] w-[40vw] mr-[66px] items-center py-3 justify-center '>
            <Link to='/'><li>Home</li></Link>
            <li ref={liRef} onClick={toggleDropMenu}>Categories

              <div ref={categoryRef} id='category' className={` w-[10vw] absolute h-auto border-x rounded-sm   bg-white p-2 text-center ${isOpen ? '' : 'hidden'}`}>
                {
                  categoriesData.map((elm) => {
                    return <Link key={elm.id} to={`/categories/${encodeURIComponent(elm.name)}`} onClick={(e) => { e.stopPropagation(); toggleDropMenu() }}  ><h2 className='border-b-2 my-1 text-black hover:underline'>{elm.name}</h2></Link>
                  })

                }

              </div>
            </li>
            <Link to='/store' > <li>Store</li></Link>
            <Link to='/cart'> <li>Cart
              </li></Link>
            <Link to='/contact'> <li>Contact</li></Link>
            <Link to='/about'> <li>About</li></Link>
          </ul>
        </div>

        <div id='Account' className='text-[0.5em] '>
          <Link onClick={toggleAcc} className='hover:underline'>Account <i className="fa-solid fa-user mx-2" style={{color: "#24BF6C"}}></i></Link>
          <div className={`absolute   ${accOpen?'flex':'hidden'} transition-all border border-white/40  rounded-sm flex-col pl-1   right-[3.5vw] top-[45px]  w-[150px] h-[250px] bg-black`}>
            <i onClick={toggleAcc} class="fa-solid fa-xmark  text-right cursor-pointer text-[16px] hover:text-green-700 py-1 pr-2"></i>
              <Link onClick={toggleAcc} to='/admindashboard' className=' border-b tranistion hover:text-green-400 border-white/30 px-2 py-1'>Admin</Link>
            <Link onClick={toggleAcc} to='/userprofile' className='border-b transition hover:text-green-400 border-white/30 px-2 py-1'>User</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
