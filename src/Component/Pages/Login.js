import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email= emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister =e =>{
        navigate('/register')
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-6">Login</h2>
            <form className="mt-16 text-center" onSubmit={handleSubmit}>
            <div className="mt-2 grid grid-cols-2">
                <label className="font-semibold mr-2 flex justify-end">Your Email Address:</label>
                <input ref={emailRef} required className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="email" name=""  placeholder="Email Address" />
            </div>
            <div className="mt-2 grid grid-cols-2">
                <label className="font-semibold mr-2 flex justify-end">Password :</label>
                <input ref={passwordRef} required className="border-2 rounded px-2 w-1/2 border-gray-500 flex justify-start" type="password" name=""  placeholder="Password" />
            </div >
            <p style={{color: 'red'}}>{error?.message} {}{error1?.message}</p>
            
                <div className="my-2"><input className='bg-neutral-400 p-1 w-1/4 rounded font-semibold hover:bg-green-400 hover:text-white duration-300'  type="submit" value="Submit" /></div>
                <div className="text-red-400 font-medium cursor-pointer" onClick={async ()=> {await sendPasswordResetEmail(emailRef.current.value)}}>Forget Password</div>
            
        </form>
        <div className='text-center font-semibold'>
                    {
                        loading && <p className='text-yellow-400'>Your Login Is Processing...</p>
                    }
                    {
                        sending && <p className='text-yellow-400'>Your Forget Password Email Is Sending...</p>
                    }
                </div>
        <p className='text-center'>New in here? Please <span className="text-yellow-400 cursor-pointer" onClick={navigateRegister} >Register</span></p>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;