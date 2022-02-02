import React from 'react';

import search from '../../../assets/images/Search.svg';

import './search.scss';

export const Search = () => {
    return (
        <form id="search_place">
            <img src={search} alt="search_icon" id="search_icon"/>
            <input type="text" placeholder="Search" id="search"/>
        </form>
    );
};