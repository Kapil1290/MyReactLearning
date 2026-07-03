import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-amber-100'>
    <div className='h-full w-full flex flex-row justify-evenly'>
      <div className='w-100 h-50 relative top-30 flex gap-5 flex-col'>
        <p className='text-7xl text-black-700 font-sans font-bold'>Enjoy your study </p>
         
        
          <button className='w-40 p-1 font-bold rounded-sm bg-red-600 text-white 
          transition-all 
          duration-300
          ease-in-out
          hover:scale-110
          hover:shadow-md
          hover:shadow-black/50
          '>Download Now</button>
         
      </div>

      <div className='my-20'>
        <img className='h-80 w-110  rounded-2xl 
        transition-all 
        duration-200
        ease-in-out 
        hover:scale-105
        hover:cursor-pointer
        ' src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg" alt="" />
      </div>

      
    </div>

    <div className='flex justify-center '>
     
      <img className= 'rounded-full w-120 h-80 my-24' src="https://cdn.pixabay.com/photo/2020/11/04/14/54/student-5712628_1280.jpg" alt="" />
    </div>

    {/* <footer className='h-50'>
      all rights reserved 
    </footer> */}
    </div>
  )
}
