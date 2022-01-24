import React, {useState} from 'react';
import './FormInput.scss';

export const FormInput = (
    {labelTxt, plcHolder, inputType, inputValue, setInputValue,
        inputName, inputBlur, error
    }
) => {
    return (
        <div className="input_block">
            <label htmlFor="input_form_email_su" className="label_form">{labelTxt}</label> <br/>
            <input
                type={inputType}
                value={inputValue}
                onChange={setInputValue}
                onBlur={inputBlur}
                className={error[inputName]? "error-input input_form modal_inputs" : " input_form modal_inputs"}
                name={inputName}
                placeholder={plcHolder}
            />
        </div>
    );
};
