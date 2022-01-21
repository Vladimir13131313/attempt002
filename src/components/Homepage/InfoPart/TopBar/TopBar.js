import React from 'react';
import {Logo} from "../../../Logo/Logo";
import {NavBar} from "./NavBar/NavBar";
import './TopBar.scss';

export const TopBar = () => {
    return (
        <div className="top_bar">
            <Logo/>
            <NavBar/>
        </div>
    );
};
