import React from 'react';
import './NavBar.scss'
import {NavItem} from './NavItem/NavItem';
import home from '../../../assets/images/Home.svg';
import warehouse from '../../../assets/images/Document.svg';
import account from '../../../assets/images/Category.svg';
import cards from '../../../assets/images/Chart.svg';
import contacts from '../../../assets/images/2 User.svg';
import chat from '../../../assets/images/Chat.svg';


export const NavBar = () => {
    const listItems = [
        {
            name: "Home",
            icon: home,
        },
        {
            name: "Warehouse",
            icon: warehouse,
        },
        {
            name: "Accounts",
            icon: account,
        },
        {
            name: "Cards",
            icon: cards,
        },
        {
            name: "Contacts",
            icon: contacts,
        },
        {
            name: "Chat",
            icon: chat,
        },
    ]
    return (
        <div className="nav_bar">
            <ul>
                {listItems.map(item => (
                    <NavItem key={listItems.indexOf(item)} navitem={item}/>
                ))}

            </ul>
        </div>
    );
};