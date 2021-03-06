import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl font-bold text-secondary text-center">{service.name}</h2>
                <p className='text-center'>
                    {service.slots.length > 0 ? <span>{service.slots[0]}</span>
                        :
                        <span className='text-red-500'>Try another date</span>}
                </p>
                <p className='text-center'>{service.slots.length}  {service.slots.length > 1 ? 'spaces' : 'space'} available</p>

                <div className='card-actions justify-center mt-3'>
                    <label htmlFor="booking-modal"
                        disabled={service.slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary  ">Book Appointment </label>
                </div>


            </div>
        </div>
    );
};

export default Service;