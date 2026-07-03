
import React, { useEffect, useRef, useState } from "react";


function UnControlled(){
    const inputRef = useRef()  // it return the object {current: null}

   

    function handleChange(e){
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.style.padding = "20px"

    }

    return(
        <div>
            <input type="text" ref={inputRef} /> <br /> <br />
            <button onClick={(e)=>{handleChange(e)}} >Submit</button>
        </div>
    )
}

export default UnControlled