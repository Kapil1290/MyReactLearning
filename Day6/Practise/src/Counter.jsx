import { useState } from "react";


function Counter({name}){

    const [count, setCount] = useState(0);

    return(
        <>
        <div >
        <p>Our First Counter App {name}</p>
        <h1>Counter: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
        </>
    )
}

export default Counter;