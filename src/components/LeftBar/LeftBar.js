import React from 'react';

import {Logo} from '../Logo/Logo';
import {NavBar} from './NavBar/NavBar'

import './LeftBar.scss'

export const LeftBar = ({closeDownBar}) => {
    return (
        <div className="left_bar">
            <div className="logo_place">
                <Logo/>
            </div>
            <NavBar closeDownBar={closeDownBar}/>
        </div>
    );
};