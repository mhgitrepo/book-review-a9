import React from 'react';
import NavLink from '../NavLink/NavLink';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='flex justify-center gap-x-12 py-6 text-xl'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/reviews'>Reviews</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
};

export default Navigation;