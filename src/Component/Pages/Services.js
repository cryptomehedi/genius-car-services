import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('services.json')
        .then(data => setServices(data.data))
    },[])
    return (
        <div>
            <h2 className='font-semibold text-center text-4xl my-6'>Our service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {
                    services.map(service => <Service service={service} key={service.id} />)
                }
            </div>
        </div>
    );
};

export default Services;