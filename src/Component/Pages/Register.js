import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spiner';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [error , setError] = useState('')
    const [agree , setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification : true});
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()

    const handleSubmitReg = async  (e) => {
        e.preventDefault()
        const displayName= e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        setError('')
        if(password.length > 5) {
            await  createUserWithEmailAndPassword(email , password)
            await updateProfile({ displayName });
        }else{
            setError('Password Must Be 6 Characters')
        }
    }
    const navigateLogin = () =>{
        navigate('/login')
    }
    
    if(user){
        navigate(from, { replace: true })
    }
    return (
        
            <div>
                <h2 className="text-center text-3xl font-semibold mt-6">Sign Up</h2>
                <form className="mt-16 text-center" onSubmit={handleSubmitReg}>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Name <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="text" name="name" required/>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="email">Email<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="email" name="email" required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="password">Password<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="password" name="password" required />
                    </div>
                    {/* <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="confirm-password">Confirm Password</label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="password" name="confirm-password" required />
                    </div> */}
                    <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'ml-1 text-green-500' : 'text-red-500 ml-1'} htmlFor="terms">Accept Genius Terms & Conditions</label>
                    <p className='text-red-500 font-semibold'>{error.length>6 ? error : <>{error1?.message.length > 5 ? error1?.message : error2?.message}</>}</p>
                    <input className={`bg-neutral-400 p-1 w-1/4 rounded font-semibold duration-300 my-2 ${agree ? 'hover:bg-green-400 hover:text-white' : 'disabled:opacity-75'}`} disabled={!agree} type="submit" value="Sign Up" />
                </form>
                <div className='text-center font-semibold'>
                    {
                        loading && <Spinner text='Your Registration Is Processing...' />
                    }
                </div>
                <p className='text-center'>Already Have An Account? <span  onClick={navigateLogin} className="text-yellow-400 cursor-pointer" to="/login">Login</span></p>
                <SocialLogin></SocialLogin>
            </div>
        
    );
};

export default Register;