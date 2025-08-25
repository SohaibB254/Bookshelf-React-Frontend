import React from 'react'
import fantasyImg from '../assets/fantasy.png';
import scienceImg from '../assets/science.png';
import historyImg from '../assets/history.png';
import businessImg from '../assets/business.png';
import mysteryImg from '../assets/mystery.png';

const PopularCategories = () => {
    const FamousCatData = [
    { CatName: "Fantasy", image: fantasyImg },
    { CatName: "Science Fiction", image: scienceImg },
    { CatName: "History", image: historyImg },
    { CatName: "Bussiness", image: businessImg },
    { CatName: "Mystery", image: mysteryImg },
];
  return (
    <div className='h-auto font-inter   text-[30px] px-20 text-center pt-10'>
    <h1 className='font-semibold text-[1.3em] mb-10'>Popular Categories</h1>
    <div className='grid  grid-cols-2 sm:grid-cols-5    md:grid-col-3  gap-4 justify-center items-center'>
    {
        FamousCatData.map((elm, idx)=>{
            return  <div key={idx} className='cursor-pointer hover:animate-pulse transition-transform flex flex-col items-center'>
                    <img className='h-24' src={elm.image} alt="" />
                <h1 className=' text-[0.5em] p-3'>{elm.CatName}</h1>
                </div>
              
        })
    }
    </div>
    </div>
  )
}

export default PopularCategories
