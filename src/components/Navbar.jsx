import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
            <div className='container'>
                <a href="/" className='navbar-brand'>FleetPanda</a>
                <button className='navbar-toggler' type='button'>
                    &#9776; 
                </button>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className='nav-link'>Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/blogs" className='nav-link'>Blogs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/login" className='nav-link'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
