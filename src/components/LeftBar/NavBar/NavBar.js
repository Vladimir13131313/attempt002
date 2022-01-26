import React, {useState} from 'react';
import './NavBar.scss'
import {NavItem} from './NavItem/NavItem';
import home from '../../../assets/images/Home.svg';
import warehouse from '../../../assets/images/Document.svg';
import account from '../../../assets/images/Category.svg';
import cards from '../../../assets/images/Chart.svg';
import contacts from '../../../assets/images/2 User.svg';
import chat from '../../../assets/images/Chat.svg';

import homeSelected from '../../../assets/images/HomeSelected.svg';
import warehouseSelected from '../../../assets/images/DocumentSelected.svg';
import accountSelected from '../../../assets/images/CategorySelected.svg';
import cardSelected from '../../../assets/images/ChartSelected.svg';
import contactSelected from '../../../assets/images/AccountSelected.svg';
import chatSelected from '../../../assets/images/ChatSelected.svg';


export const NavBar = () => {
    const [homeIcon, setHomeIcon] = useState(home);
    const [warehouseIcon, setWarehouseIcon] = useState(warehouse);
    const [accountIcon, setAccountIcon] = useState(account);
    const [cardIcon, setCardIcon] = useState(cards);
    const [contactIcon, setContactIcon] = useState(contacts);
    const [chatIcon, setChatIcon] = useState(chat);

    const [selectedHome, setSelectedHome] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);
    const [selectedContact, setSelectedContact] = useState(false);
    const [selectedChat, setSelectedChat] = useState(false);



    const listItems = [
        {
            name: "Home",
            icon: homeIcon,
            link: "/home",
            func: homeOpen,
            selected: selectedHome,
        },
        {
            name: "Warehouse",
            icon: warehouseIcon,
            link: "/stores",
            func: warehouseOpen,
            selected: selectedWarehouse,
        },
        {
            name: "Accounts",
            icon: accountIcon,
            link: "/account",
            func: accountOpen,
            selected: selectedAccount,
        },
        {
            name: "Cards",
            icon: cardIcon,
            link: "/cards",
            func: cardOpen,
            selected: selectedCard,
        },
        {
            name: "Contacts",
            icon: contactIcon,
            link: "/contacts",
            func: contactOpen,
            selected: selectedContact,
        },
        {
            name: "Chat",
            icon: chatIcon,
            link: "/chat",
            func: chatOpen,
            selected: selectedChat,
        },
    ]

    function homeOpen() {
        setSelected(true, false, false, false, false, false);
        setPicture(homeSelected, warehouse, account, cards, contacts, chat);
    }
    function warehouseOpen() {
        setSelected( false, true, false, false, false, false);
        setPicture(home, warehouseSelected, account, cards, contacts, chat);
    }
    function accountOpen() {
        setSelected( false, false, true, false, false, false);
        setPicture(home, warehouse, accountSelected, cards, contacts, chat);
    }
    function cardOpen() {
        setSelected( false, false, false, true, false, false);
        setPicture(home, warehouse, account, cardSelected, contacts, chat);
    }
    function contactOpen() {
        setSelected( false, false, false, false, true, false);
        setPicture(home, warehouse, account, cards, contactSelected, chat);
    }
    function chatOpen() {
        setSelected( false, false, false, false, false, true);
        setPicture(home, warehouse, account, cards, contacts, chatSelected);
    }

    function setPicture(homIc, whIc, accountIc, cardIc, contactIc, chatIc) {
        setHomeIcon(homIc);
        setWarehouseIcon(whIc);
        setAccountIcon(accountIc);
        setCardIcon(cardIc);
        setContactIcon(contactIc);
        setChatIcon(chatIc);
    }
    function setSelected(homIc, whIc, accountIc, cardIc, contactIc, chatIc) {
        setSelectedHome(homIc);
        setSelectedWarehouse(whIc);
        setSelectedAccount(accountIc);
        setSelectedCard(cardIc);
        setSelectedContact(contactIc);
        setSelectedChat(chatIc);
    }

    return (
        <div className="nav_bar">
            <ul>
                {listItems.map(item => (
                    <NavItem key={listItems.indexOf(item)} selected={item.selected} navitem={item} linkTo={item.link} func={item.func}/>
                ))}
            </ul>
        </div>
    );
};