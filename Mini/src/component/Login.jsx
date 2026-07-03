
import React, { useContext, useState } from 'react';
import userContext from '../context/UserContext';
import Profile from './Profile';
import UserContextProvider from '../context/UserContextProvider';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(userContext)
    // console.log(setUser)

    function handleClick(e) {

        e.preventDefault()
        setUser({ username, password })
        console.log(user.username)
        
    }


    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input type="text" placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleClick} >Submit</button>
        </div>
    )
}
