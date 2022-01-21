import React from "react";
import logo from "../../assets/images/logo.png";
import './Logo.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="speedline" className="logo_img"/>
        </div>
    )
}
