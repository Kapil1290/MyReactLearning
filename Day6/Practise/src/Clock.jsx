import { useState } from "react";
import Counter from "./Counter";

function Clock(){

    const [clock, setClock] = useState(["A","B","C"]);

    function handleChange(){
        setClock(["D",...clock]);
    }

    return(
        <>
        <button onClick={handleChange}>Increment</button>
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", alignContent:"center", gap:"20px"}}>
            {
            clock.map(clock => <Counter name={clock} key={clock}></Counter>)
            }
        </div>
        </>
    )
}

export default Clock;
