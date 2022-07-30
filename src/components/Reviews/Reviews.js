import React from 'react';

const Reviews = ({review}) => {
    const {name, reviewText, rating, image, location} = review;

    return (
        <div className='w-96 mt-12 shadow-lg p-5 rounded-md'>
            <div className='flex align-top'>
                <div>
                    <img className='rounded-full' src={image} alt={name} />
                </div>
                <div className='ml-3'>
                    <h5 className='text-lg font-bold'>{name}</h5>
                    <p>{location}</p>
                </div>
            </div>
            <div className='mb-6 mt-6'>
                <span>{rating}</span>
            </div>
            <div className='mb-6 mt-6'>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default Reviews;