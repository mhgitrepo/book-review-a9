import React from 'react';
import useReviewData from '../../hooks/useReviewData';
import Reviews from '../Reviews/Reviews';

const AllReviews = () => {
    const [reviews] = useReviewData();

    return (
        <div className='w-8/12 mx-auto mb-10'>
            <div className='grid grid-cols-3 justify-items-center'>
                {
                   reviews.map(review => <Reviews 
                    key = {review.id}
                    review = {review}
                   ></Reviews>) 
                }
            </div>
        </div>
    );
};

export default AllReviews;