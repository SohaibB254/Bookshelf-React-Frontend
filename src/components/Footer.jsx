import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router';
import ThemeSwitcher from './ThemeSwitcher';


const Footer = () => {
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('PKR');
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: 'easeIn'
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
  return (
    <footer id='footerContainer' className='font-inter dark:bg-gray-900 dark:text-gray-300 '>
      <div id='Footer' className='w-full h-auto flex flex-col gap-4 dark:bg-gray-900 dark:text-gray-300 relative sm:flex-row dark:border-gray-800 border-y justify-evenly mt-8 px-20 py-20'>
        <div className='flex flex-col gap-8 sm:gap-20'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}

          >

            <h1 className='font-kavoon text-[30px] cursor-pointer text-[var(--baseColor)]'>BookShelf</h1>
            <p className='text-gray-500'>H.N J232, Street 35 Block B Wapda Town,<br />Lahore Pakistan</p>
          </motion.div>
          <div>
            <ul className='flex gap-5'>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-instagram"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-youtube"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-facebook-f"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-twitter"></i>
              <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-pinterest-p"></i>
            </ul>
          </div>
        </div>
        <motion.div>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            transition={{
              ease: 'easeIn'
            }}
            id='FooterLinks' className='flex md:flex-nowrap flex-wrap gap-12 sm:gap-20'>
            <motion.ul
            variants={item}
            >
              <h1 className='font-semibold text-[18px] cursor-pointer'>Links</h1>
              <li className='hover:underline cursor-pointer'>Home</li>
              <li className='hover:underline cursor-pointer'>Store</li>
              <li className='hover:underline cursor-pointer'>Contact</li>
              <li className='hover:underline cursor-pointer'>About</li>
              <li className='hover:underline cursor-pointer'>Blog</li>
            </motion.ul>
            <motion.ul variants={item}>
              <h1 className='font-semibold text-[18px] cursor-pointer'>Services</h1>
              <li className='hover:underline cursor-pointer'>Cart</li>
              <li className='hover:underline cursor-pointer'>Feedback</li>
              <li className='hover:underline cursor-pointer'>Reviews</li>
              <li className='hover:underline cursor-pointer'>Payments</li>
              <li className='hover:underline cursor-pointer'>Account</li>
              <li className='hover:underline cursor-pointer'>Plans</li>
            </motion.ul>
            <motion.ul variants={item}>
              <h1 className='font-semibold text-[18px] cursor-pointer'>Terms</h1>
              <Link to={'/policy'} className='hover:underline cursor-pointer'>Policy</Link>
              <li className='hover:underline cursor-pointer'>Conditions</li>
              <li className='hover:underline cursor-pointer'>FAQs</li>
            </motion.ul>
            <motion.ul variants={item}>
              <h1 className='font-semibold text-[18px] cursor-pointer'>Genre</h1>
              <li className='hover:underline cursor-pointer'>Action</li>
              <li className='hover:underline cursor-pointer'>Kids</li>
              <li className='hover:underline cursor-pointer'>Romance</li>
              <li className='hover:underline cursor-pointer'>Thriller</li>
              <li className='hover:underline cursor-pointer'>History</li>
              <li className='hover:underline cursor-pointer'>Science</li>
              <li className='hover:underline cursor-pointer'>Fantasy</li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      <div className='flex items-center justify-between px-10 py-12'>
        <div className='sm:text-base text-xs'>
          <p>2025 Bookshelf. All rights reserved </p>
        </div>
        <div>
          <div className="flex sm:text-base text-xs   ">
            <div className="flex items-center gap-2">
              <label htmlFor="language" className="text-sm"></label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className=" p-2 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="EN">English</option>
                <option value="UR">Urdu</option>
                <option value="AR">Arabic</option>
                <option value="FR">French</option>
                <option value="SP">Spanish</option>
                <option value="DE">German</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="currency" className="text-sm"></label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="  p-2 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="PKR">PKR</option>
                <option value="USD">USD</option>
                <option value="EUR">Euro</option>
                <option value="SAR">SAR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
