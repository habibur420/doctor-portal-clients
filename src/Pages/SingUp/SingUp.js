import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProviders';

const SingUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(authContext);
    const [singupError, setSingupError] = useState('')


    const handleSingUp = (data) => {
        console.log(data);
        setSingupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('user created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
                setSingupError('user alredy created')
            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow'>
                <h3 className='text-xl text-center'>Sing up</h3>
                <form onSubmit={handleSubmit(handleSingUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input type='text'
                            {...register("name", {
                                required: "name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            {...register("email", {
                                required: "email is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='Password'
                            {...register("password", {
                                required: "password is required",
                                minLength: { value: 6, message: "password Must be 6 charecters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be uppercase number and special charecters ' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {errors.password?.message}</p>}
                        {singupError && <p className='text-red-600 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {singupError}</p>}
                    </div>
                    <input className='btn btn-accent w-full mb-4 mt-4' value='Sing Up' type="submit" />
                </form>
                <p className='text-[12px] text-center'>Alredy Have an account? <Link className='text-secondary ' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SingUp;