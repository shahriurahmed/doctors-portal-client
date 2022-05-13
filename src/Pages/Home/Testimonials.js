import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            country: "California"
        },
        {
            _id: 2,
            name: "Rushlana Boeva",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            country: "California"
        },
        {
            _id: 3,
            name: "Helencrichtiana",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            country: "California"
        }
    ]
    return (
        <section className='mt-40 container  mx-auto px-8'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid gap-10 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;