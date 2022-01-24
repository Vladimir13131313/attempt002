import React from 'react';
import './search.scss'
import search from '../../../assets/images/Search.svg'

export const Search = () => {
    return (
        <form id="search_place">
            <img src={search} alt="search_icon" id="search_icon"/>
            <input type="text" placeholder="Search" id="search"/>
        </form>
    );
};