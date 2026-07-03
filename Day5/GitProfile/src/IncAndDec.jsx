import { useState } from "react";


function IncAndDec(){

    // const [count, setCount] = useState([22,32,33]);
    const [count, setCount] = useState(0);

    function handleChange(){
        // setCount([...count,40]);
        setCount(count+1)
    }

    return(
        <>
        <p>Increment and Decrement</p>
        <div><h1>Count: {count}</h1></div>
        <button onClick={handleChange}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    );
}


export default IncAndDec;