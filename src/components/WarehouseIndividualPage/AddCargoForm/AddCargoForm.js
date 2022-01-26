import React from 'react';
import './AddCargoForm.scss';
import {FormInput} from '../../Input/FormInput';
import {Button} from '../../Button/Button'
import {RadioButton} from './RadioButton/RadioButton'

export const AddCargoForm = ({buttonTitle, formik, radio, radioChange}) => {

    const inputs = [
        {
            name: "name",
            labelText: "Product name",
            inputType: "text",
            plcHolder: "Enter a name",
            inputValue: formik.values.name,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
        {
            name: "manufacturer",
            labelText: "Manufacturer",
            inputType: "text",
            plcHolder: "Enter a name",
            inputValue: formik.values.manufacturer,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
        {
            name: "number",
            labelText: "Item number",
            inputType: "text",
            plcHolder: "Enter an item number",
            inputValue: formik.values.number,
            setInputValue: formik.handleChange,
            inputBlur: formik.handleBlur,
            error: formik.errors,
        },
    ]

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-content">
                {inputs.map(it => (
                    <FormInput labelTxt={it.labelText} inputType={it.inputType} plcHolder={it.plcHolder}
                               inputName={it.name} inputValue={it.inputValue} setInputValue={it.setInputValue}
                               inputBlur={it.inputBlur} error={it.error} key={inputs.indexOf(it)}
                    />
                ))}
                <RadioButton radio={radio} radioChange={radioChange}/>
                <Button btnType={"submit"} name={buttonTitle} style="common_button log_in_btn"/>
            </div>

        </form>
    );
};