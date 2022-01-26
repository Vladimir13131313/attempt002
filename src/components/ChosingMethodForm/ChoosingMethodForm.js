import React from 'react';
import './ChosingMethodForm.scss';
import {Button} from '../Button/Button';
import {ButtonForChoosing} from './ButtonForChoosing/ButtonForChoosing'

export const ChoosingMethodForm = ({buttonList, ActBtnName, ActBtnFunc, labelTxt}) => {
    return (
        <div>
            <div className="label_payment_method"><label className="label_form">{labelTxt}</label></div>
            {buttonList.map(btn => (
                <ButtonForChoosing key={buttonList.indexOf(btn)} buttonPic={btn.pic} func={btn.func}/>
            ))}
            <Button style="common_button log_in_btn" name={ActBtnName} func={ActBtnFunc}/>
        </div>
    );
};