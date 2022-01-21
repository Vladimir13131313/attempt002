import React from 'react';
import {TopBar} from "./TopBar/TopBar";
import {MainContent} from "./MainContent/MainContent";
import './InfoPart.scss';

export const InfoPart = () => {
    return (
        <div className="info_part">
            <div className="container">
                <TopBar/>
                <MainContent />
            </div>
        </div>
    );
};