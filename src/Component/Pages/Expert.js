import React from 'react';

const Expert = ({expert}) => {
    const {name , img} = expert
    return (
        <div className='my-2'>
            <div className='flex justify-center'><img className='rounded-full' src={img} alt="" /></div>
            <h2 className="text-xl text-center">{name}</h2>
        </div>
    );
};

export default Expert;