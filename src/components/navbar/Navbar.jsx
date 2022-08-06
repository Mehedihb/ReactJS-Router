import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="mainNavbar">
            <div className="container mainNavbar-inner">
                <div className='brandLogo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="186" height="50" viewBox="0 0 186 50">
                        <g id="Logo" transform="translate(6491 4837)">
                            <g id="BG" transform="translate(-6491 -4837)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0">
                                <rect width="186" height="50" stroke="none" />
                                <rect x="0.5" y="0.5" width="185" height="49" fill="none" />
                            </g>
                            <g id="Content" transform="translate(1)">
                                <g id="Github" transform="translate(-6494 -4841.332)">
                                    <g id="BG-2" data-name="BG" transform="translate(4 4.332)" fill="#fff" stroke="#d9e9f8" stroke-width="1">
                                        <rect width="50" height="50" rx="8" stroke="none" />
                                        <rect x="0.5" y="0.5" width="49" height="49" rx="7.5" fill="none" />
                                    </g>
                                    <path id="Github-2" data-name="Github" d="M63.57,49.033A16.1,16.1,0,1,0,42.229,64.262a1.544,1.544,0,0,0,.829-1.2c0-.886-.019-3.164-.019-3.164a11.168,11.168,0,0,1-1.7.119,3.646,3.646,0,0,1-3.686-2.488,4.359,4.359,0,0,0-1.809-2.145c-.417-.268-.512-.584-.03-.675,2.224-.417,2.793,2.509,4.279,2.976a4.178,4.178,0,0,0,3.1-.248,3.208,3.208,0,0,1,1.277-2.073C40.7,55.005,38.456,53.7,37.294,51.6l-.125-.235-.292-.667-.086-.239a11.291,11.291,0,0,1-.525-3.647,6.223,6.223,0,0,1,1.775-4.621,6.451,6.451,0,0,1,.279-4.642s1.636-.337,4.727,1.865c1.676-.714,6.144-.774,8.258-.159,1.3-.853,3.67-2.063,4.628-1.724.259.415.818,1.625.339,4.283a7.479,7.479,0,0,1,2.021,5.336,13.809,13.809,0,0,1-.414,3.313l-.14.473s-.08.223-.167.436l-.1.235c-1.121,2.449-3.42,3.363-7.136,3.743,1.2.754,1.549,1.7,1.549,4.259s-.034,2.9-.026,3.491a1.624,1.624,0,0,0,.8,1.178A16.108,16.108,0,0,0,63.57,49.033Z" transform="translate(-18.701 -19.435)" />
                                </g>
                                <text id="MehediHB" transform="translate(-6430 -4799)" font-size="28" font-family="Nunito-Medium, Nunito" font-weight="500" letter-spacing="-0.065em"><tspan x="0" y="0">MehediHB</tspan></text>
                            </g>
                        </g>
                    </svg>
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
