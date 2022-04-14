import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name= e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
    }
    const navigateLogin = () =>{
        navigate('/login')
    }
    return (
        <div className="form-container">
            <div>
                <h2 className="text-center text-3xl font-semibold mt-6">Sign Up</h2>
                <form className="mt-16 text-center" onSubmit={handleSubmit}>
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
                    <p style={{color: 'red'}}></p>
                    <input className='bg-neutral-400 p-1 rounded my-2 font-semibold hover:bg-green-400 hover:text-white duration-300' type="submit" value="Sign Up" />
                </form>
                {
                        // loading && <p>loading...</p>
                    }
                <p className='text-center'>Already Have An Account? <span  onClick={navigateLogin} className="text-yellow-400 cursor-pointer" to="/login">Login</span></p>
                
            </div>
        </div>
    );
};

export default Register;