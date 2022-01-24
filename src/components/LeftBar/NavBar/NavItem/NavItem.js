import React from 'react';
import './NavItem.scss'

export const NavItem = ({navitem}) => {
    return (
        <li className="nav_link" id="home_button">
            <img src={navitem.icon} alt={navitem.name}/>
            <div className="nav_link_name">
                <div>
                    {navitem.name}
                </div>
            </div>
        </li>
    );
};