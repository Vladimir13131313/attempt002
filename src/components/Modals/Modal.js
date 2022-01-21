import React, {useState} from 'react';
import './Modal.scss';
import { styled, Modal } from "@mui/material";
import closeButton from '../../assets/images/close.png'


export const ModalWindow = ({open, close, children}) => {

    const Backdrop = styled('div')`
        z-index: -1;
        position: fixed;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);`;

    return (
        <div className="modal-window">
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
            >
                <div className="modal-container-common">
                    <div className="close-button" onClick={close}>
                        <img src={closeButton} alt="close"/>
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </Modal>
        </div>
    );
};
