import React from 'react';
import './Home.css';
import BookReading from '../../image/book-reading.gif';
import useReviewData from '../../hooks/useReviewData';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews] = useReviewData();
    return (
        <div className='w-8/12 mx-auto min-h-screen'>
            <div className='mt-5 flex gap-x-10'>
                <div className='mt-11'>
                    <h1 className='text-6xl font-extrabold'>The Best <br/> Novel Book <br/> I've ever read.</h1>
                    <p className='text-bold font-semibold mt-2'>By Mr Duo</p>
                    <p className='font-normal mt-10 text-slate-600'>Mother is a novel written by Maxim Gorky in 1906 about revolutionary factory workers. It was first published, in English, in Appleton's Magazine in 1906, then in Russian in 1907. The work was translated into many languages, and was made into a number of films.</p>
                    <p className='text-xl font-semibold mt-5'><a href="/">- Full Article</a></p>
                </div>
                <div className=''>
                    <img className='' src={BookReading} alt="book review" />
                </div>
            </div>
            <div className='mt-20 mb-10'>
                <h3 className='text-3xl font-bold text-center'>Customer reviews ({reviews.length})</h3>
                <div className='grid grid-cols-3 justify-items-center'>
                {
                   reviews.slice(0, 3).map(review => <Reviews 
                    key = {review.id}
                    review = {review}
                   ></Reviews>) 
                }
            </div>
            </div>
        </div>
    );
};

export default Home;