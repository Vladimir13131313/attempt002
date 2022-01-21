import React from 'react';
import {Button} from "../../../Button/Button";
import './MainContent.scss'

export const MainContent = () => {
    return (
        <div>
            <div className="slogan">
                We will deliver your cargo exactly on time
            </div>
            <div className="subslogan">
                For us, goods are our most valuable assets.
                So that with certainty we can provide the best service for your goods
            </div>
            <Button style="common_button get_started" name="Get started"/>
        </div>
    );
};