import React, {useState} from 'react'

const Footer = () => {
      const [language, setLanguage] = useState('EN');
      const [currency, setCurrency] = useState('PKR');
  return (
    <div id='footerContainer'>    
    <div id='Footer' className='w-full h-auto flex border-b border-t justify-evenly mt-8 px-20 py-20'>
      <div className='flex flex-col gap-20'>
        <div>
            <h1 className='font-kavoon text-[30px] cursor-pointer text-[#24BF6C]'>BookShelf</h1>
            <p className='text-gray-500'>H.N J232, Street 35 Block B Wapda Town,<br/>Lahore Pakistan</p>
        </div>
        <div>
            <ul className='flex gap-5'>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-instagram"></i>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-youtube"></i>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-facebook-f"></i>
                <i className=" cursor-pointer hover:scale-110 transition-all fa-brands fa-twitter"></i>
                <i class=" cursor-pointer hover:scale-110 transition-all fa-brands fa-pinterest-p"></i>
            </ul>
        </div>
      </div>
      <div>
        <div id='FooterLinks' className='flex gap-20'>
            <ul>
                <h1 className='font-semibold text-[18px] cursor-pointer'>Links</h1>
                <li className='hover:underline cursor-pointer'>Home</li>
                <li className='hover:underline cursor-pointer'>Store</li>
                <li className='hover:underline cursor-pointer'>Contact</li>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Blog</li>
            </ul>
            <ul>
                <h1 className='font-semibold text-[18px] cursor-pointer'>Services</h1>
                <li className='hover:underline cursor-pointer'>Cart</li>
                <li className='hover:underline cursor-pointer'>Feedback</li>
                <li className='hover:underline cursor-pointer'>Reviews</li>
                <li className='hover:underline cursor-pointer'>Payments</li>
                <li className='hover:underline cursor-pointer'>Account</li>
                <li className='hover:underline cursor-pointer'>Plans</li>
            </ul>
            <ul>
                <h1 className='font-semibold text-[18px] cursor-pointer'>Terms</h1>
                <li className='hover:underline cursor-pointer'>Policy</li>
                <li className='hover:underline cursor-pointer'>Conditions</li>
                <li className='hover:underline cursor-pointer'>FAQs</li>
            </ul>
            <ul>
                <h1 className='font-semibold text-[18px] cursor-pointer'>Genre</h1>
                <li className='hover:underline cursor-pointer'>Action</li>
                <li className='hover:underline cursor-pointer'>Kids</li>
                <li className='hover:underline cursor-pointer'>Romance</li>
                <li className='hover:underline cursor-pointer'>Thriller</li>
                <li className='hover:underline cursor-pointer'>History</li>
                <li className='hover:underline cursor-pointer'>Science</li>
                <li className='hover:underline cursor-pointer'>Fantasy</li>
            </ul>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-between px-10 py-12'>
        <div>
            <p>2025 Bookshelf. All rights reserved </p>
        </div>
        <div>
    <div className="flex   ">
        <div className="flex items-center gap-2">
          <label htmlFor="language" className="text-sm"></label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className= " p-2"
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
            className="  p-2"
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
    </div>

  )
}

export default Footer
