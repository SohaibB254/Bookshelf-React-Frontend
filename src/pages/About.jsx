import React, { useState } from 'react'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { motion } from 'motion/react'
import ChatWidget from '../components/Chatwidget'

const About = () => {
  const dark = 'text-white bg-gray-950';
  const light = 'text-black bg-white/70'
  const[themeColor,setThemeColor] = useState(dark);
  const toggleThemeColor = ()=>{
    if(themeColor === dark){
      setThemeColor(light)
    }else{
      setThemeColor(dark)
    }


  }
  return (
    <>
    <div id='aboutContainer' className='text-[32px] sm:px-8 font-inter  pt-8'>
      <h1 className='font-semibold sm:text-left text-center text-[0.8em] sm:text-[1em]  font-inter sm:pl-4'>BookShelf - Reader's Heaven</h1>
      <div id='aboutContentContainer' className={`h-auto  gap-4 text-[0.7em] border ${themeColor === dark? 'border-white':'border-gray-500'}  ${themeColor} relative  mt-8 font-inter flex-wrap md:flex-nowrap flex px-8 py-8  rounded-md`}>
        <div className='absolute right-3 top-0'>
          <button onClick={toggleThemeColor} className={`text-base ${themeColor}  rounded-sm`}><i className={`fa-solid ${themeColor === dark ? 'fa-sun text-yellow-600':'fa-moon'}`}></i></button>
        </div>

        <div className='md:w-[50%] fade-elm flex flex-col gap-4' >
          <div className={`border  group cursor-pointer ${themeColor === dark? 'border-white':'border-gray-500'}  rounded-md p-4`}>
            <h1 className='text-[1.2em] text-[#24BF6C] font-semibold border-b mb-3 pb-2'>📖 Story</h1>
           <motion.p
           initial={{opacity: 0,y:20}}
           whileInView={{opacity:1,y:0,}}
           viewport={{once:true}}
           transition={{
            duration:1,
            delay: 0.5
          }}

           className='lg:columns-2 '>BookShelf began as a passion project between two college friends who believed stories deserve a kingdom of their own. From ancient classics to thrilling modern fiction, we’ve built a space where every reader finds a home. What started as a garage library is now a growing community of thousands of story-seekers.</motion.p>
           <button className='w-full italic text-[0.7em]  my-3 sm:opacity-0 hover:text-white/60  opacity-100 sm:group-hover:opacity-100 transition'>See More--&gt;</button>
          </div>

          <div className={`border group cursor-pointer ${themeColor === dark? 'border-white':'border-gray-500'}  rounded-md p-4`}>
             <h1 className='text-[1.2em] text-[#24BF6C] font-semibold border-b mb-3  pb-2'>📢 Updates</h1>
           <motion.p
             initial={{opacity: 0,y:20}}
           whileInView={{opacity:1,y:0,}}
           viewport={{once:true}}
           transition={{
            duration:1,
            delay: 0.7
          }}
           className='columns-1'>Stay in the loop with our newest releases, upcoming events, feature rollouts, and seasonal reading lists. We also share sneak peeks of author collaborations, discounts, and behind-the-scenes progress as we continue building BookShelf into the ultimate haven for readers everywhere.</motion.p>
           <button className='w-full italic text-[0.7em]  my-3 sm:opacity-0 hover:text-white/60  opacity-100 sm:group-hover:opacity-100 transition'>See More--&gt;</button>
          </div>

        </div>
        <div className={` md:w-[50%] border group cursor-pointer fade-elm ${themeColor === dark? 'border-white':'border-gray-500'} rounded-md p-4`}>
           <h1 className='text-[1.2em]  text-[#24BF6C] font-semibold border-b mb-3  pb-2'>📝 Blog</h1>
      <motion.p
        initial={{opacity: 0,y:20}}
           whileInView={{opacity:1,y:0,}}
           viewport={{once:true}}
           transition={{
            duration:1,
            delay: 0.9
          }}
      >
        Our blog is your companion on the literary journey — offering deep dives into genres, author spotlights, reading challenges, and bookish lifestyle tips. Whether you're a casual reader or a dedicated bookworm, we share content to keep you inspired, informed, and turning pages all year long.
      </motion.p>
      <button className='w-full italic text-[0.7em]  my-3 sm:opacity-0 hover:text-white/60  opacity-100 sm:group-hover:opacity-100 transition'>See More--&gt;</button>
        </div>
      </div>
    </div>
      <ChatWidget/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default About
