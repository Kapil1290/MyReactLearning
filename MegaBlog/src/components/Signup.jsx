import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import { Button } from './index'
import { useDispatch } from 'react-redux'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) dispatch(login(data))

            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <span>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className='
                            text-center text-2xl font-bold
                            leading-tight'>Sign in to your account</h2>

                <p className='
                            mt-2 text-center text-base text-black/35
                            '>
                    Don&apos;t have an account?&nbsp;
                    <Link to='/signup'
                        className='font-medium text-primary
                                transition-all duration-200 
                                hover:underline'
                    >
                        SignUp
                    </Link>
                </p>
                {
                    error && <p className='text-red-500 text-center'>
                        {error}
                    </p>
                }

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter Name"
                            {...register("name", {
                                required: true
                            })}
                        />

                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                    </div>

                    <div>
                        <Input
                        label="Password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                        />
                    </div>

                    <Button 
                    type="submit"
                    className="w-full"
                    >
                        Create Account
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default Signup
