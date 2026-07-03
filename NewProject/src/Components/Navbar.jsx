import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import App from '../../src/App'
import '../../src/Components/Styles/Navbar.css'

export default function Navbar() {
  return (
    <ul style={{display:'flex', flexDirection:'row', justifyContent:'space-between', textDecoration:'none'}}>
        <li style={{listStyle:'none'}}>
            <NavLink to='/' className={({isActive})=>isActive ? "active-link" : ""} >Home</NavLink>
        </li>
        <li style={{listStyle:'none'}} >
            <NavLink className='tabs' to='/about' className={({isActive})=>isActive ? "active-link" : ""}>About</NavLink>
        </li>
        <li style={{listStyle:'none'}} >
            <NavLink to='/dashboard' className={({isActive})=>isActive ? "active-link" : ""}>Dashboard</NavLink>
        </li>

    </ul>
  )
}
