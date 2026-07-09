import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Input, Button, Logo} from '../components'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth' 
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = navigate()
    const dispatch = useDispatch()
    return (
        <div>Form</div>
    )
}

export default Login
