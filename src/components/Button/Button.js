import React from 'react';
import './Button.scss'

export const Button = ({ style, name, func, btnType }) => {
    return (
        <button type={btnType || "button"} className={style} onClick={func}>{name}</button>
    );
};

