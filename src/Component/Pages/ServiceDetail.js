import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>This is a service detail {serviceId}</h2>
            <div className='text-center mt-10'> <Link className=" border bg-red-300 p-2" to={'/checkout'}>checkOut</Link></div>
        </div>
    );
};

export default ServiceDetail;