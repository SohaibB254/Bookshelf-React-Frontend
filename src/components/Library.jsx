import React from 'react'
import { Link } from 'react-router';
import { useLibrary } from '../context/LibraryContext';


const Library = () => {
    const {libraryItems,setLibraryItems} = useLibrary();
    const removeBook = (id)=>{
        setLibraryItems(prev => prev.filter(item => item.id !== id))
    }
  return (
    <div>
      <div id='LibraryContainer' className=' font-inter'>
        <div id="LibraryContent" className='sm:pl-12 pl-8 py-8'>
            <h1 className='text-3xl font-semibold my-3'>Your Library</h1>
            <div id='LibraryBooks' className='flex gap-3 flex-wrap' >

                { libraryItems.length === 0?(
                     <h1 className='text-gray-400'>Your Library is Empty <Link to={'/store'} className='text-blue-500'>Add books now</Link> </h1>)

                     : libraryItems.map((item)=>{
                    return    <div key={item.id} id='LibraryBook' className=''>
                    <div  className='h-auto   sm:w-[15vw] w-auto sm:px-4 py-2 flex flex-col border shadow text-[16px]'>
                <Link to={'/library/readbook'}><img className='sm:w-[40vw] w-[160px] sm:h-[40vh] cursor-pointer' src={item.cover_photo} alt="" /></Link>
                   <h1 className=' sm:text-[18px] font-semibold  tracking-tighter bg-gray-200 '>{item.title}</h1>
                   <h1 className='italic text-gray-500 hidden sm:inline-block  '>by: {item.author}</h1>
                   <p className='hidden sm:inline-block'>{item.length}</p>
                   <p  className='hidden sm:inline-block' >Publihed on: {item.date_published}</p>
                   <div className='flex flex-wrap justify-between mt-4 ]'>
                   <Link to='/library/readbook' className='hover:underline  hidden sm:inline-block '>Read Now</Link>
                   <button onClick={()=>removeBook(item.id)}  className=' text-gray-500 hover:text-red-500'>Remove book</button>
                   </div>
                     </div>
                </div>
                })

                }

            </div>
        </div>
      </div>
    </div>
  )
}

export default Library
