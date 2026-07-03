import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  // function handleclick() {
  //   navigate('/about')
  // }
  
  return (
    <div>Home Page

      <button onClick={()=>{navigate('/dashboard')}}>
        Move to about page
      </button>
    </div>
  )
}
