import React from 'react';
import './Navbar.scss';

export const NavBar = () => {
    return (
        <ul className="top_bar_list">
            <li className="top_bar_link">
                Home
            </li>
            <li className="top_bar_link">
                Clients
            </li>
            <li className="top_bar_link">
                Service
            </li>
            <li className="top_bar_link">
                Contact
            </li>
        </ul>
    );
};
