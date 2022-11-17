import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProviders';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { singIn } = useContext(authContext)
    const [loginError, setLoginError] = useState('');


    const handleLogin = data => {
        console.log(data);
        singIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err.message);
                setLoginError("Email And Password don't match ");
            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow'>
                <h3 className='text-xl text-center'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='text'
                            {...register("email",
                                { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='Password'
                            {...register("password",
                                {
                                    required: "password is required",
                                    minLength: { value: 6, message: 'Password Must be 6 charecter longer' }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget Password?</span> </label>
                    </div>
                    <div>
                        {loginError && <p className='text-red-600 mt-1 mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current inline flex-shrink-0 h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {loginError}</p>}
                    </div>
                    <input className='btn btn-accent w-full mb-4' value='Login' type="submit" />
                </form>
                <p className='text-[12px] text-center'>New to Doctors Portal? <Link className='text-secondary ' to="/singup">Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;