import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Input, Button, Logo} from '../components'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth' 
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = navigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("");

    const login = async(data) =>{
        setError("")

        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()   
                if(userData){
                    useDispatch(authLogin(userData))
                    navigate('/')
                }
            }
        }catch(err){
            setError(err.message)
        }
    } 
    return (
        <div>Form</div>
    )
}

export default Login
