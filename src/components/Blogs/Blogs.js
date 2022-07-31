import React from 'react';

const Blogs = () => {
    return (
        <div className='w-8/12 mx-auto min-h-screen'>
            <div className='mt-9 mb-10 grid grid-cols-2 justify-items-center gap-5'>
                <div className='p-5 shadow-lg rounded-lg'>
                    <h2 style={{"color" : "#fa8072"}} className='text-2xl font-bold mb-6'>What is Context Api?</h2>
                    <p>The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
                </div>
                <div className='p-5 shadow-lg rounded-lg'>
                    <h2 style={{"color" : "#fa8072"}} className='text-2xl font-bold mb-6'>Difference between block and inline block elements?</h2>
                    <p><span className='font-bold'>Block-level: </span>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available.</p>
                    <p><span className='font-bold'>Inline Block-level: </span>An inline element does not start on a new line. An inline element only takes up as much width as necessary.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;