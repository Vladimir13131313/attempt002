import React, {useState} from 'react';
import './AuthForm.scss';
import {FormInput} from "../Input/FormInput";
import {Button} from "../Button/Button";

export const AuthForm = (
    {formHeader, haveAcc, whereTo, openOtherForm, btnAction,
        valEmail, valPassword, setEmail, setPassword, inputBlur,
        emailName, passwordName, errorEmail, errorPassword
    }
) => {



    return (
        <form onSubmit={btnAction}>
            <div className="log_in_header">
                {formHeader}
            </div>
            <FormInput
                labelTxt="Email"
                inputType="text"
                plcHolder="Enter a email"
                inputValue={valEmail}
                setInputValue={setEmail}
                inputName={emailName}
                inputBlur={inputBlur}
                errorClass={errorEmail}
            />
            <FormInput
                labelTxt="Password"
                inputType="password"
                plcHolder="Enter a password"
                inputValue={valPassword}
                setInputValue={setPassword}
                inputName={passwordName}
                inputBlur={inputBlur}
                errorClass={errorPassword}
            />
            <Button btnType={"submit"} name={formHeader} style="common_button log_in_btn"/>
            <div className="link_to_reg">{haveAcc} <a
                className="link_btn"
                id="login_modal_btn" onClick={openOtherForm}>{whereTo}</a></div>
        </form>
    );
};