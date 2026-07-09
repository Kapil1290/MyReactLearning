import { useId } from "react"
import React from 'react'

function Select({label,options,className,...props}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {
                label && 
                <label htmlFor={id}
                className=""
                ></label>
            }
            {
                <select name="" id={id} ref={ref} {...props}
                className={` 
                px-3 py-2 rounded-lg bg-amber-100 outline-none 
                focurs:bg-gray-200 duration-200 border border-gray-100 w-full
                ${className}`}>

                    {
                        options?.map((option)=>(
                            <option key={option} value="OPTION">
                                {option}
                            </option>
                        ))
                    }
                </select>
            }
        </div>
    )
}

export default React.forwardRef(Select)  // this another way to pass select func. as forwardref func.
