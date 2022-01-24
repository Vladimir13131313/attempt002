import React from 'react';
import './LeftBar.scss'
import {Logo} from '../Logo/Logo';
import {NavBar} from './NavBar/NavBar'

export const LeftBar = () => {
    return (
        <div className="left_bar">
            <div className="logo_place">
                <Logo/>
            </div>
            <NavBar/>
        </div>
    );
};