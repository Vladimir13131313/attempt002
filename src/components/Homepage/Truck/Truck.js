import React from 'react';
import truck from '../../../assets/images/track.png';
import './Truck.scss';

export const Truck = () => {
    return (
        <div className="track">
            <img src={truck} alt="truck" className="track_pic"/>
        </div>
    );
};