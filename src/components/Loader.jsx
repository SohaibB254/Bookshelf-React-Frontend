import React, { useState } from 'react'

const Loader = () => {
    const[loading,setLoading] = useState('opacity-1')

    setTimeout(()=>{
        setLoading('opacity-0 hidden')
    },5000)
  return (
    <div className={`min-w-screen w-full min-h-screen h-full fixed bg-orange-500 ${loading} z-50`}>
        <div className='w-full h-full flex items-center justify-center'>
        <h1>I am Loader and no One can Stop me</h1>
        </div>
    </div>
  )
}

export default Loader
