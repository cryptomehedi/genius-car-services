import React from 'react';

const Service = ({service}) => {
    const {img, name, price, description} = service;
    return (
        <div className="bg-amber-200 shadow-2xl mb-6 md:mb-0 rounded-lg p-4">
            <div className="bg-yellow-300 p-4 rounded-lg shadow-2xl">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Description: <small>{description}</small></p>
            <button className="bg-gray-400 mt-4 p-1 rounded">Book for :  {name}</button>
            
        </div>
        </div>
    );
};

export default Service;