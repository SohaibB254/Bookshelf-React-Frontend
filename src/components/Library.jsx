import React from 'react'
import { Link } from 'react-router';
import { useLibrary } from '../context/LibraryContext';
import Footer from './Footer';


const Library = () => {
  const { libraryItems, setLibraryItems } = useLibrary();
  const removeBook = (id) => {
    setLibraryItems(prev => prev.filter(item => item.id !== id))
  }
  return (
    <div>
      <div id='LibraryContainer' className=' font-inter'>
        <div id="LibraryContent" className='sm:pl-12 pl-8 py-8'>
          <h1 className=' sm:text-3xl text-xl text-[var(--darker)] dark:text-[var(--lighter)]  font-semibold my-3'>Your Library</h1>
          <div id='LibraryBooks' className='flex gap-3 flex-wrap' >

            {libraryItems.length === 0 ? (
              <h1 className='text-gray-400'>Your Library is Empty <Link to={'/store/all'} className='text-blue-500'>Add books now</Link> </h1>)

              : libraryItems.map((item) => {
                return <div key={item.id} id='LibraryBook' className='dark:text-gray-300'>
                  <div className='h-auto   w-auto  py-2 flex flex-col border dark:border-gray-800 dark:shadow-gray-800 shadow text-[16px]'>
                    <Link to={'/library/readbook'}><img className='sm:w-[150px] w-[160px] place-self-center h-[210px] cursor-pointer' src={item.cover_photo} alt="" /></Link>
                    <div className='sm:px-4'>
                      <div className='flex flex-col'>
                        <h1 className=' sm:text-[18px] font-semibold  tracking-tighter dark:bg-gray-700 dark:text-gray-300 dark:font-normal bg-gray-200 '>{item.title}</h1>
                        <h1 className='italic text-gray-500 hidden sm:inline-block  '>by: {item.author}</h1>
                        <p className='hidden sm:inline-block'>{item.length}</p>
                        <p className='hidden sm:inline-block' >Publihed on: {item.date_published}</p>
                      </div>

                      <div className='flex flex-col items-start mt-2 ]'>
                        <Link to='/library/readbook' className='hover:underline  hidden sm:inline-block font-semibold '>Read Now</Link>
                        <button onClick={() => removeBook(item.id)} className=' text-gray-500 hover:text-red-500'>Remove book</button>
                      </div>
                    </div>
                      {/* Login Warning Modal */}
                      
                  </div>
                </div>
              })

            }

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default React.memo(Library)
