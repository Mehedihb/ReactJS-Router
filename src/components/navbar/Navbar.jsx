import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="mainNavbar">
            <div className="container-fluid mainNavbar-inner">
                <div className='brandLogo'>
                <img src={require('../../assets/img/Logo.svg').default} alt='mySvgImage' />
                </div>

                <ul className='navMenu'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
