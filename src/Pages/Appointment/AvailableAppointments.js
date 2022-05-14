import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='px-20 mx-auto'>
            <h4 className='text-xl text-secondary text-center'> Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-3'>
                {
                    services.map(service => <Service key={service._id} service={service}
                        setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;