
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import {email, z} from "zod"

const formSchema = z.object({
    name: z.string().min(5,"Minimum length is 5").max(10, "Maximum length is 10"),
    age: z.coerce.number().min(18, "Minimum age should be 18").max(40, "Maximum age should be 40"),
    password: z.string().min(5, "Minimum length should be 5").max(20, "Maximum age should be 20"),
    email: z.email("Email is invalid"),
    confirm: z.string()
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // attach error to confirm
  });


function Zodform(){

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formSchema)
    });

    function submitForm(data){
        console.log(data)
    }

    console.log("render")

    return(
        <>
        <form onSubmit={handleSubmit(submitForm)} >
        <div>
            <label htmlFor="first">Name: </label>
            <input type="text" id="first" {...register('name')}  />
            {errors.name && <span>{errors.name.message}</span> }
        </div>
        

        <div>
            <label htmlFor="fourth">Email: </label>
            <input type="text" id="fourth" {...register('email')}  />
            {errors.email && <span>{errors.email.message}</span> }
        </div>
        

        <div>
            <label htmlFor="second">Age: </label>
            <input type="number" id="second" {...register('age')} required />
            {errors.age && <span>{errors.age.message}</span> }
        </div>
        
        <div>
            <label htmlFor="third">Password: </label>
            <input type="password" id="third" {...register('password')} required />
        </div>

        <div>
            <label htmlFor="fifth">Confirm: </label>
            <input type="password" id="fifth" {...register('confirm')} required />
            {errors.confirm && <span>{errors.confirm.message}</span> }
        </div>
        
        <button type="submit" >Submit</button>
        </form>
        </>
    )
}

export default Zodform;