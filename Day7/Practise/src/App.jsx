import { useCallback, useMemo, useState } from 'react'
import Sum from './Sum'
import Post from './Post';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);

  // function CalPrime(number){
  //   let total=0;
    
  //   if(number>1)
  //     total++;

  //   for(let i=3; i<=number; i++){
  //     total++;
  //     for(let j=2; j<i; j++){
  //       if(i%j==0){
  //         total--;
  //         break;
  //       }
  //     }
  //   }

  //   return total;
  // }

  const prime = useMemo(()=>{
    let total=0;
    
    if(number>1)
      total++;

    for(let i=3; i<=number; i++){
      total++;
      for(let j=2; j<i; j++){
        if(i%j==0){
          total--;
          break;
        }
        
      }
    }

    return total
  }, [number])

  const handleChange = useCallback(()=>{
    console.log("count is ",count)
  },[count])

  const obj = useCallback(()=>{
    return {name :"Kapil", age:"23"};
  },[])

  console.log("App render")
  return (
    <>
    
    <h1>Counter: {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <h2>Prime Count is: {prime}</h2>
    <h1 style={{color:"Red"}} >Numbers will increase by 10. Current number is: {number} </h1>
    <h1>Number: {number}</h1>
    <button onClick={()=>{setNumber(number+100)}}>Increment</button>

    <button onClick={handleChange}>Click</button>
    <Sum val={number}></Sum>
    
    <Post value={obj}></Post>
    </>
  )
}

export default App;
