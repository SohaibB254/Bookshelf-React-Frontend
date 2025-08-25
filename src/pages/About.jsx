import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <div id='aboutContainer' className='text-[32px] px-8  pt-8'>
      <h1 className='font-semibold font-inter pl-4 move-elm-ltr'>BookShelf - A Castle for Readers</h1>
      <div id='aboutContentContainer' className='h-auto  gap-4 text-[0.7em]  mt-8 font-inter flex-wrap sm:flex-nowrap flex px-4 py-8 text-white bg-gray-950 rounded-md'>
        <div className='w-[50%] fade-elm flex flex-col gap-4' >
          <div className='border  group cursor-pointer border-white rounded-md p-4'>
            <h1 className='text-[1.2em] text-[#24BF6C] font-semibold border-b mb-3 pb-2'>📖 Story</h1>
           <p className='columns-2 '>BookShelf began as a passion project between two college friends who believed stories deserve a kingdom of their own. From ancient classics to thrilling modern fiction, we’ve built a space where every reader finds a home. What started as a garage library is now a growing community of thousands of story-seekers.</p>
           <button className='w-full italic text-[0.7em]  my-3 opacity-0 hover:text-white/60 group-hover:opacity-100 transition'>See More--&gt;</button>
          </div>
          <div className=' border group cursor-pointer border-white rounded-md p-4'>
             <h1 className='text-[1.2em] text-[#24BF6C] font-semibold border-b mb-3  pb-2'>📢 Updates</h1>
           <p className='columns-1'>Stay in the loop with our newest releases, upcoming events, feature rollouts, and seasonal reading lists. We also share sneak peeks of author collaborations, discounts, and behind-the-scenes progress as we continue building BookShelf into the ultimate haven for readers everywhere.</p>
           <button className='w-full my-3 italic text-[0.7em] opacity-0 hover:text-white/60 group-hover:opacity-100 transition'>See More--&gt;</button>
          </div>
        </div>
        <div className=' w-[50%] border group cursor-pointer fade-elm border-white rounded-md p-4'>
           <h1 className='text-[1.2em]  text-[#24BF6C] font-semibold border-b mb-3  pb-2'>📝 Blog</h1>
      <p>
        Our blog is your companion on the literary journey — offering deep dives into genres, author spotlights, reading challenges, and bookish lifestyle tips. Whether you're a casual reader or a dedicated bookworm, we share content to keep you inspired, informed, and turning pages all year long.
      </p>
      <button className='w-full my-3 italic text-[0.7em]  opacity-0 hover:text-white/60 group-hover:opacity-100 transition'>See More--&gt;</button>
        </div>
      </div>
    </div>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default About
