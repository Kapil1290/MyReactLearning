import React, { useState } from "react";

function Form(){

    // const [user, setUser] = useState("")
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    

    const [data, setData] = useState({
        user: '',
        email: '',
        password: ''
    })
    const [toggle, setToggle] = useState(false);

    function handleChange(e){
        e.preventDefault()
        setToggle(true)
    }


    return(
        
        <div>
            <form>
            <label htmlFor="username">Username:</label>
            <input type="text" onChange={(e)=>setData({...data, user:e.target.value})} /> <br /> <br />
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={(e)=>setData({...data, email:e.target.value})}/> <br /> <br />
            

            <label htmlFor="password">Password:</label>
            <input type="password" onChange={(e)=>setData({...data, password:e.target.value})} /> <br /> <br />
            <button onClick={(e)=>{handleChange(e)}} >Submit</button>
        </form>

        {toggle && (
            <div>
                <h1>Username is : {data.user}</h1>
                <h1>Email is : {data.email} </h1>
                <h1>Password is : {data.password} </h1>
            </div>
        )}

       

        </div>

    )
}

export default Form;