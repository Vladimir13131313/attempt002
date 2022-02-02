import React from 'react';

import './Button.scss'

export const Button = ({ style, name, func, btnType="button" }) => {
    return (
        <button type={btnType} className={style} onClick={func}>{name}</button>
    );
};

