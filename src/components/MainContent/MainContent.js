import React, {useEffect} from 'react';
import {LeftBar} from '../LeftBar/LeftBar'
import {SearchBar} from '../SearchBar/SearchBar'
import './MainContent.scss'
import {DownBar} from "./DownBar/DownBar";

export const MainContent = ({children, func, downBar, quantity, storeId, setContentList, openMoveModal, closeDownBar}) => {


    return (
        <div className={downBar ? "page-with-downbar" : "page-without-downbar" }>
            <div className="homepage" id="warehouse_page">
                <LeftBar closeDownBar={closeDownBar}/>
                <div className="main_content_space">
                    <SearchBar func={func}/>
                    <div className="main_container" id="main_container">
                        {children}
                    </div>
                </div>
            </div>
            {downBar && <DownBar quantity={quantity} storeId={storeId} setContentList={setContentList} openMoveModal={openMoveModal} closeDownBar={closeDownBar}/>}
        </div>

    );
};