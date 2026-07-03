import { useState } from 'react'
import './App.css'

function App(prop) {
  const[color, setColor] = useState("red");



  return (
    <div className="main" style={{background:color}}>

      <div className="toolkit">
        <div onClick={(e)=>setColor('green')} className="c" id='c1'>Green</div>
        <div onClick={()=>setColor('yellow')} className="c" id='c2'>Yellow</div>
        <div onClick={()=>setColor('white')} className="c" id='c3'>White</div>
        <div onClick={()=>setColor('pink')} className="c" id='c4'>Pink</div>
        <div onClick={()=>setColor('blue')} className="c" id='c5'>Blue</div>
        <div onClick={()=>setColor('orange')} className="c" id='c6'>Orange</div>
        <div onClick={()=>setColor('beige')} className="c" id='c7'>being</div>
      </div>
    </div>
  )
}

export default App
