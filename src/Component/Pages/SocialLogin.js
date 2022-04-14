import React from 'react';
import googleLogo from '../../images/social/google-logo.png'
import facebookLogo from '../../images/social/facebook-logo.png'
import gitHubLogo from '../../images/social/github-logo.png'
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    if(user){
        navigate('/')
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div style={{height: '1px'}} className='bg-slate-400 w-1/2'></div>
                <p className='mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-slate-400 w-1/2'></div>
            </div>
            <p className='text-red-500 font-semibold text-center'>{error1?.message} {error2?.message}</p>
            <div className='flex justify-center my-3 '><div onClick={()=>signInWithGoogle()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-1/2 flex justify-center items-center'> <img className='w-7 mr-2' src={googleLogo} alt="" /><p>Google Sign In</p></div></div>
            <div className='flex justify-center my-3 '><div className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-1/2 flex justify-center items-center'> <img className='w-7 mr-2' src={facebookLogo} alt="" /><p>Facebook Sign In</p></div></div>
            <div className='flex justify-center my-3 '><div onClick={()=>signInWithGithub()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-1/2 flex justify-center items-center'> <img className='w-7 mr-2' src={gitHubLogo} alt="" /><p>GitHub Sign In</p></div></div>
            
        </div>
    );
};

export default SocialLogin;