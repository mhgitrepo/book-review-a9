import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center gap-x-12 py-6 text-xl'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;