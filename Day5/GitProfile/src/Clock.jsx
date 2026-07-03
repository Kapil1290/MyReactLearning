import { useEffect, useState } from "react";


function Clock(){

    const [time, setTime] = useState(new Date().toLocaleDateString());
    const [Show, setShow] = useState(true);

    useEffect(()=>{
        if(!Show)
            return;

        const intervalId = setInterval(()=>{
          setTime(new Date().toLocaleTimeString());  // it will pending for the future till 2 second
          console.log("hii") 
        },1000)

        return ()=>{
        clearInterval(intervalId);
    }
    },[Show])

    

    return(
        <>
        <button onClick={()=>{setShow(!Show)}}>{Show?"Hide":"Show"}</button>
        {
            Show && <h1>Current Timing: {time}</h1>
        }
        </>
    );
}

export default Clock;