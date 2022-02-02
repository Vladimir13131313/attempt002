import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss'

export const NavItem = ({navitem, linkTo, func, selected}) => {
    return (
        <li className={selected ? "nav_link nav_link_selected" : "nav_link"} id="home_button" onClick={func}>
            <img src={navitem.icon} alt={navitem.name}/>
            <div className="nav_link_name">
                <div>
                    {navitem.name}
                </div>
            </div>
        </li>
    );
};