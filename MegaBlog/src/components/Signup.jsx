import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {login} from '../store/authSlice'
import {useForm} from 'react-hook-form'
import {Button} from './index'
import { useDispatch } from 'react-redux'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [error, setError] = useState("") 
    const {register, handleSubmit}  = useForm()

    const create = async(data) =>{
        setError("");
        try{
           const userData = await authService.createAccount(data);
           if(userData){
            authService.
           }
        }catch(err){
            setError(err.message)
        }
    }
 
    return (
        <div>signup</div>
    )
}

export default Signup
