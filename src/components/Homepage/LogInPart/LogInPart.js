import React, {useState} from 'react';
import {Button} from "../../Button/Button";
import './LogInPart.scss';

const LogInPart = ({funcLog, funcSign}) => {

    return (
        <div className="login_part">
            <div className="container">
                <div className="authorization">
                    <Button style="log_in" name='log in' func={funcLog}/>
                    <Button style="common_button sign_up" name="sign up" func={funcSign}/>
                </div>
            </div>
        </div>
    );
};

export default LogInPart;