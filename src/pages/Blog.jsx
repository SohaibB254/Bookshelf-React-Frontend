import React, { useState } from 'react'
import { Link } from 'react-router'
import Footer from '../components/Footer'
import { blogsData } from '../data/blogs'
const Blog = () => {
    const [shownBlog, setShownBlog] = useState(3)
   const shownBlogs =  blogsData.slice(0,shownBlog)
  return (
    <>
    <div id='BlogContainer' className='lg:px-12 flex flex-col sm:px-8'>
            <h1 className='sm:text-3xl text-xl dark:text-[var(--lighter)] text-[var(--darker)] font-bold text-center'>Blog </h1>
        <div id="blogGrid" className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  place-items-center'>
    {
        shownBlogs.map((blog,idx)=>{
            return   (
                <div key={idx}  id="blog" className='lg:w-96 w-full   my-4 border dark:border-gray-700 rounded-md p-2 overflow-hidden'>
                <div id='img' className='rounded-md overflow-hidden bg-gray-500'>
                    <img className='w-full  lg:h-64' src={blog.image_url} alt="" />
                </div>
                <div id="text" className='flex flex-col gap-2'>
                    <Link to={`/blog/details/${encodeURIComponent(blog.id)}`} className='sm:text-3xl text-xl hover:text-[var(--lighter)] transition text-[var(--darker)] dark:text-[var(--lighter)] truncate  font-bold'>{blog.title}</Link>
                    <p className='text-sm text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat praesentium similique commodi! Autem laborum tempore illum corrupti ea consectetur, alias optio cum harum mollitia quibusdam numquam architecto distinctio ratione tenetur sunt nisi iusto delectus</p>
                    <div id='blogStats' className='flex lg:gap-5 gap-2 text-sm items-center  text-[var(--baseColor)]'>
                        <span className='flex gap-1 items-center whitespace-nowrap'><i className="fa-regular fa-calendar-days"></i>{blog.date_published}</span>
                        <span className='flex gap-1 items-center whitespace-nowrap truncate'><i className="fa-regular fa-user"></i> By {blog.username}</span>
                        <span className='flex gap-1 items-center whitespace-nowrap'><i className="fa-regular fa-eye"></i> {blog.views} Views</span>
                    </div>
                </div>
            </div>
            )
        })
    }


        </div>
        <button onClick={()=>setShownBlog(blogsData.length)} className='u-btn rounded-sm w-fit self-center '>See more</button>
    </div>
    <Footer/>
    </>
  )
}

export default Blog
