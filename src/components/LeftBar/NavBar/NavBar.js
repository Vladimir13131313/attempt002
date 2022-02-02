import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {NavItem} from './NavItem/NavItem';

import './NavBar.scss'
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



export const NavBar = ({closeDownBar}) => {
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

    const navigate = useNavigate();

    useEffect(() => {
        checkOpenedPage();
    }, [])

    function checkOpenedPage() {
        let page = window.location.pathname.split('/')[1];
        switch (page) {
            case 'home':
                setSelected(true, false, false, false, false, false);
                setPicture(homeSelected, warehouse, account, cards, contacts, chat);
                break;
            case 'stores':
                setSelected( false, true, false, false, false, false);
                setPicture(home, warehouseSelected, account, cards, contacts, chat);
                break;
            case 'account':
                setSelected( false, false, true, false, false, false);
                setPicture(home, warehouse, accountSelected, cards, contacts, chat);
                break;
            case 'cards':
                setSelected( false, false, false, true, false, false);
                setPicture(home, warehouse, account, cardSelected, contacts, chat);
                break;
            case 'contacts':
                setSelected( false, false, false, false, true, false);
                setPicture(home, warehouse, account, cards, contactSelected, chat);
                break;
            case 'chat':
                setSelected( false, false, false, false, false, true);
                setPicture(home, warehouse, account, cards, contacts, chatSelected);
                break;
        }

    }

    const listItems = [
        {
            name: "Home",
            icon: homeIcon,
            func: homeOpen,
            selected: selectedHome,
        },
        {
            name: "Warehouse",
            icon: warehouseIcon,
            func: warehouseOpen,
            selected: selectedWarehouse,
        },
        {
            name: "Accounts",
            icon: accountIcon,
            func: accountOpen,
            selected: selectedAccount,
        },
        {
            name: "Cards",
            icon: cardIcon,
            func: cardOpen,
            selected: selectedCard,
        },
        {
            name: "Contacts",
            icon: contactIcon,
            func: contactOpen,
            selected: selectedContact,
        },
        {
            name: "Chat",
            icon: chatIcon,
            func: chatOpen,
            selected: selectedChat,
        },
    ]

    function homeOpen() {
        closeDownBar(0, false);
        navigate("/home");
        setSelected(true, false, false, false, false, false);
        setPicture(homeSelected, warehouse, account, cards, contacts, chat);
    }
    function warehouseOpen() {
        closeDownBar(0, false);
        navigate("/stores")
        setSelected( false, true, false, false, false, false);
        setPicture(home, warehouseSelected, account, cards, contacts, chat);
    }
    function accountOpen() {
        closeDownBar(0, false);
        navigate("/account")
        setSelected( false, false, true, false, false, false);
        setPicture(home, warehouse, accountSelected, cards, contacts, chat);
    }
    function cardOpen() {
        closeDownBar(0, false);
        navigate("/cards");
        setSelected( false, false, false, true, false, false);
        setPicture(home, warehouse, account, cardSelected, contacts, chat);
    }
    function contactOpen() {
        closeDownBar(0, false);
        navigate("/contacts");
        setSelected( false, false, false, false, true, false);
        setPicture(home, warehouse, account, cards, contactSelected, chat);
    }
    function chatOpen() {
        closeDownBar(0, false);
        navigate("/chat")
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
                    <NavItem key={listItems.indexOf(item)} selected={item.selected} navitem={item} func={item.func}/>
                ))}
            </ul>
        </div>
    );
};