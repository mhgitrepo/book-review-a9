import React from 'react';
import AboutImage from '../../image/about.svg';

const About = () => {
    return (
        <div className='mx-auto min-h-screen mt-10'>
            <img className='w-8/12 mx-auto' src={AboutImage} alt="about" />
        </div>
    );
};

export default About;