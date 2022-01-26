import React from 'react';
import {Button} from '../Button/Button';
import {DropdownButton} from '../DropdownButton/DropdownButton';
import './ContentPanel.scss';

export const ContentPanel = ({title, containButtons, buttonStyles, buttonText, buttonFunc}) => {
    return (
        <div className="window_panel">
            <h1 className="window_title">{title}</h1>
            {containButtons &&
                <div className="button-set">
                    <DropdownButton/>
                    <Button style={buttonStyles} name={buttonText} func={buttonFunc}/>
                </div>
                }

        </div>
    );
};