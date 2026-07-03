import React from 'react'
import '../index.css'
import {useNavigate} from 'react-router'
import Contact from './Contact'


export default function Navbar() {
  const navigate = useNavigate("")
  return (
    <div className='h-15 w-full  flex flex-row  justify-evenly bg-white border border-gray-300'>
        <div className='flex items-center'>
          <p className='text-red-700 font-bold text-3xl'>Logo</p>
        </div>

        <div className=''>
          <ul className='flex font-small cursor-pointer h-20 w-100 flex-row justify-between items-center'>
            <li className='text-xl hover:text-red-700 mb-5
            transition-all
            duration-200 ease-in-out
            delay-10
            hover:text-red-700
            hover:scale-120' >
              <div onClick={()=>{navigate('/')}}>
                Home
              </div>
            </li>
            
            <li className=' 
            transition-all
            duration-200 ease-in-out
            delay-120
            hover:text-red-700
            hover:scale-120
            text-xl mb-5'>
              <div onClick={()=>{navigate('/about')}}>
                About
              </div>
            </li>

            <li className='text-xl mb-5 hover:text-red-700
            transition-all
            duration-200 ease-in-out
            delay-120
            hover:text-red-700
            hover:scale-120'>
              <div onClick={()=>{navigate('/contact')}}>
                Contact
              </div>
            </li>

            <li className='text-xl mb-5 hover:text-red-900
            transition-all
            duration-200 ease-in-out
            delay-120
            hover:text-red-700
            hover:scale-120'>
              <div onClick={()=>{navigate('/github')}}>
                Github
              </div>
            </li>
          </ul>
        </div>

        <div className='w-50 flex flex-row justify-between items-center'>
          <button className='w-20 h-5 font-medium'>Log In</button>
          <button className='w-27 h-8 rounded-md font-medium bg-red-600 text-white 
          transition-all 
          duration-300
          ease-in-out
          hover:scale-110
          hover:shadow-md
          hover:shadow-black/50'>Get Started</button>
        </div>
    </div>
  )
}
