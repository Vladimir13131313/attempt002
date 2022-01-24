import React, {useState} from 'react';
import './AuthForm.scss';
import {FormInput} from "../Input/FormInput";
import {Button} from "../Button/Button";

export const AuthForm = (
    {formHeader, haveAcc, whereTo, openOtherForm, btnAction,
        emailName, passwordName, formik
    }
) => {
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="log_in_header">
                {formHeader}
            </div>

            <FormInput
                labelTxt="Email"
                inputType="text"
                plcHolder="Enter a email"
                inputValue={formik.values.email}
                setInputValue={formik.handleChange}
                inputName={emailName}
                inputBlur={formik.handleBlur}
                error={formik.errors}
            />
            <FormInput
                labelTxt="Password"
                inputType="password"
                plcHolder="Enter a password"
                inputValue={formik.values.password}
                setInputValue={formik.handleChange}
                inputName={passwordName}
                inputBlur={formik.handleBlur}
                error={formik.errors}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="label_form error_label">{formik.errors.email}</div>
            ) : null}
            {formik.touched.password && formik.errors.password ? (
                <div className="label_form error_label">{formik.errors.password}</div>
            ) : null}
            <Button btnType={"submit"} name={formHeader} style="common_button log_in_btn"/>
            <div className="link_to_reg">{haveAcc} <a
                className="link_btn"
                id="login_modal_btn" onClick={openOtherForm}>{whereTo}</a></div>
        </form>
    );
};