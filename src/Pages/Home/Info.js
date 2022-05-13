import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';

import phone1 from '../../assets/icons/phone.png';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-40 container  mx-auto px-4' >
            <InfoCard cardTitle="Opening Hours" cardText="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-secondary to-primary " img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" cardText="Brooklyn, NY 10036, United States" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" cardText="+000 123 456789" bgClass="bg-gradient-to-r from-secondary to-primary " img={phone1}></InfoCard>
        </div>
    );
};

export default Info;