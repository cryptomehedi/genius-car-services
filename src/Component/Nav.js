import React from 'react';
import CustomLink from './CustomLink';

const Nav = () => {
    return (
        <nav>
            <ul className={`flex bg-white justify-center w-full sticky font-semibold`}>
                <CustomLink  className="mx-2 md:mx-5" to="/">Home</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/about">About</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/login">Login</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/register">Sign Up</CustomLink>
            </ul>
        </nav>
    );
};

export default Nav;