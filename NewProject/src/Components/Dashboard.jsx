import React from 'react'
import Home from './Home'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navi = useNavigate()
  return (
    
    <div>Dashboard

  
      <button onClick={()=>{navi('course')}}>Courses</button>
      <button onClick={()=>{navi('test')}}>Mock Test</button>
      <button onClick={()=>{navi('report')}}>Reports</button>
   

      <Outlet/>
    </div>
  )
}
