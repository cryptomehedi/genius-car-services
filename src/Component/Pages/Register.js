import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()

    const handleSubmitReg = (e) => {
        e.preventDefault()
        // const name= e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        if(password.length > 6) {
            createUserWithEmailAndPassword(email , password)
        }
    }
    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div className="form-container">
            <div>
                <h2 className="text-center text-3xl font-semibold mt-6">Sign Up</h2>
                <form className="mt-16 text-center" onSubmit={handleSubmitReg}>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Name</label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="text" name="name" required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="email">Email</label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="email" name="email" required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="password">Password</label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="password" name="password" required />
                    </div>
                    {/* <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="confirm-password">Confirm Password</label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="password" name="confirm-password" required />
                    </div> */}
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='bg-neutral-400 p-1 rounded my-2 font-semibold hover:bg-green-400 hover:text-white duration-300' type="submit" value="Sign Up" />
                </form>
                <div className='text-center font-semibold'>
                    {
                        loading && <p className='text-yellow-400'>Your Registration Is Processing...</p>
                    }
                </div>
                <p className='text-center'>Already Have An Account? <span  onClick={navigateLogin} className="text-yellow-400 cursor-pointer" to="/login">Login</span></p>
                
            </div>
        </div>
    );
};

export default Register;