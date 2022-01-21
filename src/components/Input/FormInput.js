import React from 'react';
import './FormInput.scss';

export const FormInput = (
    {labelTxt, plcHolder, inputType, inputValue, setInputValue, inputName, inputBlur, errorClass}
) => {
    return (
        <div className="input_block">
            <label htmlFor="input_form_email_su" className="label_form">{labelTxt}</label> <br/>
            <input
                type={inputType}
                value={inputValue}
                onChange={setInputValue}
                onBlur={inputBlur}
                className={errorClass+" input_form modal_inputs "}
                name={inputName}
                placeholder={plcHolder}
            />
        </div>
    );
};
