import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitenning from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitenning
        }
    ];
    return (
        <div className='my-36 container  mx-auto px-4'>
            <div className='text-center'>
                <h3 className='text-primary text-xl uppercase font-bold'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2'>
                {
                    services.map(service => <Service key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;