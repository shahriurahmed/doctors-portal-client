import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex  items-center'>
                    <div style={{ height: "75px", width: "75px" }}>
                        <img className='border-2 rounded-full  border-secondary p-1 ' src={review.img} alt="" />
                    </div>
                    <div className='px-5'>
                        <h3 className='text-xl font-bold'>{review.name}</h3>
                        <h5>{review.country}</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;