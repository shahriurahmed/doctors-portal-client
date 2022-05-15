import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ResetModal from './ResetModal';
import { ToastContainer } from 'react-toastify';

const Login = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);
    }

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";





    const [modal, setModal] = useState(false);
    const updateModal = () => {
        setModal(true);
    }


    useEffect(() => {
        if (user || guser) {
            navigate(from, { replace: true });

        }
    }, [user, guser, from, navigate])


    if (error || gerror) {
        signInError = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }
    if (loading || gloading) {
        return <Loading></Loading>
    }

    const handleEchange = () => {
        console.log('something typed');
    }


    return (
        <div className='flex h-screen justify-center items-center  '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={handleEchange} placeholder="Enter Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn btn-block' value="Login" type="submit" />
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
                    <p ><small>Forget Password? <label htmlFor="reset-modal" class=" text-secondary cursor-pointer">Reset Password</label></small></p>

                    {
                        <ResetModal ></ResetModal>
                    }

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-block btn-outline btn-secondary">Continue with Google</button>

                </div>
            </div>

        </div>
    );
};

export default Login;