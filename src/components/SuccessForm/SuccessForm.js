import React from 'react';
import {Button} from '../Button/Button'

export const SuccessForm = ({mainPic, header, btnFunc}) => {
    return (
        <div id="success">
            <div className="warehouse_pattern">
                <img src={mainPic} alt="success"/>
            </div>
            <div className="log_in_header" id="login_header">
                {header}
            </div>
            <Button style="common_button log_in_btn" name="continue" func={btnFunc}/>
        </div>
    );
};