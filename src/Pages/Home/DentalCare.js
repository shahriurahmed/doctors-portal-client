import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from './Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div class="hero my-40 bg-white container  mx-auto px-4">
            <div class="hero-content flex-col lg:flex-row ">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;