import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
const validation = z.object({
    name: z.string().min(2, 'minimum 2 characters'),
    email: z.string().email('enter invalid email'),
    password: z.string()
        .min(6, 'password must be at least 6 characters')
        .regex(/[a-z]/, 'enter small characters')
        .regex(/[A-Z]/, 'enter capital characters')
        .regex(/[0-9]/, 'enter numbers')
        .regex(/[@$_&#]/, 'enter @,$,_,&,# thos one character'),
    // confirmPassword: z.string().refine((data) => data === data.password, { password: z.string }),
})
const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validation)
    })


    const onSubmit = (data) => {
        console.log("onsubmit")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='email' {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
                <input type="text" placeholder='username'  {...register('username')} />
                {errors.username && <p>{errors.username.message}</p>}
                <input type="text" placeholder='password' {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form