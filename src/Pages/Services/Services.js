import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <Container>
            <h1 className='text-primary mt-2 animate__animated animate__backInUp'>Our Reconditioned Car</h1>
            <p className='animate__animated animate__backInUp'>Your Belief in Our Future Prospects</p>
            <div className="service-container">
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;