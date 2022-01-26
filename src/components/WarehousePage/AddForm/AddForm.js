import React from 'react';
import './AddForm.scss';
import {FormInput} from '../../Input/FormInput';
import {Button} from '../../Button/Button'

export const AddForm = ({formHeader, buttonTitle, formik}) => {

    const inputs = [
        {
            name: "name",
            labelText: "Name of the warehouse",
            inputType: "text",
            plcHolder: "Enter a name",
            inputValue: formik.values.name,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
        {
            name: "length",
            labelText: "Length, m",
            inputType: "number",
            plcHolder: "Enter a length",
            inputValue: formik.values.length,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
        {
            name: "width",
            labelText: "Width, m",
            inputType: "number",
            plcHolder: "Enter a width",
            inputValue: formik.values.width,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
        {
            name: "height",
            labelText: "height, m",
            inputType: "number",
            plcHolder: "Enter a height",
            inputValue: formik.values.height,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
    ]

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="log_in_header">
                {formHeader}
            </div>
            <div className="form-content">
                {inputs.map(it => (
                    <FormInput labelTxt={it.labelText} inputType={it.inputType} plcHolder={it.plcHolder}
                               inputName={it.name} inputValue={it.inputValue} setInputValue={it.setInputValue}
                               inputBlur={it.inputBlur} error={it.error} key={inputs.indexOf(it)}
                    />
                    ))}
                <Button btnType={"submit"} name={buttonTitle} style="common_button log_in_btn"/>
            </div>

        </form>
    );
};