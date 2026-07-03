import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0);

  const intervalIdRef = useRef(null);
  function clickStart(){
    if(intervalIdRef.current != null){
      return;
    }

    intervalIdRef.current = setInterval(() => {
      setTime(time=>time+1);
    }, 1000);
  }

  function clickStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  }

  return (
    <>
    <h1>StopWatch: {time}</h1>
    <div>
      <button onClick={clickStart} >Start</button>
      <button onClick={clickStop} >Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App
