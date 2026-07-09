import { useId } from "react"
import React from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="w-full">
            {   label && <label className="inline-block pl-1 mb-1" 
                 htmlFor={id}>
                 {label}
                </label>
            }

            {
                <input type={type} 
                className={`w-full outline-none rounded-md border
                     border-gray-300 ${className}`}
                    ref={ref}
                />
            }
        </div>
    )
})

export default Input
