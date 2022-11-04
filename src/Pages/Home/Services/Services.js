import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h2 className='text-3xl font-semibold'>Our Service Area</h2>
                <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reiciendis amet excepturi</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)

                }
            </div>
        </div>
    );
};

export default Services;