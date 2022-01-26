import React from 'react';
import {Search} from './Search/Search';
import profile from '../../assets/images/Profile.svg';
import setting from '../../assets/images/Setting.svg';
import notification from '../../assets/images/Notification.svg';
import './SearchBar.scss';


export const SearchBar = ({func}) => {
    return (
        <div className="main_bar">
            <Search/>
            <ul className="setting_bar">
                <li className="top_bar_link">
                    <img onClick={func} src={profile} alt="profile_icon"/>
                </li>
                <li className="top_bar_link">
                    <img src={setting} alt="setting_icon"/>
                </li>
                <li className="top_bar_link">
                    <img src={notification} alt="notification_icon"/>
                </li>
            </ul>
        </div>
    );
};