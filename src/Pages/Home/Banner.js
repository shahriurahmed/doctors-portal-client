import React from 'react';
import img1 from '../../assets/images/chair.png';
import img2 from '../../assets/images/bg.png'
import PrimaryButton from './Shared/PrimaryButton';
const Banner = () => {
    return (
        <div className='container  mx-auto px-4 bg-local bg-no-repeat bg-cover' style={{ backgroundImage: `url(${img2})` }}>
            <div class="hero my-20   "  >
                <div class="hero-content flex-col lg:flex-row-reverse  " >
                    <img src={img1} style={{ width: "50%" }} />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;