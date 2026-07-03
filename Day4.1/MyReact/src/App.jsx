
import { useCallback, useState } from "react";

// useState(initial val to count)  
// SetCount num ki value ko update kar do, and App function  ko re-render kar do


function App(){
  const[age, setAge] = useState(18);

  const ageCalc = useCallback(()=>{
    console.log(`Age is:${age}`)
  },[age])
  ageCalc()

  return(
    <div  >
      {age}
      <button
      onClick={()=>{setAge(age+1)}}
      >Click to Increase</button>
    </div>
    
  )
}


export default App;