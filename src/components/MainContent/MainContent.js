import React from 'react';
import {LeftBar} from '../LeftBar/LeftBar'
import {SearchBar} from '../SearchBar/SearchBar'
import './MainContent.scss'

export const MainContent = ({children, func}) => {
    return (
        <div className="warehouse_page homepage" id="warehouse_page">
            <LeftBar/>
            <div className="main_content_space">
                <SearchBar func={func}/>
                <div className="main_container" id="main_container">
                    {children}
                </div>
            </div>

        </div>
    );
};