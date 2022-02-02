import React from 'react';

export const ButtonForChoosing = ({buttonPic, func}) => {
    return (
        <div className="auth_button">
            <button className="payment_button" id="shipment_by_plane_for_moving">
                <img src={buttonPic} alt="button" onClick={func}/>
            </button>
        </div>
    );
};