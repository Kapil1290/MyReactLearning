import { useForm } from "react-hook-form"

function Form(){

    const {register, handleSubmit, formState: { errors }} = useForm();

    function submitForm(data){
        console.log(data)
    }

    console.log("render")

    return(
        <>
        <form onSubmit={handleSubmit(submitForm)} >
        <div>
            <label htmlFor="first">Name: </label>
            <input type="text" id="first" {...register('name',
                {required:"Please Enter Name"}
            )}  />
        </div>
        {errors.name && <span>{errors.name.message}</span> }

        <div>
            <label htmlFor="second">Age: </label>
            <input type="number" id="second" {...register('age', 
                {
                    min:{
                        value: 10,
                        message: "Minimum age should be 10"
                    },

                    max:{
                        value:80,
                        message: "Maximum age should be 20"
                    }
                }
            )} required />
        </div>
        {errors.age && <span>{errors.age.message}</span> }

        <div>
            <label htmlFor="third">Password: </label>
            <input type="password" id="third" {...register('password',
                {
                    minLength:{
                        value: 10,
                        message: "Minimum Length should be 5"
                    },

                    maxLength:{
                        value:20,
                        message: "Maximum Length should be 10"
                    }
                }
            )} required />
        </div>
        {errors.password && <span>{errors.password.message}</span> } 
        <button type="submit" >Submit</button>
        </form>
        </>
    )
}

export default Form;